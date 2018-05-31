import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DetailsPage } from '../details/details';
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
  public charities;
  public groupedCharities = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charities = [
      'Red Cross',
      'Cape Town Township Support',
      'Save the Children',
      'Doctors Without Borders',
      'United Nations Foundation',
      'Cape Town Water'
    ]
    this.groupCharities(this.charities);
  }
  groupCharities(charities){
    let sortedCharities = charities.sort();
    let currentLetter = '';
    let currentCharities = [];

    sortedCharities.forEach((value, index) => {
      if(value.charAt(0) != currentLetter){
        currentLetter = value.charAt(0);
        
        let newGroup = {
          letter: currentLetter,
          charities: []
        };
        
        currentCharities = newGroup.charities;
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
  navToDetails(charityName){
    this.navCtrl.push(DetailsPage,{
      charity:charityName
    });
  }
}
