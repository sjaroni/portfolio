import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ 
    CommonModule,
    TranslationService 
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})

export class AboutMeComponent implements OnInit{

  currentLanguage: string | undefined;
  constructor(private translationService: TranslationService) {
    this.calculateYears();
   }
   
  ngOnInit(): void {
    this.translationService.selectedLanguage$.subscribe(language => {
      this.currentLanguage = language;      
    });
  }


  startYear = 2003;
  howManyYearsInIt: number = 0;

  calculateYears() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    this.howManyYearsInIt =
      currentMonth < 7
        ? (this.howManyYearsInIt = currentYear - this.startYear - 1)
        : (this.howManyYearsInIt = currentYear - this.startYear);
  }
}
