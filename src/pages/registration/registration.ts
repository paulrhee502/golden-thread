import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Confirmation } from '../confirmation/confirmation';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class Registration {
  public email:string;
  public password:string;
  public passconfirm:string;
  constructor(public navCtrl: NavController) {
    
    }
    register(){
        this.navCtrl.push(Confirmation);
        if(this.email.indexOf("@") == -1){
          alert("Invalid email");
        }
        if(this.password !== this.passconfirm){
          alert("Passwords do not match");
        }
    }
}   

