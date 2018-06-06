import { Component } from '@angular/core';
import {NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Charity } from '../../models/charity';
import { PaymentPage } from '../payment/payment';
import { MyCharitiesPage } from '../my-charities/my-charities';
import { DonatePage } from '../donate/donate';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';

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
  public total;
  public num;
  public donate;
  public plan;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, public myCharities: MyCharitiesProvider) {
    this.charity = this.navParams.get("charity");
    if(this.indexOf(this.charity) > -1){
      this.total = this.navParams.get("total");
      this.num = this.navParams.get("num");
      this.donate = this.navParams.get("donate");
      this.plan = this.navParams.get("plan");
    }
  }
  donateNow(){
    let modal = this.modalCtrl.create(DonatePage, {charity:this.charity,plan:"N/A"});
    modal.present();
  }
  setPayment(){
    let modal = this.modalCtrl.create(PaymentPage, {charity:this.charity});
    modal.present();
  }
  indexOf(charity){
    if(this.myCharities.charityArr.length == 0){
      return -2;
    }
    if(charity.added == 0){
      return -1;
    }
    for(let i = 0; i < this.myCharities.charityArr.length;i++){
      if(this.myCharities.charityArr[i].name == this.charity.name){
        return i;
      }
    }
  }
  isPlan(){
    let index = this.indexOf(this.charity);
    if(index < 0){
      return false;
    }
    return this.myCharities.planArr[index] != "N/A";
  }
}