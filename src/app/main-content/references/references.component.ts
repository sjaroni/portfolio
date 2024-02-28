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

  ngOnInit(): void {
    if (window.matchMedia("(max-width: 992px)").matches) {
      this.showLineRight = true;
      this.bgColor = '#141d2f';
    }  
  }
}