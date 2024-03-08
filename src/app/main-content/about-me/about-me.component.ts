import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent{
  
  constructor() {
    this.calculateYears();
  }

  startYear = 2003;
  howManyYearsInIt: number = 0;

  /**
   * Calculate years since august 2003
   */
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
