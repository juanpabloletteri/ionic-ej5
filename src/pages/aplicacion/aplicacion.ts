import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

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
    console.log(this.tema);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AplicacionPage');
  }

}
