import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Confirmation } from '../confirmation/confirmation';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class Registration {

  constructor(public navCtrl: NavController) {
    
    }
    register(){
        this.navCtrl.push(Confirmation);
    }
}   

