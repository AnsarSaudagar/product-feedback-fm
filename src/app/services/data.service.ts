import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import { Product } from '../models/product.model';
import { Suggestion } from '../models/suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  category: string[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  getData() {
    return this.http.get<Product[]>('http://localhost:3000/productRequests');
  }

  getRoadmapCount() {
    return this.getData().pipe(
      map((data: any) => {
        const countObj: any = {
          'planned': 0,
          'in-progress': 0,
          'live': 0
        };

        data.forEach((element:any) => {
          if(element.status === 'planned') countObj['planned']++;
          if(element.status === 'in-progress') countObj['in-progress']++;
          if(element.status === 'live') countObj['live']++;
        });

        return countObj;
      })
    )
  }

}
