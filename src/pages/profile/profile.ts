import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { CharityListPage } from '../charity-list/charity-list';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';
import { MyCharitiesPage } from '../my-charities/my-charities';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
  @ViewChild(Navbar) navBar: Navbar;
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
    this.setBackButtonAction();
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
  setBackButtonAction(){
    this.navBar.backButtonClick = () => {
      var txt;
      if(confirm("Log out?")){
        txt = "Logging out..."
        this.navCtrl.popToRoot();
      }
    }
  }
}