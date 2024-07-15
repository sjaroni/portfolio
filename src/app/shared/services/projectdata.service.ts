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
      img: 'join.png',
      title: 'PROJECT0_TITLE',
      stack: 'JavaScript | HTML | CSS',
      description: 'PROJECT0_DESCRIPTION',
      linkTryItOut: 'https://kanban.stefan-jaroni.com',
      linkGitHub: 'https://github.com/sjaroni/join',
      status: ''
    },
    {
      id: 1,
      img: 'game.png',
      title: 'PROJECT1_TITLE',
      stack: 'JavaScript | HTML | CSS',
      description: 'PROJECT1_DESCRIPTION',
      linkTryItOut: 'https://game.stefan-jaroni.com',
      linkGitHub: 'https://github.com/sjaroni/2D-Game',
      status: ''
    },
    {
      id: 2,
      img: 'messenger.png',      
      title: 'PROJECT2_TITLE',
      stack: 'Angular | TypeScript | Firebase',
      description: 'PROJECT2_DESCRIPTION',
      linkTryItOut: 'https://messenger.stefan-jaroni.com',
      linkGitHub: 'https://github.com/sjaroni/dabubble',
      status: ''
    },
    // {
    //   id: 3,
    //   img: 'new_project.png',      
    //   title: 'PROJECT3_TITLE',
    //   stack: 'PROJECT3_STACK',
    //   description: 'PROJECT3_DESCRIPTION',
    //   linkTryItOut: '#1',
    //   linkGitHub: '#1',
    //   status: 'disabled'
    // },
  ];

}
