import { Component, Input } from '@angular/core';

@Component({
  selector: 'g-button',
  standalone: true,
  imports: [],
  templateUrl: './g-button.component.html',
  styleUrl: './g-button.component.scss'
})
export class GButtonComponent {
  @Input() text!:string;
  @Input() func:Function | undefined;


  public handlerFunction():void {
    if(this.func) { this.func(); }
  }
}
