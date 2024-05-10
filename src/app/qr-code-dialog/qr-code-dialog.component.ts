import {Component, Inject, OnInit} from '@angular/core';
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
        <button mat-button (click)="learnMore(data)">⬆️</button>
      </div>
    </div>
  `,
})
export class QrCodeDialogComponent implements OnInit{

  public dataa:any;

  constructor(
    public dialogRef: MatDialogRef<QrCodeDialogComponent>,
    public infoDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {
    console.log('chegamos aqui')
    console.log(data)
    let responseFetch:string;
    fetch(data, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response)
        //responseFetch = response.json();
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
       // responseFetch=null;
      });

/*    if(responseFetch) {
      let json = responseFetch;
    }*/
    data = JSON.parse(data).image;
    this.dataa = data;




  }

  public ngOnInit(): void {
    if(!this.dataa.includes('.png')) {
      let cssInjection = document.getElementsByClassName('matContainer')
      //alert(cssInjection.item(0).attributes);
      if (cssInjection.length > 0) {
        (cssInjection[0] as HTMLElement).style.backgroundColor = 'white';
      }
    }
  }

  onClick(): void {
    this.dialogRef.close();
  }

  learnMore(data: any): void {
    // alert(data);
    this.infoDialog.open(InfoDialogComponent, {
      width: '75vw',
      height: '90vh',
      // data: result,
      panelClass: 'custom-dialog-container'
    });
  }


}
