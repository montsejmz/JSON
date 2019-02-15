import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {

  favoritos =[];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavoritosProvider Provider');

  }

  remove(casa){
    let index =this.favoritos.findIndex(item =>{
      return item.ad.subject ==casa.ad.subject && 
      item.ad.user.account.name == casa.ad.user.account.name;
    });

    if(index > -1){
      this.favoritos.splice(index,1)  //eliminar en ese lugar 1 solo elemento
      const toast = this.toastCtrl.create({
        message: 'Casa eliminada de favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

  }

  existe(casa){
    return this.favoritos.some(item => {
      return item.ad.subject ==casa.ad.subject && 
      item.ad.user.account.name == casa.ad.user.account.name;
    })
  }

  addFavoritos(casa){
    this.favoritos.push(casa);
    const toast = this.toastCtrl.create({
      message: 'Casa agregada a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos(){
    return this.favoritos;
  }

}
