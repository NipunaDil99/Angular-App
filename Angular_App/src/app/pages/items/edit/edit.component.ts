import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/models/itmes.models';
import { ItemsService } from 'src/app/service/items.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number | undefined;
  header: string | undefined;
  item: Items = {
    id: 0,
    name:'',
    No_of_Items:0,
    modified_Date:''
  };

  constructor(private router: Router,private route: ActivatedRoute, private itemService:ItemsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.header = this.id === 0? 'Add Employee': 'Edit Employee';

    if(this.id != 0) {
      this.item = this.itemService.onGetItem(this.id) as Items;
    }
  }

  onSubmit(form: NgForm){
    let item: Items = {
      id: form.value.id,
      name: form.value.name,
      No_of_Items: form.value.Number_of_Items,
      modified_Date: form.value.Modified_Date,
    }

    if(this.id === 0){
      this.itemService.onAdd(item);
    }
    else
    {
      this.itemService.onUpdate(item);
    }
    

    this.router.navigateByUrl('');

  }

}
