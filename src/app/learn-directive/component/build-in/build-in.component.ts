import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-build-in',
  templateUrl: './build-in.component.html',
  styleUrls: ['./build-in.component.css']
})
export class BuildInComponent implements OnInit {
  currentItem =  {
    name: 'binhdv',
  };

  constructor() { }

  ngOnInit(): void {
  }

  setUppercaseName(event: any){
    this.currentItem.name = event;
    this.currentItem.name = this.currentItem.name.toUpperCase();
  }

}
