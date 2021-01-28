import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {
  array = [
    { id: 1, name: 'bill' },
    { id: 2, name: 'bob' },
    { id: 3, name: 'billy' }
  ];


  createSameId() {
    this.array = [
      { id: 1, name: 'bill' },
      { id: 2, name: 'bob' },
      { id: 3, name: 'billy' },
    ];
  }

  createChangeId(){
    this.array = [
      { id: 1, name: 'hello world' },
      { id: 2, name: 'bob' },
      { id: 3, name: 'billy' },
      { id: 4, name: 'time'}
    ];
  }

  change(){
    this.array.push({id: 4, name: 'binhdv'});
  }

  identify(index, item) {
    return item.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

  // // tslint:disable-next-line:typedef
  // addExist(){
  //   this.items.push(new Item(1, 'another book'));
  // }
  //
  // addNew(){
  //   this.items.push(new Item(10, 'my new item'));
  // }
  //
  // trackByItems(index: number, item: Item): number{
  //   return item.id;
  // }

}

export class Item{
  id: number;
  name: string;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
