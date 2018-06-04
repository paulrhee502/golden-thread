import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharityListPage } from '../charity-list/charity-list';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';
import { MyCharitiesPage } from '../my-charities/my-charities';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
    public name;
    public username:string;
    public email;
    public sum;
  constructor(public navCtrl: NavController, public navParams:NavParams, public myCharities:MyCharitiesProvider) {
  }
  
  ionViewDidLoad(){
    this.username = this.navParams.get("username");
    this.name = this.navParams.get("name");
    this.email = this.navParams.get("email");
    this.sum = this.totalDonation();
  }
  totalDonation(){
    let s = 0;
    this.myCharities.totalArr.forEach((num) => {
      s += num;
    })
    return s;
  }
  navToCharityList(){
    this.navCtrl.push(CharityListPage);
  }
  navToMyCharities(){
    this.navCtrl.push(MyCharitiesPage);
  }
}