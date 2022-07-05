import { Component, OnInit } from '@angular/core';
import { Category, Professional, Skill } from '../skill';
import { SkillService } from '../skill.service';

// declare function markLegend(): any;  /To call a Javascript defined function
declare function hideMouseLegend(v1: any, v2: any): any;
declare function showMouseLegend(v1: any, v2: any): any;

@Component({
  selector: 'app-aws-services',
  templateUrl: './aws-services.component.html',
  styleUrls: ['./aws-services.component.css']
})
export class AwsServicesComponent implements OnInit {

  PROFESSIONAL_NAME: string = "Ualter Otoni Pereira";
  categories: Category[] = [];
  computeSkills: Skill[] = [];
  containersSkills: Skill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.loadSkills(this.PROFESSIONAL_NAME);
  }

  loadSkills(professionalName: string): void {
    this.skillService
        .getProfessionalSkills(professionalName,"Compute")
        .subscribe(s => this.computeSkills = s)
    
    this.skillService
        .getProfessionalSkills(professionalName,"Containers")
        .subscribe(s => this.containersSkills = s)
    
    this.skillService
        .getProfessionalCategorySkills(professionalName)
        .subscribe(c => this.categories = c)
  }

  _hideMouseLegend(element: HTMLElement, level: string): void {
    hideMouseLegend(element, level);
  }

  _showMouseLegend(element: HTMLElement, level: string): void {
    showMouseLegend(element, level);
  }

}
