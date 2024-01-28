import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
