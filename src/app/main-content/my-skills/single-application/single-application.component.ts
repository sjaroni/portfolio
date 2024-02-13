import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-application',
  standalone: true,
  imports: [],
  templateUrl: './single-application.component.html',
  styleUrl: './single-application.component.scss'
})
export class SingleApplicationComponent {

  @Input()singleApplication = {
    name: 'Angular', 
    icon: './assets/img/my-skills/angular.svg'
  };
}
