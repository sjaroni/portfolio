import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { DistanceAreaComponent } from '../../shared/components/distance-area/distance-area.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ 
    ContactFormComponent, 
    TranslateModule,
    DistanceAreaComponent
   ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
