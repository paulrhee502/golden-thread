import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Charity } from '../../models/charity';

/*
  Generated class for the MyCharitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyCharitiesProvider {
  public charityArr:Charity[];
  public donateArr:number[];
  public planArr:string[];
  constructor() {
  }
  donateNew(charity:Charity, donation: number, plan: string){
    this.charityArr.push(charity);
    this.donateArr.push(donation);
    this.planArr.push(plan);
  }
  updateDonation(charity:Charity, donation: number, plan:string){
    let index = this.charityArr.indexOf(charity);
    if(plan !== "N/A"){
      this.donateArr[index] += donation;
      this.planArr[index] = plan;
    }
    else{
      this.planArr[index] = plan;
    }
  }
}
