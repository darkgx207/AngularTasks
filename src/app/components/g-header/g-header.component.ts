import { Component } from '@angular/core';
import { GButtonComponent } from '../g-button/g-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBars, faDoorOpen, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'g-header',
  standalone: true,
  imports: [GButtonComponent, FontAwesomeModule,CommonModule, RouterModule],
  templateUrl: './g-header.component.html',
  styleUrl: './g-header.component.scss'
})
export class GHeaderComponent {
  iBars : IconDefinition = faBars;
  iLogout = faDoorOpen;
  activedSideBar : boolean = false;
  logado : boolean = false;
  
  constructor(public router:Router) {  }

  public toggleSideBar() {
    this.activedSideBar = !this.activedSideBar;
    
  }

  public toHome() { 
    this.router.navigateByUrl('');
   }

  public logout() {
    console.log("logout...")
    //logout
  }
}
