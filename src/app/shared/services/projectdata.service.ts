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
      linkTryItOut: 'https://www.google.de',
      linkGitHub: 'https://www.vbohz.de',
      status: ''
    },
    {
      id: 1,
      img: 'join.png',
      title: 'PROJECT1_TITLE',
      stack: 'JavaScript | HTML | CSS',
      description: 'PROJECT1_DESCRIPTION',
      linkTryItOut: '#1',
      linkGitHub: '#1',
      status: ''
    },
    {
      id: 2,
      img: 'join.png',      
      title: 'PROJECT2_TITLE',
      stack: 'PROJECT2_STACK',
      description: 'PROJECT2_DESCRIPTION',
      linkTryItOut: '#1',
      linkGitHub: '#1',
      status: 'disabled'
    },
  ];

}
