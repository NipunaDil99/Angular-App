import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { EditComponent } from './pages/items/edit/edit.component';
import { ItemsComponent } from './pages/items/items.component'; 

const routes: Routes = [
  {
    path:"",
    component: ItemsComponent
  },
  {
    path: "item/add/:id",
    component: EditComponent
  },
  {
    path: "item/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
