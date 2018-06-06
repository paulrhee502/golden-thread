import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Registration} from '../registration/registration';
import { LottieAnimationViewModule } from 'ng-lottie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lottieConfig:any;
  constructor(public navCtrl: NavController) {
    LottieAnimationViewModule.forRoot();
  
    this.lottieConfig = {
      path: '../../assets/heart_box.json',
      autoplay:true,
      loopt: true
    }
  }

  navigateToLogin(){
    this.navCtrl.push(LoginPage);
  }
  navigateToRegister(){
    this.navCtrl.push(Registration);
  }
}

