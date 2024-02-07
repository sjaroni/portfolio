import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Applications } from '../../interfaces/applications';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

applications: Applications[] = [
  { name: "Angular", icon: "./assets/img/my-skills/angular.svg" },
  { name: "TypeScript", icon: "./assets/img/my-skills/typescript.svg" },
  { name: "JavaScript", icon: "./assets/img/my-skills/javascript.svg" },
  { name: "HTML", icon: "./assets/img/my-skills/html.svg" },
  { name: "Firebase", icon: "./assets/img/my-skills/firebase.svg" },
  { name: "GIT", icon: "./assets/img/my-skills/git.svg" },
  { name: "CSS", icon: "./assets/img/my-skills/css.svg" },
  { name: "Rest-Api", icon: "./assets/img/my-skills/api.svg" },
  { name: "Scrum", icon: "./assets/img/my-skills/scrum.svg" },
  { name: "Material design", icon: "./assets/img/my-skills/material.svg" }
];
}
