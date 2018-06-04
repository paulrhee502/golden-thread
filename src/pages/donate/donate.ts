import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';

@IonicPage()
@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html',
})
export class DonatePage {
  public charity;
  public cardNumber:number;
  public expDate:any;
  public amount:number;
  public code:number;
  public plan:string;
  public donated:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl:AlertController,public myCharities: MyCharitiesProvider) {
  }

  ionViewDidLoad(){
    this.charity = this.navParams.get("charity");
    this.plan = this.navParams.get("plan");
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  donateNow(){
    this.myCharities.updateMyCharities(this.charity,this.amount,this.plan);
    console.log(this.myCharities);
    //Validate credit card information
    let alert = this.alertCtrl.create({
      title: 'Donation successful!',
      subTitle: 'Thank you for your contribution!',
      buttons: ['OK']
    });
    alert.present()
    this.viewCtrl.dismiss();
  }
}
