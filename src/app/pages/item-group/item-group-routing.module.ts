import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemGroupPage } from './item-group.page';

const routes: Routes = [
  {
    path: '',
    component: ItemGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemGroupPageRoutingModule {}
