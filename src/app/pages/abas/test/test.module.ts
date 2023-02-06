import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/shared.module';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestComponent,
      },
    ]),
  ],
})
export class TestModule {}
