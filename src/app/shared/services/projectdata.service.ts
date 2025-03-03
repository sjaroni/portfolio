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
      stack: 'Vanilla JS | API | Realtime Database',
      description: 'PROJECT0_DESCRIPTION',
      linkTryItOut: 'https://kanban.stefan-jaroni.com',
      linkGitHub: 'https://github.com/sjaroni/join',
      status: '',
      statusText: 'PROJECT4_STACK'
    },    
    {
      id: 1,
      img: 'messenger.png',      
      title: 'PROJECT1_TITLE',
      stack: 'Angular | TypeScript | Firebase',
      description: 'PROJECT1_DESCRIPTION',
      linkTryItOut: 'https://messenger.stefan-jaroni.com',
      linkGitHub: 'https://github.com/sjaroni/dabubble',
      status: '',
      statusText: 'PROJECT4_STACK'
    },
    {
      id: 2,
      img: 'stockchart.png',      
      title: 'PROJECT2_TITLE',
      stack: 'Vue.js | API | Chart.js',
      description: 'PROJECT2_DESCRIPTION',
      linkTryItOut: 'https://stockchart.stefan-jaroni.com/',
      linkGitHub: 'https://github.com/sjaroni/stock-dashboard',
      status: '',
      statusText: 'PROJECT4_STACK'
    },
    {
      id: 3,
      img: 'game.png',
      title: 'PROJECT3_TITLE',
      stack: 'JavaScript | OOP | HTML | CSS',
      description: 'PROJECT3_DESCRIPTION',
      linkTryItOut: 'https://game.stefan-jaroni.com',
      linkGitHub: 'https://github.com/sjaroni/2D-Game',
      status: '',
      statusText: 'PROJECT4_STACK',
    },
    {
      id: 4,
      img: 'new_project.png',      
      title: 'PROJECT4_TITLE',
      stack: 'PROJECT4_STACK',
      description: 'PROJECT4_DESCRIPTION',
      linkTryItOut: '#',
      linkGitHub: '#',
      status: 'disabled',
      statusText: 'PROJECT4_STACK'
    },
  ];

}
