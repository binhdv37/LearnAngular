import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-ng-switch',
  templateUrl: './learn-ng-switch.component.html',
  styleUrls: ['./learn-ng-switch.component.css']
})
export class LearnNgSwitchComponent implements OnInit {
  currentComponent = 'a';
  componentList = [];

  constructor(
  ) {
    this.componentList = ['a', 'b', 'c'];
  }

  ngOnInit(): void {
    this.change();
    this.reChange();
  }

  change(){
    this.currentComponent = this.componentList[Math.floor(Math.random() * 3)];
  }

  reChange(){
    setInterval(this.change, 1000);
  }

}
