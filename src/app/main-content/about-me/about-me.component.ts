import { Component } from '@angular/core';
import { TranslationService } from '../../shared/services/translation.service';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslationService],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {  

  constructor(private translateService: TranslationService) {
    this.calculateYears();
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
