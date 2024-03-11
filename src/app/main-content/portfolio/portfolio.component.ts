import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ProjectdataService } from '../../shared/services/projectdata.service';
import { TranslateModule } from '@ngx-translate/core';
import { DistanceAreaComponent } from '../../shared/components/distance-area/distance-area.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ 
    ProjectComponent,
    TranslateModule,
    DistanceAreaComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {  
  projectData = inject(ProjectdataService);
}
