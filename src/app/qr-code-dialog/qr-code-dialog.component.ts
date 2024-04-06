import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";
import {NgIf, NgOptimizedImage} from "@angular/common";

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
<!--        <img src='../../assets/bulbasaur.png'>-->
        <img alt="" src='{{ data }}' width="100%">
      </div>
      <div mat-dialog-actions style="justify-content: space-around">
        <button mat-button (click)="onClick()">❌</button>
        <button mat-button (click)="learnMore(data)">⬆️</button>
      </div>
    </div>
  `,
})
export class QrCodeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<QrCodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }

  learnMore(data: any): void {
    alert(data);
  }


}
