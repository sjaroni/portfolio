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

  clickedLink(fragment: string): void {

    console.log('Stefan ' + fragment);
    
    this.deactivateLinks();
    this.activateLink(fragment);
  }

  deactivateLinks() {
    this.isAboutMeClicked = false;
    this.isSkillsClicked = false;
    this.isPortfolioClicked = false;
    this.isContactClicked = false;
  }

  activateLink(fragment: string) {
    this.isAboutMeClicked = fragment === 'aboutMe';
    this.isSkillsClicked = fragment === 'skills';
    this.isPortfolioClicked = fragment === 'portfolio';
    this.isContactClicked = fragment === 'contact';
  }

}
