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
    "The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.​ The American Red Cross, through its strong network of volunteers, donors and partners, is always there in times of need. We aspire to turn compassion into action so that\n......all people affected by disaster across the country and around the world receive care, shelter and hope\n...our communities are ready and prepared for disasters; ...everyone in our country has access to safe, lifesaving blood and blood products; \n...all members of our armed services and their families find support and comfort whenever needed; and \n...in an emergency, there are always trained individuals nearby, ready to use their Red Cross skills to save lives.",
    "https://pbs.twimg.com/profile_images/685904311512006656/l214_JLZ_400x400.png",
    ["#relief","#safetytraining", "#american", "#donateblood"],
    "+1(202)-303-4498",
    false
    );
    this.charities.push(redCross);
    let saveTheChildren = new Charity("Save the Children",
    "Save the Children seeks to ensure that children’s needs and capacities are considered in how people mitigate risk, prepare for, react to and recover from disasters and adapt to long-term trends. We work to make this happen at all levels by building partnerships and collaborating with children, communities, civil society, local and national governments, and regional and international organisations. Governments as primary duty bearers have the main responsibility for the implementation of the post 2015 DRR framework, and we support them in it.\nSave the Children integrates risk reduction and resilience building into sector based programming “full spectrum”; meaning that it is considered in both development and humanitarian contexts. It is crucial that we reduce risk where we can. When this is not possible, it is crucial that we build resilience in high-risk areas before disaster strikes, so that the communities we work with are better able to manage the challenges during crises and recover quickly.",
    "https://pbs.twimg.com/profile_images/994176381549412352/pDSpjmOX_400x400.jpg",
    ["#children", "#child", "#poverty"],
    "021-671-9424",
    false)
    this.charities.push(saveTheChildren);
    let unitedNationsFoundation = new Charity("United Nations Foundation",
    "When disaster strikes, the world turns to one organization for hope, help, leadership, and coordi­nation: the United Nations. When there is peace to keep between warring factions, the world asks the UN to mobilize peacekeepers, oversee elections, and create stability. In the face of challenges such as climate change, disease or poverty, the United Nations provides the platform for international cooperation. The United Nations is the one international organi­zation with the reach and vision capable of solving global problems. The United Nations Foundation links the UN work with others around the world, mobilizing the energy and expertise of business and non-governmental organizations to help the UN tackle issues including climate change, global health, peace and security, women's empowerment, poverty eradication, energy access, and U.S.-UN relations. The United Nations Foundation is honored to work with you and the United Nations to foster a more peaceful, prosperous and just world.",
    "https://pbs.twimg.com/profile_images/743522714791583744/m_39lcnC_400x400.jpg",
    ["#global", "#disaster", "#relief"],
    "202.887.9040",
    false)
    this.charities.push(unitedNationsFoundation);
    this.groupCharities(this.charities);
  }
  groupCharities(charities){//updating this when added?
    let currentLetter = '';
    let currentCharities = [];
    charities.forEach((value, index) => {
      if(value.added == false){
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
    }
    });
  }
  getCharities(ev){
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
