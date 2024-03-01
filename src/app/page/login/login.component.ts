import { Component, } from '@angular/core';
import { GButtonComponent } from "../../components/g-button/g-button.component";
import { GInputComponent } from '../../components/g-input/g-input.component';

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [GButtonComponent, GInputComponent,CommonModule]
})
export class LoginComponent {
    public x() {
        console.log('Hello world');
    }
}
