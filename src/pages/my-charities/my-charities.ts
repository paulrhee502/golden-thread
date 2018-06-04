import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';
import { DetailsPage } from '../details/details';

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
    public indexArray:number[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public myCharities:MyCharitiesProvider) {
    this.doughnutChartLabels = [];
    this.myCharities.charityArr.forEach((c) =>{
      this.doughnutChartLabels.push(c.name);
    });
    this.doughnutChartData = this.myCharities.totalArr;
    this.doughnutChartType = 'doughnut';
    for(let i = 0; i < this.doughnutChartLabels.length; i++){
      this.indexArray.push(Number(i));
    }
  }
  isNA(plan){
    return plan === "N/A";
  }
  navToDetails(charity){
    for(let i = 0; i < this.myCharities.charityArr.length; i++){
      if(this.myCharities.charityArr[i].name == charity.name){
        this.navCtrl.push(DetailsPage,{
          charity: charity,
          total: this.myCharities.totalArr[i],
          num: this.myCharities.numArr[i],
          plan: this.myCharities.planArr[i],
          donate: this.myCharities.donateArr[i]
        })
        return;
      }
    }
  }
}
