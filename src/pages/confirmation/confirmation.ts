import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../profile/profile';
import { LottieAnimationViewModule } from 'ng-lottie';



@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class Confirmation {
public username;
public firstname;
public lastname;
public email;
public name;
public lottieConfig:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get("username");
    this.firstname = this.navParams.get("firstname");
    this.lastname = this.navParams.get("lastname");
    this.email = this.navParams.get("email");
    this.name = this.firstname + " " + this.lastname;
    LottieAnimationViewModule.forRoot();
  
    this.lottieConfig = {
      path: '../../assets/simple_tick_2.json',
      autoplay:true,
      loopt: false
    }
    let errorCallback = (e) => console.error(e);
  }

  navigateToProfile(){
      this.navCtrl.push(Profile,{
        username:this.username,
        name:this.name,
        email:this.email
      });
  }
}

