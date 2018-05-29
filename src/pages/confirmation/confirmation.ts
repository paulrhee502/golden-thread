import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../profile/profile';


@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class Confirmation {

  constructor(public navCtrl: NavController) {

  }

  navigateToProfile(){
      this.navCtrl.push(Profile);
  }
}

