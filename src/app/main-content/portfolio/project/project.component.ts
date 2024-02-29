import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input()project = {
    id: 0,
    img: './assets/img/my-skills/angular.svg',
    title: 'Join',
    stack: 'Angular | TypeScript | HTML | CSS | Firebase',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    linkTryItOut: '#1',
    linkGitHub: '#1',
  };

  @Input() isNotMobile: any = true;

  ngOnInit(): void {
    if (window.matchMedia("(max-width: 992px)").matches) {
      this.isNotMobile = false;
    }
  }


}
