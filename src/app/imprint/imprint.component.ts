import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { NavbarMobileComponent } from '../shared/components/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    NavbarComponent, 
    NavbarMobileComponent,
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
