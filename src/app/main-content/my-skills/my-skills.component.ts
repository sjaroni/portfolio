import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Applications } from '../../shared/interfaces/applications.interface';
import { SingleApplicationComponent } from './single-application/single-application.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ CommonModule , SingleApplicationComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  hovered = false;

  deleteHovered() {
    this.hovered = false;
    console.log('hovered');
  }

  applications: Applications[] = [
    { name: 'Angular', icon: './assets/img/my-skills/angular.svg' },
    { name: 'TypeScript', icon: './assets/img/my-skills/typescript.svg' },
    { name: 'JavaScript', icon: './assets/img/my-skills/javascript.svg' },
    { name: 'HTML', icon: './assets/img/my-skills/html.svg' },
    { name: 'Firebase', icon: './assets/img/my-skills/firebase.svg' },
    { name: 'GIT', icon: './assets/img/my-skills/git.svg' },
    { name: 'CSS', icon: './assets/img/my-skills/css.svg' },
    { name: 'Material design', icon: './assets/img/my-skills/material.svg' },
    { name: 'Rest-Api', icon: './assets/img/my-skills/api.svg' },
    { name: 'Scrum', icon: './assets/img/my-skills/scrum.svg' },
  ];
}
