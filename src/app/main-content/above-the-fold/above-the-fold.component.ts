import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedDataService } from '../../shared/services/shareddata.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  public maxWidth = 992;
  public hasReloadedForMaxWidth = false;
  public hasReloadedForMinWidth = false;

  imagePath: string | undefined;

  constructor(public sharedData: SharedDataService) {}

  ngOnInit(): void {
    this.checkWidthAndReload();
    window.addEventListener('resize', this.checkWidthAndReload.bind(this));
  }

  /**
   * Checks whether the current width is less than or equal to 992px
   * Set necessary values
   */
  checkWidthAndReload() {
    const isMaxWidth = window.matchMedia(
      `(max-width: ${this.maxWidth}px)`
    ).matches;

    if (isMaxWidth && !this.hasReloadedForMaxWidth) {
      this.imagePath = 'mobile';
      this.hasReloadedForMaxWidth = true;
      this.hasReloadedForMinWidth = false;
    } else if (!isMaxWidth && !this.hasReloadedForMinWidth) {
      this.imagePath = 'desktop';
      this.hasReloadedForMinWidth = true;
      this.hasReloadedForMaxWidth = false;
    }
  }
}
