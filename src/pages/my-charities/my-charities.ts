import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';

/**
 * Generated class for the MyCharitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-charities',
  templateUrl: 'my-charities.html',
})
export class MyCharitiesPage {
    public doughnutChartLabels:string[];
    public doughnutChartData:number[];
    public doughnutChartType:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public myCharities:MyCharitiesProvider) {
    /*this.doughnutChartLabels = [];
    this.myCharities.charityArr.forEach((c) =>{
      this.doughnutChartLabels.push(c.name);
    });
    this.doughnutChartData = this.myCharities.donateArr;
    this.doughnutChartType = 'doughnut';*/
    this.doughnutChartLabels = ['Red Cross'];
    this.doughnutChartData = [20];
    this.doughnutChartType = 'doughnut';
  }

  
}
