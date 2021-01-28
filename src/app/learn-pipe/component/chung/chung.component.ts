import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chung',
  templateUrl: './chung.component.html',
  styleUrls: ['./chung.component.css']
})
export class ChungComponent implements OnInit {
  x = 1;

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.x++;
    console.log(this.x);
  }

}
