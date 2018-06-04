import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { DonatePage } from '../donate/donate';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  public charity;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.charity = this.navParams.get("charity");
  }

  donatePlan(plan:string){
    let modal = this.modalCtrl.create(DonatePage, {charity:this.charity,plan:plan});
    modal.present();
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
}
