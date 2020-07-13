import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { ModalController } from '@ionic/angular';
import { LoginPageModule } from '../login/login.module';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  uid: string;

  constructor(
    private device: Device,
    private modalCtrl: ModalController
  ) {
    this.uid = this.device.uuid;
    setTimeout(() => {
      this.lockApp();
    }, 2000)
  }

  async lockApp() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      backdropDismiss: false,
      cssClass: 'login-modal',
      componentProps: {
        isModal: true
      }
    });
    modal.present();
  }
}
