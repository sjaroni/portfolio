import { Injectable } from '@angular/core';
import { Projects } from '../../shared/interfaces/projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {

  constructor() { }

  projects: Projects[] = [
    {
      id: 0,
      img: './assets/img/my-skills/angular.svg',
      name: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      linkTryItOut: '#1',
      linkGitHub: '#1',
    },
    {
      id: 1,
      img: './assets/img/my-skills/angular.svg',
      name: 'Game',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      linkTryItOut: '#1',
      linkGitHub: '#1',
    },
    {
      id: 2,
      img: './assets/img/my-skills/angular.svg',
      name: 'Test',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      linkTryItOut: '#1',
      linkGitHub: '#1',
    },    
  ];

}