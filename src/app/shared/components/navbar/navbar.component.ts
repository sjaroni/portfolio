import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isAboutMeClicked: boolean = false;
  isSkillsClicked: boolean = false;
  isPortfolioClicked: boolean = false;
  isContactClicked: boolean = false;
  isMenuOpen: boolean = false;
  showOverlay: boolean = false;
  selectedLanguage: string = 'en';

  @ViewChild('menuMobile') menuMobile!: ElementRef;
  @ViewChild('lineTop') lineTop!: ElementRef;
  @ViewChild('lineMiddle') lineMiddle!: ElementRef;
  @ViewChild('lineBottom') lineBottom!: ElementRef;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage(language: string){
    this.selectedLanguage = language;
  }

  clickedLink(fragment: string, event: Event): void {    
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

    setTimeout(() => {
      if (this.isMenuOpen) this.closeMenu();
    }, 450);
  }

  getMenuMobileElement(): any {
    return this.menuMobile.nativeElement;
  }

  getLineTopElement(): any {
    return this.lineTop.nativeElement;
  }

  getLineMiddleElement(): any {
    return this.lineMiddle.nativeElement;
  }

  getLineBottomElement(): any {
    return this.lineBottom.nativeElement;
  }

  openMenu(): void {
    this.deactivateLinks();
    this.showOverlay = true;

    let lineTop = this.getLineTopElement();
    let lineMiddle = this.getLineMiddleElement();
    let lineBottom = this.getLineBottomElement();

    lineTop.style.animation = 'rotateTop 125ms';
    lineTop.style.transform = 'translateY(12px) rotate(-45deg)';

    lineMiddle.style.animation = 'fadeOut 125ms';
    lineMiddle.style.backgroundColor = 'rgba(0, 190, 232 , 0)';

    lineBottom.style.animation = 'rotateBottom 125ms';
    lineBottom.style.transform = 'translateY(-8px) rotate(45deg)';

    this.toggleMenu();
  }

  closeMenu(): void {
    let menuMobile = this.getMenuMobileElement();
    let lineTop = this.getLineTopElement();
    let lineMiddle = this.getLineMiddleElement();
    let lineBottom = this.getLineBottomElement();

    menuMobile.style.animation = 'slideOut 125ms';
    menuMobile.style.transform = 'translateX(100%)';
    menuMobile.style.zIndex = '1';

    lineTop.style.animation = 'rotateBackTop 125ms';
    lineTop.style.transform = 'translateY(0px) rotate(0deg)';

    lineMiddle.style.animation = 'fadeIn 125ms';
    lineMiddle.style.backgroundColor = 'rgba(0, 190, 232 , 1)';

    lineBottom.style.animation = 'rotateBackBottom 125ms';
    lineBottom.style.transform = 'translateY(0px) rotate(0deg)';

    setTimeout(() => {
      menuMobile.style.display = 'none';
      this.showOverlay = false;
    }, 160);
    this.toggleMenu();
  }
}
