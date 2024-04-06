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
  selector: 'app-info-dialog',
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
    <div class="matContainerInfo" style="background-color: antiquewhite !important;">
      <h1 mat-dialog-title>Sobre o item</h1>
      <div mat-dialog-actions style="justify-content: space-around">
        <button mat-button (click)="onClick()">❌</button>
      </div>
    </div>
  `,
})
export class InfoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }

}
