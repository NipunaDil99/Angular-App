import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/models/itmes.models';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[] | undefined;

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.onGet();
  }

  onDelete(id: number | undefined){
    this.itemsService.onDelete(id);
  }

}
