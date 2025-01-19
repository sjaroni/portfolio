import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import Aos from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    MainContentComponent,
    FooterComponent,
    ImprintComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  isLandscapeOrientation: boolean = false;  

  ngOnInit(): void {    
    window.addEventListener('resize', this.onResize.bind(this));
    this.onResize();    
    console.log('%cMade with ❤️ in Bremen', 'color: #00BEE8; font-size: 16px; font-weight: bold;');
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  /**
   * Check Orientation
   * @returns boolean
   */
  checkMobileOrientation(){
    if (
      window.matchMedia('(orientation: landscape)').matches &&
      window.matchMedia('(min-width: 320px)').matches &&
      window.matchMedia('(max-width: 900px)').matches &&
      window.innerWidth > window.innerHeight
    ) {      
      return true;
    } else {      
      return false;
    }
  }

  onResize(event?: UIEvent): void {
    this.isLandscapeOrientation = this.checkMobileOrientation();
    Aos.init();    
  }
}