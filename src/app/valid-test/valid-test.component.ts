import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-valid-test',
  templateUrl: './valid-test.component.html',
  styleUrls: ['./valid-test.component.css']
})
export class ValidTestComponent implements OnInit {
  //emp = { name: string, age: number, dob: Date };
  emp = [{ }];
  test: string;
  constructor() {
    this.emp = [
      { name: "hany", age: 30, dob: '1987/01/01' },
      { name: "ali", age: 40, dob: '1966/01/01' }
    ];
    this.test = "valuess";
  }

  ngOnInit() {
  }

  submitMe() {
    //this.emp.push([{ name: this.emp.name, age: this.emp.age, dob: this.emp.dob }]);
  }
}
