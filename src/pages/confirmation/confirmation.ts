import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';


@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class Confirmation {
public username;
public name;
public email;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get("username");
    this.name = this.navParams.get("name");
    this.email = this.navParams.get("email");
  }

  navigateToProfile(){
      this.navCtrl.push(Profile,{
        username:this.username,
        name:this.name,
        email:this.email
      });
  }
}

