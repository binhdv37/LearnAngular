import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  exponent;
  power =  10;

  constructor() { }

  ngOnInit(): void {
  }

  increatePower(){
    if (this.exponent === undefined){
      this.exponent = 2;
    }
    else {
      this.exponent += 1;
    }
    console.log('power : ' + this.power);
  }
}
