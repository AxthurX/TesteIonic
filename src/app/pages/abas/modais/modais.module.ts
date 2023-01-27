import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared.module';
import { RouterModule } from '@angular/router';
import { ModaisComponent } from './modais.component';

@NgModule({
  declarations: [ModaisComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModaisComponent,
      },
      {
        path: 'fotos',
        loadChildren: () =>
          import('./fotos/fotos.module').then((m) => m.FotosModule),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./maps/maps.module').then((m) => m.MapsModule),
      },
    ]),
  ],
})
export class ModaisModule {}
