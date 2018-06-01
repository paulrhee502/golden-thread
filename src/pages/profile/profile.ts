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
    public username:string;
  constructor(public navCtrl: NavController, public navParams:NavParams, public myCharities:MyCharitiesProvider) {
  }
  
  ionViewDidLoad(){
    this.username = this.navParams.get("username");

  }
  sum(){
    let s = 0;
    this.myCharities.donateArr.forEach((num) => {
      s += num;
    })
    return "Total Donations: $" + s;
  }
  navToCharityList(){
    this.navCtrl.push(CharityListPage);
  }
  navToMyCharities(){
    this.navCtrl.push(MyCharitiesPage);
  }
}