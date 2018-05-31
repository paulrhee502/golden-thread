import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharityListPage } from '../charity-list/charity-list';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
    public username:string;
  constructor(public navCtrl: NavController, public navParams:NavParams) {
  }
  
  ionViewDidLoad(){
    this.username = this.navParams.get("username");
  }
  navToCharityList(){
    this.navCtrl.push(CharityListPage);
  }
}