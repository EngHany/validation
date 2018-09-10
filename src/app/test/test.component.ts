import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: string;
  constructor() { }
  lst1: string[];
  lst2: string[];
  chk1: boolean;
  chk2: boolean;
  ngOnInit() {
    this.lst1 = ['hany', 'omr', 'yousef', 'eiad'];
    this.lst2 = ['a', 'b', 'c', 'c'];
  }

  mySubmit({ valid, value }) {

    // if(this.chk1==true)
    // {
    //   this.lst1.push(value.name);
    // }
    // else
    // {
    //   this.lst2.push(value.name);
    // }
  }
  clickable({ valid, value }) {
    if (valid==true) {
      if (this.chk1 == true) {
        this.lst1.push(value.name);
      }
      else {
        this.lst2.push(value.name);
      }
    }
  }
}
