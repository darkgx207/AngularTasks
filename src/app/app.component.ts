import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GHeaderComponent } from './components/g-header/g-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './page/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    GHeaderComponent,
    FontAwesomeModule,   
    HomeComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  ss:Storage = sessionStorage;
  
  public login() {   }
  
  constructor() {
    this.ss.setItem("macaco","verde")
  }  
  
}
