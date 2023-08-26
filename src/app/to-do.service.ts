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
  rewards=[{name: "5 minute break"},
{name: "Snack time"}];
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
  getRewards(){
    return this.rewards;
  }
  addRewards(reward: any){
    this.rewards.push(reward);
  }
  editRewards(reward: any, index: number){
    this.rewards[index]= reward; 
  }
  removeRewards(index: number){
    this.rewards.splice(index,1);
  }
}

