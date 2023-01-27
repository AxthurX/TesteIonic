import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../core/shared.module';
import { DeepLinkComponent } from './deep-link.component';



@NgModule({
  declarations: [DeepLinkComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
  ],
})
export class DeepLinkModule {}
