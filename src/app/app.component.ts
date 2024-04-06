import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, PLATFORM_ID, ViewChild,} from '@angular/core';
import {NgxCaptureService} from 'ngx-capture';
import {WebcamImage, WebcamInitError, WebcamModule, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject, tap} from 'rxjs';
import QrScanner from 'qr-scanner';
import {RouterOutlet} from '@angular/router';
import {isPlatformBrowser, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {QrCodeDialogComponent} from "./qr-code-dialog/qr-code-dialog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, NgIf, WebcamModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ARProject';
  @ViewChild('webCam', {static: false}) webCam?: ElementRef<any>;

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();

  private sla: boolean = false;
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = true;
  public deviceId?: string;
  public videoOptions: MediaTrackConstraints = {};
  public errors: WebcamInitError[] = [];
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<
    boolean | string
  >();
  public screenWidth?: number;
  public screenHeight?: number;
  public resultQrCode?: string;
  public isDialogOpen = false;
  public dialogRef: MatDialogRef<QrCodeDialogComponent, any> | undefined

  constructor(
    private readonly captureService: NgxCaptureService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.sla = true;
    }, 1000)
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;

      WebcamUtil.getAvailableVideoInputs().then(
        (mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        }
      );

      this.triggerSnapshotAsync();
    }
  }

  public triggerSnapshotAsync() {
    // Wait 3 seconds and then take a picture each 1 second
    setTimeout(() => {
      setInterval(() => {
//        console.log('Taking picture');
//        console.log(this.webCam)
        this.triggerSnapshot();
      }, 1000);
    }, 3000);
  }

  public triggerSnapshot(): void {
    this.captureService
      .getImage(this.webCam!.nativeElement as any, true)
      .pipe(
        tap((img) => {
          QrScanner.scanImage(img)
            .then((result) => {
              console.log(result)
              if (!this.isDialogOpen || result !== this.resultQrCode) {
                this.openDialog(result);
                this.resultQrCode = result;
              }
            })
            .catch((error) => {});
          /* console.log(error || 'No QR code found.')*/
        })
      )
      .subscribe();
  }

  openDialog(result: string): void {
    if (!this.isDialogOpen) {
      // alert('Não está aberto')
      this.openNewDialog(result)
    } else if (this.isDialogOpen && result == this.resultQrCode) {
      // alert('Já está aberto o msm link')
    } else if (this.isDialogOpen && result != this.resultQrCode && this.dialogRef) {
      // alert('Já está aberto outro link')
      this.dialogRef.close();
      setTimeout(() => {
        this.openNewDialog(result)
      }, 200);
    }
  }

  openNewDialog(result: string) {
    // Abra a nova janela
    this.isDialogOpen = true;
    this.dialogRef = this.dialog.open(QrCodeDialogComponent, {
      width: '250px',
      data: result,
      panelClass: 'custom-dialog-container'
    });

    // Quando a janela for fechada, atualize o estado
    this.dialogRef.afterClosed().subscribe(() => {
      this.isDialogOpen = false;
    });
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }


  public handleImage(webcamImage: WebcamImage): void {
    this.pictureTaken.emit(webcamImage);
  }

  public cameraWasSwitched(deviceId: string): void {
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

}
