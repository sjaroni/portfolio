import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ ],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})

export class AboveTheFoldComponent {
  imagePath: string | undefined;  

  ngOnInit(): void {
    if (window.matchMedia("(max-width: 992px)").matches) {
      this.imagePath = 'mobile';
    } else {
      this.imagePath = 'desktop';
    }
  }
}
