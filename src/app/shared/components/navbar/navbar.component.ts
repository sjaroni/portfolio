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
  isAboutMeClicked: boolean = false;
  isSkillsClicked: boolean = false;
  isPortfolioClicked: boolean = false;
  isMenuOpen: boolean = false;

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

  //   function init() {

  //     menu = document.getElementById('menu-mobile');
  //     lineTop = document.getElementById('lineTop');
  //     lineMiddle = document.getElementById('lineMiddle');
  //     lineBottom = document.getElementById('lineBottom');
  //     hamburgerButton = document.getElementById('hamburgerButton');
  // }

  openMenu() {
    console.log('menu opened');
    this.deactivateLinks();


    this.isMenuOpen = true;
    // menu.style.animation = 'slideIn 1000ms';
    // menu.style.display = 'flex';
    // menu.style.transform = 'translateX(0%)';
    // menu.style.zIndex = '4';

    // lineTop.style.animation = 'rotateTop 1000ms';
    // lineTop.style.transform = 'translateY(14px) rotate(-45deg)';

    // lineMiddle.style.animation = 'fadeOut 1000ms';
    // lineMiddle.style.backgroundColor = 'rgba(254, 254, 254 , 0)';

    // lineBottom.style.animation = 'rotateBottom 1000ms';
    // lineBottom.style.transform = 'translateY(-10px) rotate(45deg)';

    // hamburgerButton.setAttribute( "onClick", "closeMenu()")
    // hamburgerButton.style.zIndex = '5'
  }

  closeMenu() {
    console.log('menu closed');
    this.isMenuOpen = false;
    // menu.style.animation = 'slideOut 1000ms';
    // menu.style.transform = 'translateX(100%)';
    // menu.style.zIndex = '1';

    // lineTop.style.animation = 'rotateBackTop 1000ms';
    // lineTop.style.transform = 'translateY(0px) rotate(0deg)';

    // lineMiddle.style.animation = 'fadeIn 1000ms';
    // lineMiddle.style.backgroundColor = 'rgba(0, 0, 0 , 1)';

    // lineBottom.style.animation = 'rotateBackBottom 1000ms';
    // lineBottom.style.transform = 'translateY(0px) rotate(0deg)';

    // hamburgerButton.setAttribute( "onClick", "openMenu()")

    // setTimeout(function() {
    //     menu.style.display = 'none';
    //   }, 1001);
  }
}
