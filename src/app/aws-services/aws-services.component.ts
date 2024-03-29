import { Component, OnInit } from '@angular/core';
import { Category, Professional, Skill } from '../skill';
import { SkillService } from '../skill.service';
import { Constants } from '../contants';

// declare function markLegend(): any;  /To call a Javascript defined function
declare function hideMouseLegend(v1: any, v2: any): any;
declare function showMouseLegend(v1: any, v2: any): any;

@Component({
  selector: 'app-aws-services',
  templateUrl: './aws-services.component.html',
  styleUrls: ['./aws-services.component.css']
})
export class AwsServicesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.loadSkills(Constants.PROFESSIONAL_NAME);
  }

  loadSkills(professionalName: string): void {
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
