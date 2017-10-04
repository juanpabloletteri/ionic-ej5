import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the AplicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aplicacion',
  templateUrl: 'aplicacion.html',
})

export class AplicacionPage {

  tema: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 1500
    });
    loader.present();

  }
  asignarTema(num) {
    switch (num) {
      case 0: this.tema = 0;
        break;
      case 1: this.tema = 1;
        break;
      case 2: this.tema = 2;
        break;
      case 3: this.tema = 3;
        break;
    }
    //console.log(this.tema);
  }
  salir() {
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad AplicacionPage');
  }

}
