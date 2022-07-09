import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PROFESSIONALS } from './mock-skills';
import { Category, Professional, Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getProfessionData(professionalName: string): Observable<Professional> {
    for (let p of PROFESSIONALS) {
      if (p.name == professionalName) {
        return of(p);
      }
    }
    throw new Error("Professional with name " + professionalName + " not found");
  }
  
  getProfessionalSkills(professionalName: string, categoryTitle: string): Observable<Skill[]> {
    let skills: Skill[] = [];

    for (let p of PROFESSIONALS) {
      if (p.name == professionalName) {
        for (let c of p.categories) {
          if (c.title == categoryTitle) {
            skills = c.skills
            break;
          }
        }
      }
    }

    return of(skills);
  }

  getProfessionalCategorySkills(professionalName: string): Observable<Category[]> {
    let category: Category[] = [];

    for (let p of PROFESSIONALS) {
      if (p.name == professionalName) {
        category = p.categories
        break;
      }
    }

    category.sort((n1, n2) => {
      if (n1.sort > n2.sort) {
        return 1;
      }
      if (n1.sort < n2.sort) {
        return -1;
      }
      return 0;
    }) 

    return of(category);
  }

}
