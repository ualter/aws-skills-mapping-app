import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Category, Professional, Skill } from './skill';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  api_gateway_restapi_url: string = environment.apiURL
  resource_skill: string = "skills"

  constructor(private http: HttpClient) { }

  getProfessionData(professionalName: string): Observable<Professional> {
    console.log(`API URL:${this.api_gateway_restapi_url}${this.resource_skill}`)

    return this.http.get<Professional>(`${this.api_gateway_restapi_url}${this.resource_skill}`)
             .pipe(
              tap(v => console.log('Professional: ' + v.name)),
              filter(v => v.name === professionalName))
  }
  
  getProfessionalCategorySkills(professionalName: string): Observable<Category[]> {
    console.log(`API URL:${this.api_gateway_restapi_url}${this.resource_skill}`)
    
    return this.http.get<Professional>(`${this.api_gateway_restapi_url}${this.resource_skill}`)
             .pipe(
              filter(v => v.name === professionalName),
              tap(v => console.log('Filtering category skills for: ' + v.name)),
              map(v => {
                  let category = v.categories

                  category.sort((n1, n2) => {
                    if (n1.sort > n2.sort) {
                      return 1;
                    }
                    if (n1.sort < n2.sort) {
                      return -1;
                    }
                    return 0;
                  })

                  return category 
               }))
  }

}
