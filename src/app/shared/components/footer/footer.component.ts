import { Component } from '@angular/core';
import { ReferencesComponent } from '../../../main-content/references/references.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ ReferencesComponent, TranslateModule ],
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

  isHoveredImprint: boolean = false;
  isHoveredPrivacy: boolean = false;
}