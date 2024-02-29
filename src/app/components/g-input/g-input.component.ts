import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'g-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <input type="{{type}}" id="input"  *ngIf="placeholder" [placeholder]="placeholder">
    <input type="{{type}}" id="input"  *ngIf="!placeholder">
  `,
  styles: `
    input {
      margin-bottom: 1rem;
      padding: 0.5rem;
    }
  `
})
export class GInputComponent {
  @Input() placeholder!:string;
  @Input() type:string = "text";
}
