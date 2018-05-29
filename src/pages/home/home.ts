import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Registration} from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin(){
    this.navCtrl.push(LoginPage);
  }
  navigateToRegister(){
    this.navCtrl.push(Registration);
  }
}

