import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetPage } from './action-sheet/action-sheet.page';
import { AlertPage } from './alert/alert.page';
import { AvatarPage } from './avatar/avatar.page';
import { BotoesPage } from './botoes/botoes.page';
import { CardPage } from './card/card.page';
import { CheckPage } from './check/check.page';
import { DateTimePage } from './date-time/date-time.page';
import { FabPage } from './fab/fab.page';
import { InputPage } from './input/input.page';
import { ModalPage } from './modal/modal.page';
import { Router } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { OutroMapaComponent } from './outro-mapa/outro-mapa.component';
import { DeepLinkComponent } from './deep-link/deep-link.component';

@Component({
  selector: 'app-modais',
  templateUrl: './modais.component.html',
  styleUrls: ['./modais.component.scss'],
})
export class ModaisComponent implements OnInit {

  constructor(
    private modal: ModalController,
    private rota: Router
  ) { }

  ngOnInit() {}

  async showTelaActionSheet() {
    const modal = await this.modal.create({
      component: ActionSheetPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaAlert() {
    const modal = await this.modal.create({
      component: AlertPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaAvatar() {
    const modal = await this.modal.create({
      component: AvatarPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaBotoes() {
    const modal = await this.modal.create({
      component: BotoesPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaCards() {
    const modal = await this.modal.create({
      component: CardPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaCheck() {
    const modal = await this.modal.create({
      component: CheckPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaDateTime() {
    const modal = await this.modal.create({
      component: DateTimePage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaFab() {
    const modal = await this.modal.create({
      component: FabPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaInput() {
    const modal = await this.modal.create({
      component: InputPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaModal() {
    const modal = await this.modal.create({
      component: ModalPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  async showTelaMaps() {
    const modal = await this.modal.create({
      component: MapsComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

   async showTelaOutroMapa() {
     const modal = await this.modal.create({
       component: OutroMapaComponent
     });

     modal.onDidDismiss().then((dataReturned) => {
       if (dataReturned !== null) {
       }
     });

     return await modal.present();
  }

  async showTelaDeepLink() {
    const modal = await this.modal.create({
      component: DeepLinkComponent
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }

  goTo(rota) {
    this.rota.navigateByUrl(rota);
  }
}
