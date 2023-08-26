import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  items=[{
    name: "Milk",
    quantity: 2
  },
  {
    name: "Bread",
    quantity: 1
  }];
  constructor() { 
    console.log('Hello ToDo Provider')
  }
  getItems(){
    return this.items;
  }
  removeItem(index: number){
    this.items.splice(index, 1);
  }
  addItem(item: any){
    this.items.push(item);
  }
  editItem(item: any, index: number){
    this.items[index] = item;
  }
}

