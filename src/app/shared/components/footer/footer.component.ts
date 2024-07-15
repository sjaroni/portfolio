import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReferencesComponent } from '../../../main-content/references/references.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReferencesComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  isHoveredImprint: boolean = false;
  isHoveredPrivacy: boolean = false;

  public maxWidth = 992;
  public hasReloadedForMaxWidth = false;
  public hasReloadedForMinWidth = false;
  public showImprint = false;

  ngOnInit() {
    this.checkWidthAndReload();
    window.addEventListener('resize', this.checkWidthAndReload.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkWidthAndReload.bind(this));
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
      this.showImprint = true;
      this.hasReloadedForMaxWidth = true;
      this.hasReloadedForMinWidth = false;
    } else if (!isMaxWidth && !this.hasReloadedForMinWidth) {
      this.showImprint = false;
      this.hasReloadedForMinWidth = true;
      this.hasReloadedForMaxWidth = false;
    }
  }
}
