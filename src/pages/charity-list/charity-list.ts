import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
import { Charity } from '../../models/charity';
import { MyCharitiesProvider } from '../../providers/my-charities/my-charities';
/**
 * Generated class for the CharityListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charity-list',
  templateUrl: 'charity-list.html',
})
export class CharityListPage {
  public charities = [];
  public groupedCharities = [];
  public charityNames = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public myCharities: MyCharitiesProvider) {
    let redCross = new Charity("Red Cross",
    "Red Cross Description",
    "http://www.thunder1320.com/wp-content/uploads/2014/09/red-cross-logo.jpg",
    ["#relief","#safetytraining", "#american", "#donateblood"],
    "+1(202)-303-4498"
    );
    this.charities.push(redCross);
    let saveTheChildren = new Charity("Save the Children",
    "Save the Children Description",
    "https://i0.wp.com/northpointproductions.co.uk/ruddington/wp-content/uploads/2018/01/Save-The-Children-Square-logo.jpg",
    ["#children", "#child", "#poverty"],
    "021-671-9424")
    this.charities.push(saveTheChildren);
    this.groupCharities(this.charities);
  }
  groupCharities(charities){
    let notMyCharities:Charity[];
    this.charities.forEach((element) => {
      if(this.myCharities.charityArr.indexOf(element.name) == -1){
        notMyCharities.push(element);
      }
    })
    let currentLetter = '';
    let currentCharities = [];
    notMyCharities.forEach((value, index) => {
      if(value.name.charAt(0) != currentLetter){
        currentLetter = value.name.charAt(0);
        
        let newGroup = {
          letter: currentLetter,
          chars: []
        };
        
        currentCharities = newGroup.chars;
        this.groupedCharities.push(newGroup);
      }
      currentCharities.push(value);
    });
  }
  getCharities(ev:any){
    let search = ev.target.value;
    if (search && search.trim() != '') {
      this.charities = this.charities.filter((ev) => {
        return (search.toLowerCase().indexOf(ev.toLowerCase()) > -1);
      })
    }
  }
  navToDetails(charity){
    this.navCtrl.push(DetailsPage,{
      charity:charity
    });
  }
}
