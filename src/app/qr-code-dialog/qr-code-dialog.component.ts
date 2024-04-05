import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-qr-code-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton
  ],
  template: `
    <h1 mat-dialog-title>QR Code Link</h1>
    <div mat-dialog-content>
      <p>{{ data }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onClick()">❌</button>
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
}
