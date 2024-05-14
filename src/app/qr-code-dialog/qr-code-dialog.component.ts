import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component";
import {DataGetterService} from "../data-getter.service";


@Component({
  selector: 'app-qr-code-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    NgOptimizedImage,
    NgIf
  ],
  template: `
    <!--    <h1 mat-dialog-title>QR Code Link</h1> -->
    <!--    <div style="position:absolute; width: 100vw; height: 100vh; display: flex; justify-content: center; align-content: center; flex-direction: column; align-items: center;">-->
    <div class="matContainer">
      <div mat-dialog-content>
        <p *ngIf="!data.includes('png')">{{ data }}</p>
        <!--        <img src='{{ "assets/images/" + data + ".jpg" }}'-->
        <!--        <img src='https://i.pinimg.com/736x/83/a4/e0/83a4e0d8189258e54afe1e58db3764b0.jpg'>-->
        <div style="max-height: 90vh; max-width: 90vw">
          <img alt="" src='{{ data }}' width="100%">
        </div>

        <!--        <img src='../../assets/bulbasaur.png'>-->
      </div>
      <div mat-dialog-actions style="justify-content: space-around">
        <button mat-button (click)="onClick()">❌</button>
        <button mat-button (click)="learnMore(dataLearnMore)">⬆️</button>
      </div>
    </div>
  `,
})
export class QrCodeDialogComponent implements OnInit, OnDestroy{

  public dataa:any;
  public dataLearnMore:string = '';
  public learnMoreWindow: any;

  constructor(
    public dialogRef: MatDialogRef<QrCodeDialogComponent>,
    public infoDialog: MatDialog,
    public dataGetter: DataGetterService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {



  }

  public ngOnInit(): void {

    console.log('data', this.data)
    let result: { image: string, text: string};
    result = this.dataGetter.processValue(this.data)
    console.log('result', result)
    if(result.image) {
      this.data = result.image;
    } else if (result.text) {
      this.data = result.text;
    }
    console.log('data', this.data)
    this.dataLearnMore = result.text;
    console.log('dataLearnMore', this.dataLearnMore)

    /*    if(responseFetch) {
          let json = responseFetch;
        }*/
    // this.data = JSON.parse(this.data).image;
    this.dataa = this.data;



    if(!this.dataa.includes('.png')) {
      let cssInjection = document.getElementsByClassName('matContainer')
      //alert(cssInjection.item(0).attributes);
      if (cssInjection.length > 0) {
        (cssInjection[0] as HTMLElement).style.backgroundColor = 'white';
      }
    }
  }

  public ngOnDestroy(): void {
    if(this.learnMoreWindow) {
      this.learnMoreWindow.close();
    }
  }

  onClick(): void {
    this.dialogRef.close();
  }

  learnMore(dataLearnMore: any): void {
    // alert(data);
    this.learnMoreWindow = this.infoDialog.open(InfoDialogComponent, {
      width: '75vw',
      height: '90vh',
      data: dataLearnMore,
      panelClass: 'custom-dialog-container'
    });

  }


}
