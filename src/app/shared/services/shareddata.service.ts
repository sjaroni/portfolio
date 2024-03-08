import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService{

  getLanguage: string | undefined | null;
  isAboutMeClicked: boolean = false;
  isSkillsClicked: boolean = false;
  isPortfolioClicked: boolean = false;
  isContactClicked: boolean = false;

  constructor() {}

  /**
   * Check for clicked link in navbar
   * @param fragment string
   */
  clickedLink(fragment: string): void {
    this.deactivateLinks();
    this.activateLink(fragment);
  }

  /**
   * Deactivates all links from navbar
   */
  deactivateLinks() {
    this.isAboutMeClicked = false;
    this.isSkillsClicked = false;
    this.isPortfolioClicked = false;
    this.isContactClicked = false;
  }

  /**
   * Activates current clicked link
   * @param fragment string
   */
  activateLink(fragment: string) {
    this.isAboutMeClicked = fragment === 'aboutMe';
    this.isSkillsClicked = fragment === 'skills';
    this.isPortfolioClicked = fragment === 'portfolio';    
    this.isContactClicked = fragment === 'contact';
  }
}