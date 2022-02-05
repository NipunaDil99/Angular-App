import { Injectable } from '@angular/core';
import { Items } from '../models/itmes.models';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Items[] = [
    {
      id: 1,
      name: "HeadPhone",
      No_of_Items: 5,
      modified_Date: "1/15/2022"
    },
    {
      id: 2,
      name: "Mouse",
      No_of_Items: 4,
      modified_Date: "1/15/2022"
    }
  ];

  constructor() { }

  onGet(){
    return this.items;
  }

  onGetItem(id: number){
    return this.items.find(x=>x.id === id);
  }

  onAdd(item: Items){
    this.items.push(item);
  }

  onDelete(id: number | undefined){
    let item = this.items.find(x=>x.id === id);
    let index = this.items.indexOf(item as Items,0);
    this.items.splice(index,1);

  }

  onUpdate(item: Items){
    let oldItem = this.items.find(x=>x.id === item.id) as Items;
    oldItem.name  = item.name;
    oldItem.No_of_Items = item.No_of_Items;
    oldItem.modified_Date = item.modified_Date;

  }

}
