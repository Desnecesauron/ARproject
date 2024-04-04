import {
  Component,
  ElementRef,
  EventEmitter, Inject,
  OnInit,
  Output, PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import {NgxCaptureService} from 'ngx-capture';
import {WebcamImage, WebcamInitError, WebcamModule, WebcamUtil} from 'ngx-webcam';
import {Observable, Subject, tap} from 'rxjs';
import QrScanner from 'qr-scanner';
import {RouterOutlet} from '@angular/router';
import {isPlatformBrowser, JsonPipe, NgForOf, NgIf} from "@angular/common";

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

  constructor(
    private readonly captureService: NgxCaptureService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }
/*
  public ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if (isPlatformBrowser(this.platformId)) {
      WebcamUtil.getAvailableVideoInputs().then(
        (mediaDevices: MediaDeviceInfo[]) => {
          this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        }
      );
    }

    this.triggerSnapshotAsync();
  }
*/

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
        console.log('Taking picture');
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
              this.resultQrCode = result;
            })
            .catch((error) => console.log(error || 'No QR code found.'));
        })
      )
      .subscribe();
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
