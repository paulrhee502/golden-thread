import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../profile/profile';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public username:string;
  public password:string;
  constructor(public navCtrl: NavController) {
    this.username = "";
    this.password =  "";
  }

  navigateToProfile(){
      this.navCtrl.push(Profile, {username:this.username,password:this.password});
  }
}

