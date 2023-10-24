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

}
