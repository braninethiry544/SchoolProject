import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schoolproject',
  templateUrl: './schoolproject.component.html',
  styleUrls: ['./schoolproject.component.css']
})
export class SchoolProjectComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('https://api.example.com', {
      name: 'John Doe',
      age: 30
    }).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/success']);
    }, (error: any) => {
      console.log(error);
      this.router.navigate(['/failure']);
    });
  }
}