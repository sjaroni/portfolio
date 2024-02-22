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

  showImprint: boolean = false;

  ngOnInit(): void {
    if (window.matchMedia("(max-width: 992px)").matches) {
      this.showImprint = true;
    }
  }

  isHovered: boolean = false;
}