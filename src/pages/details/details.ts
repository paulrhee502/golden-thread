import { Component } from '@angular/core';
import {NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';
import { MyCharitiesPage } from '../my-charities/my-charities';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public charity;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public myCharities: MyCharitiesProvider) {
    this.charity = this.navParams.get("charity");
  }
  donateNow(){
    let prompt = this.alertCtrl.create({
      title: 'Donate Now',
      message: "Please specify how much money you would like to donate now",
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
          text: 'Donate',
          handler: data => {
            //Payment method here
            this.myCharities.donateNew(this.charity.name, data, "N/A")
            let confirm = this.alertCtrl.create({
              title: 'Donation Successful',
              message: "Thank you for your contribution!",
              buttons: [
                {
                  text: 'Go to My Charities',
                  handler: data => {
                    this.navCtrl.push(MyCharitiesPage);
                  }
                }
              ]
            });
            confirm.present();
          }
        }
      ]
    });
    prompt.present();
  }
  setPayment(){
    this.navCtrl.push(PaymentPage, {
      charity:"charity"
    });
  }
}