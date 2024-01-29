import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isAboutMeClicked: boolean = true;
  isSkillsClicked: boolean = false;
  isPortfolioClicked: boolean = false;

  clickedLink(fragment: string, event: Event): void {
    event.preventDefault();
    this.deactivateLinks();
    this.activateLink(fragment);    
  }

  deactivateLinks() {    
    this.isAboutMeClicked = false;
    this.isSkillsClicked = false;
    this.isPortfolioClicked = false;
  }

  activateLink(fragment: string) {
    this.isAboutMeClicked = (fragment === 'aboutMe');
    this.isSkillsClicked = (fragment === 'skills');
    this.isPortfolioClicked = (fragment === 'portfolio');
  }
}
