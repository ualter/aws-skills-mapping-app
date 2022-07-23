import { Component } from '@angular/core';
import { Constants } from './contants';
import { Professional } from './skill';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aws-skills-mapping';
  professional?: Professional;

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService
        .getProfessionData(Constants.PROFESSIONAL_NAME)
        .subscribe(p => this.professional = p)
  }
  
}
