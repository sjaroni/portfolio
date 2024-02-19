import { Component } from '@angular/core';
import { ReferencesComponent } from '../../../main-content/references/references.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ ReferencesComponent ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {  
  isHovered: boolean = false;
}