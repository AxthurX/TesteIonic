import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { RouterModule } from '@angular/router';
import { FotosComponent } from './fotos.component';
import { SharedModule } from '../../../../core/shared.module';

@NgModule({
  declarations: [],
  providers: [Camera],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FotosComponent,
      },
    ]),
  ],
})
export class FotosModule {}
