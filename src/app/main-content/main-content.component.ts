import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ReferencesComponent } from './references/references.component';
import { SharedDataService } from '../shared/services/shared-data.service';
import { DistanceAreaComponent } from '../shared/components/distance-area/distance-area.component';

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
  sharedData = inject(SharedDataService);
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
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
            if (entry.intersectionRatio > .4) {
              this.sharedData.clickedLink(entry.target.id);
            }
          }
        });
      },
      {
        threshold: .2,
        rootMargin: '10% 0px 0px'
      }
    );

    elementsToObserve.forEach((selector) => {
      const target = this.elementRef.nativeElement.querySelector(selector);
      if (target) {
        observer.observe(target);
      }
    });
  }
}
