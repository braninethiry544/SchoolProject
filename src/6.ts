import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {
  // Function to get form data on submit
  onSubmit() {
    console.log(this.myForm.value);
  }
}