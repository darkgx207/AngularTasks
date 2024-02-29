import { Component } from '@angular/core';
import { GButtonComponent } from "../../components/g-button/g-button.component";
import { GInputComponent } from '../../components/g-input/g-input.component';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [GButtonComponent, GInputComponent]
})
export class LoginComponent {
    
}
