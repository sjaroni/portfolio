import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  OnInit,
  HostListener,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { SharedDataService } from '../../services/shareddata.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  sharedData = inject(SharedDataService);
  isMenuOpen: boolean = false;
  showOverlay: boolean = false;

  @ViewChild('menuMobile') menuMobile!: ElementRef;
  @ViewChild('lineTop') lineTop!: ElementRef;
  @ViewChild('lineMiddle') lineMiddle!: ElementRef;
  @ViewChild('lineBottom') lineBottom!: ElementRef;

  defaultLanguage: string | undefined | null = 'en';

  constructor(public translate: TranslateService) {
    this.setLanguage();
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.defaultLanguage = event.lang;
      this.sharedData.getLanguage = event.lang;
    });
  }

  ngOnDestroy() {
    this.translate.onLangChange.unsubscribe();
  }

  /**
   * Toggle menu-view
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Functions to get HTML
   * @returns nativeElements
   */
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

  /**
   * Function to open mobile-menu
   */
  openMenu(): void {
    this.sharedData.deactivateLinks();
    this.showOverlay = true;
    let lineTop = this.getLineTopElement();
    let lineMiddle = this.getLineMiddleElement();
    let lineBottom = this.getLineBottomElement();
    this.animationOnOpen(lineTop, lineMiddle, lineBottom);
    this.toggleMenu();
  }

/**
 * Menu open-animation
 * @param lineTop : nativeElement
 * @param lineMiddle  : nativeElement
 * @param lineBottom  : nativeElement
 */
  animationOnOpen(
    lineTop: { style: { animation: string; transform: string } },
    lineMiddle: { style: { animation: string; backgroundColor: string } },
    lineBottom: { style: { animation: string; transform: string } }
  ) {
    lineTop.style.animation = 'rotateTop 125ms';
    lineTop.style.transform = 'translateY(12px) rotate(-45deg)';
    lineMiddle.style.animation = 'fadeOut 125ms';
    lineMiddle.style.backgroundColor = 'rgba(0, 190, 232 , 0)';
    lineBottom.style.animation = 'rotateBottom 125ms';
    lineBottom.style.transform = 'translateY(-8px) rotate(45deg)';
  }

  /**
   * Function to close mobile-menu
   */
  closeMenu(): void {
    setTimeout(() => {
      let menuMobile = this.getMenuMobileElement();
      let lineTop = this.getLineTopElement();
      let lineMiddle = this.getLineMiddleElement();
      let lineBottom = this.getLineBottomElement();
      this.animationOnClose(menuMobile, lineTop, lineMiddle, lineBottom);
      this.showOverlay = false;
    }, 300);
    this.toggleMenu();
  }

  /**
   * Menu close-animation
   * @param menuMobile : nativeElement
   * @param lineTop  : nativeElement
   * @param lineMiddle  : nativeElement
   * @param lineBottom  : nativeElement
   */
  animationOnClose(
    menuMobile: { style: { animation: string; transform: string; zIndex: string; display: string; }; },
    lineTop: { style: { animation: string; transform: string } },
    lineMiddle: { style: { animation: string; backgroundColor: string } },
    lineBottom: { style: { animation: string; transform: string } }
  ) {
    menuMobile.style.animation = 'slideOut 125ms';
    menuMobile.style.transform = 'translateX(100%)';
    menuMobile.style.zIndex = '1';
    lineTop.style.animation = 'rotateBackTop 125ms';
    lineTop.style.transform = 'translateY(0px) rotate(0deg)';
    lineMiddle.style.animation = 'fadeIn 125ms';
    lineMiddle.style.backgroundColor = 'rgba(0, 190, 232 , 1)';
    lineBottom.style.animation = 'rotateBackBottom 125ms';
    lineBottom.style.transform = 'translateY(0px) rotate(0deg)';
    menuMobile.style.display = 'none';
  }

  /**
   * Change language on page and localStorage
   * @param language string
   */
  changeLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('portfolio', language);
  }

  /**
   * Set language, depending on topLevelDomain or localStorage
   */
  setLanguage() {
    this.defaultLanguage = localStorage.getItem('portfolio');    
    
    if (!this.defaultLanguage) {
      const currentUrl = window.location.href;
      const topLevelDomain = currentUrl.split('.');    
      const resultTopLevelDomain = topLevelDomain[1] == 'com/' ? "en" : "de";
      this.defaultLanguage = resultTopLevelDomain;
      localStorage.setItem('portfolio', this.defaultLanguage);
      } else if (this.defaultLanguage == 'en') {
      this.changeLanguage('en');
    } else {
      this.changeLanguage('de');
    }
  }
}
