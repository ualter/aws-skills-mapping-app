import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Category, Professional, Skill } from './skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  api_gateway_restapi_url: string = "https://ovw3uboyyc.execute-api.eu-west-3.amazonaws.com/api/skills"

  constructor(private http: HttpClient) { }

  getProfessionData(professionalName: string): Observable<Professional> {
    return this.http.get<Professional>(this.api_gateway_restapi_url)
             .pipe(
              tap(v => console.log('Professional: ' + v.name)),
              filter(v => v.name === professionalName))
  }
  
  getProfessionalCategorySkills(professionalName: string): Observable<Category[]> {
    
    return this.http.get<Professional>(this.api_gateway_restapi_url)
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
