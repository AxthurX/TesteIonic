import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BotoesPageRoutingModule } from './botoes-routing.module';
import { BotoesPage } from './botoes.page';
import { ActionSheetPageModule } from '../action-sheet/action-sheet.module';
import { SharedModule } from '../../../../core/shared.module';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    BotoesPageRoutingModule,
    ActionSheetPageModule,
    SharedModule,
  ],
  declarations: [BotoesPage],
})
export class BotoesPageModule {}
