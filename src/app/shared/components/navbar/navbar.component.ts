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
  isMenuOpen: boolean = false;
  showOverlay: boolean = false;

  @ViewChild('menuMobile') menuMobile!: ElementRef;  
  @ViewChild('lineTop') lineTop!: ElementRef;  
  @ViewChild('lineMiddle') lineMiddle!: ElementRef;  
  @ViewChild('lineBottom') lineBottom!: ElementRef;  

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

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
    this.isAboutMeClicked = fragment === 'aboutMe';
    this.isSkillsClicked = fragment === 'skills';
    this.isPortfolioClicked = fragment === 'portfolio';
  }

  openMenu(): void {
    this.deactivateLinks();
    this.showOverlay = true;

    let lineTop = this.lineTop.nativeElement;
    let lineMiddle = this.lineMiddle.nativeElement;
    let lineBottom = this.lineBottom.nativeElement;    

    lineTop.style.animation = 'rotateTop 125ms';
    lineTop.style.transform = 'translateY(14px) rotate(-45deg)';

    lineMiddle.style.animation = 'fadeOut 125ms';
    lineMiddle.style.backgroundColor = 'rgba(254, 254, 254 , 0)';

    lineBottom.style.animation = 'rotateBottom 125ms';
    lineBottom.style.transform = 'translateY(-10px) rotate(45deg)';
    this.toggleMenu();
  }

  closeMenu(): void {    
    let menuMobile = this.menuMobile.nativeElement;
    let lineTop = this.lineTop.nativeElement;
    let lineMiddle = this.lineMiddle.nativeElement;
    let lineBottom = this.lineBottom.nativeElement;

    menuMobile.style.animation = 'slideOut 125ms';
    menuMobile.style.transform = 'translateX(100%)';
    menuMobile.style.zIndex = '1';

    lineTop.style.animation = 'rotateBackTop 125ms';
    lineTop.style.transform = 'translateY(0px) rotate(0deg)';

    lineMiddle.style.animation = 'fadeIn 125ms';
    lineMiddle.style.backgroundColor = 'rgba(255, 255, 255 , 1)';

    lineBottom.style.animation = 'rotateBackBottom 125ms';
    lineBottom.style.transform = 'translateY(0px) rotate(0deg)';

    setTimeout(() => {
         menuMobile.style.display = 'none';
         this.showOverlay = false;
        }, 200);
    this.toggleMenu();
  }
}
