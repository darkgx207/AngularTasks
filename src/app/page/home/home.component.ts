import { Component } from '@angular/core';
import { GHeaderComponent } from "../../components/g-header/g-header.component";
import { GButtonComponent } from '../../components/g-button/g-button.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [GHeaderComponent, GButtonComponent,CommonModule]
})
export class HomeComponent {

}
