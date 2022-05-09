import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomProductsService {

  constructor(private http:HttpClient) { }

  getData():Observable<any> {
    const url = "https://random-data-api.com/api/coffee/random_coffee?size=50";
    return this.http.get<any>(url)
  }
}
