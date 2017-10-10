import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';

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
  numViejo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private nativeAudio: NativeAudio) {

    this.nativeAudio.preloadSimple('01', 'assets/audio/01.mp3');
    this.nativeAudio.preloadSimple('02', 'assets/audio/02.mp3');
    this.nativeAudio.preloadSimple('03', 'assets/audio/03.mp3');
    this.nativeAudio.preloadSimple('04', 'assets/audio/04.mp3');
    this.nativeAudio.preloadSimple('05', 'assets/audio/05.mp3');

    this.nativeAudio.preloadSimple('21', 'assets/audio/21.mp3');
    this.nativeAudio.preloadSimple('22', 'assets/audio/22.mp3');
    this.nativeAudio.preloadSimple('23', 'assets/audio/23.mp3');
    this.nativeAudio.preloadSimple('24', 'assets/audio/24.mp3');
    this.nativeAudio.preloadSimple('25', 'assets/audio/25.mp3');

    this.nativeAudio.preloadSimple('31', 'assets/audio/31.mp3');
    this.nativeAudio.preloadSimple('32', 'assets/audio/32.mp3');
    this.nativeAudio.preloadSimple('33', 'assets/audio/33.mp3');
    this.nativeAudio.preloadSimple('34', 'assets/audio/34.mp3');
    this.nativeAudio.preloadSimple('35', 'assets/audio/35.mp3');


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
  tocar(num: string) {

    this.nativeAudio.stop(this.numViejo);
    this.nativeAudio.play(num);
    this.numViejo = num;
  }
}
