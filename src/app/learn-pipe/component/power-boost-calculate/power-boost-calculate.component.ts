import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-boost-calculate',
  templateUrl: './power-boost-calculate.component.html',
  styleUrls: ['./power-boost-calculate.component.css']
})
export class PowerBoostCalculateComponent implements OnInit {
  power: 5;
  factor: 1;

  constructor() { }

  ngOnInit(): void {
  }

}
