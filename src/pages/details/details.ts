import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public charity;
  public charityImagePath;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
    this.charityImagePath = this.charity + ".jpg";
  }

}
