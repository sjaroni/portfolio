import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { SharedDataService } from '../shared/services/shareddata.service';
import { DistanceAreaComponent } from '../shared/components/distance-area/distance-area.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    ReferencesComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    DistanceAreaComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent implements OnInit {
  titles: string[] = ['Stefan Jaroni - Portfolio', 'Frontend Developer', 'Angular, TS, JS, SCSS']; // Array von Titeln
  currentTitleIndex = 0;
  sharedData = inject(SharedDataService);  
  defaultThreshold = .4;  
  thresholdsByResolution: any = {
    '(max-width: 1920px)': .4,    
    '(min-width: 1921px) and (max-width: 2560px)': .8,
    '(min-width: 2561px) and (max-width: 2880px)': .5,
    '(min-width: 2881px) and (max-width: 3440px)': .6,
    '(min-width: 3441px)': .9
  };
  
  constructor(private elementRef: ElementRef, private titleService: Title) {}

  ngOnInit(): void {
    
    this.setTitle();    
    setInterval(() => {
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      this.setTitle();
    }, 10000);

    const elementsToObserve = [
      '#atf',
      '#aboutMe',
      '#skills',
      '#portfolio',
      '#contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > this.getThreshold()) {            
              this.sharedData.clickedLink(entry.target.id);              
            }
          }
        });
      },
      {        
        threshold: this.getThreshold(),
      }
    );

    elementsToObserve.forEach((selector) => {
      const target = this.elementRef.nativeElement.querySelector(selector);
      if (target) {
        observer.observe(target);
      }
    });
  }

  /**
   * Function to set threshold based on resolution
   * @returns string - threshold by resolution
   */
  getThreshold() {
    for (let resolution in this.thresholdsByResolution) {
      if (window.matchMedia(resolution).matches) {
          return this.thresholdsByResolution[resolution];
      }
    }
    return this.defaultThreshold;
  }

  /**
   * Function to set page-title from array
   */
  setTitle() {
    this.titleService.setTitle(this.titles[this.currentTitleIndex]);
  }

}
