import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { CasaPage } from '../casa/casa';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  items=[];
  casaPage=CasaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.items =this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }
  
  verCasa(casa){
    this.navCtrl.push(this.casaPage, {casa:casa});
  }

}
