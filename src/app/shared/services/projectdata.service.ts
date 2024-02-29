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
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'PROJECT0_DESCRIPTION',
      linkTryItOut: 'https://www.google.de',
      linkGitHub: 'https://www.vbohz.de',
    },
    {
      id: 1,
      img: 'join.png',
      title: 'Game',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'PROJECT1_DESCRIPTION',
      linkTryItOut: '#1',
      linkGitHub: '#1',
    },
    {
      id: 2,
      img: 'join.png',
      title: 'Test',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'PROJECT2_DESCRIPTION',
      linkTryItOut: '#1',
      linkGitHub: '#1',
    },
  ];

}
