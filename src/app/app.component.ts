import { Component } from '@angular/core';
import { Constants } from './contants';
import { Professional } from './skill';
import { SkillService } from './skill.service';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-skills-mapping';
  professional?: Professional;
  toolBarBackgroundColor = "#1976d2"

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService
        .getProfessionData(Constants.PROFESSIONAL_NAME)
        .subscribe(p => this.professional = p)
    
    if (environment.preprod) {
      this.toolBarBackgroundColor = "#051b32"
    } else if (environment.production) {
      this.toolBarBackgroundColor = "yellow"  // change later, if needed
    }
  }
  
}
