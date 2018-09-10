import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valid3',
  templateUrl: './valid3.component.html',
  styleUrls: ['./valid3.component.css']
})
export class Valid3Component implements OnInit {

  hero = [{}];
  constructor() {
    this.hero = [{ name: 'hany', age: 16 }];
  }

  ngOnInit() {

  }

  mySubmit({ valid, value }) {
    if (valid == true) {
      this.hero.push(value.name, value.age);
      alert('true');
      alert(value.name);
      alert(value.age);
    }
    else {
      alert('error');
    }
  }

}
