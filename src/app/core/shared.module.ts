import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavParams } from '@ionic/angular';
import { FotosComponent } from '../pages/abas/modais/fotos/fotos.component';
import { InicioComponent } from '../pages/abas/inicio/inicio.component';
import { BtnVoltarComponent } from '../components/btn-voltar.component';

@NgModule({
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  declarations: [InicioComponent, FotosComponent, BtnVoltarComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    FotosComponent,
    InicioComponent,
    BtnVoltarComponent,
  ],
  providers: [NavParams],
})
export class SharedModule {}
