import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule} from '@ionic/angular';

import { BotoesPageRoutingModule } from './botoes-routing.module';

import { BotoesPage } from './botoes.page';
import { ActionSheetPageModule } from '../action-sheet/action-sheet.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotoesPageRoutingModule,
    ActionSheetPageModule
  ],
  declarations: [BotoesPage]
})
export class BotoesPageModule {}
