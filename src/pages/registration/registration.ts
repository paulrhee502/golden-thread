import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Confirmation } from '../confirmation/confirmation';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class Registration {
  public email;
  public password1;
  public password2;
  public name;
  public username;
  constructor(public navCtrl: NavController) {
    }
    register(){
        if(this.email.length == 0 || this.email.indexOf("@") == -1){
          alert("Invalid email");
          return;
        }
        if(this.password1 !== this.password2){
          alert("Passwords do not match");
          return;
        }
        this.navCtrl.push(Confirmation, {
          name:this.name,
          email:this.email,
          username:this.username
        });
    }
}   

