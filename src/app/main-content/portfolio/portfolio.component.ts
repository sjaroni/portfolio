import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectdataService } from '../../shared/services/projectdata.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ ProjectComponent ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  
  projectdata = inject(ProjectdataService);

}
