import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolProjectService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.example.com/data');
  }
}