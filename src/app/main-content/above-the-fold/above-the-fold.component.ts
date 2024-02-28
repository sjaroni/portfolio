import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedDataService } from '../../shared/services/shared-data.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  imagePath: string | undefined;

  constructor(public sharedData: SharedDataService) {}

  ngOnInit(): void {
    if (window.matchMedia('(max-width: 992px)').matches) {
      this.imagePath = 'mobile';
    } else {
      this.imagePath = 'desktop';
    }
  }
}
