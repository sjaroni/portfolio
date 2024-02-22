import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  @Input() showLineLeft: boolean = false;
  @Input() showLineRight: boolean = true;
  @Input() bgColor: string = 'unset';

  ngOnInit(): void {
    if (window.matchMedia("(max-width: 992px)").matches) {
      this.showLineRight = true;
      this.bgColor = '#141d2f';
    }
  }

}
