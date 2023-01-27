import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FotosComponent } from '../modais/fotos/fotos.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  constructor(private navCtrl: NavController, private modal: ModalController) {}

  ngOnInit() {}

  async showTelaDeFotos() {
    const modal = await this.modal.create({
      component: FotosComponent,
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
      }
    });

    return await modal.present();
  }
}
