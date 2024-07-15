import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ CommonModule, TranslateModule ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit{

  @Input() showLineLeft: boolean = false;
  @Input() showLineRight: boolean = true;
  @Input() bgColor: string = 'unset';

  public maxWidth = 992;
  public hasReloadedForMaxWidth = false;
  public hasReloadedForMinWidth = false;

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
      this.showLineRight = true;
      this.bgColor = '#141d2f';
      this.hasReloadedForMaxWidth = true;
      this.hasReloadedForMinWidth = false;
    } else if (!isMaxWidth && !this.hasReloadedForMinWidth) {
      this.showLineRight = false;
      this.bgColor = 'unset';
      this.hasReloadedForMinWidth = true;
      this.hasReloadedForMaxWidth = false;
    }
  }
}