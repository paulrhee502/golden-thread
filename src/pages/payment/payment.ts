import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.navParams.get("charity");
    this.charity = "charity";
  }

  donateRenewing(time:string){
    let prompt = this.alertCtrl.create({
      title: 'Donation Subscription',
      message: "Please specify how much money you would like to donate every " + time,
      inputs: [
        {
          type: 'number',
          placeholder: '$0.00'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
