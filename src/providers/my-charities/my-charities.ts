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
  public charityArr: Charity[];
  public donateArr: number[];
  public totalArr: number[];
  public planArr: string[];
  public numArr: number[];
  constructor() {
    this.charityArr = [];
    this.donateArr = [];
    this.planArr = [];
    this.totalArr= [];
    this.numArr = [];
  }

  updateMyCharities(charity: Charity, donation: number, plan: string) {
    let found: boolean = false;
    for (let index = 0; index < this.charityArr.length; index++) {
      if (this.charityArr[index].name === charity.name) {
        this.charityArr[index].added = true;
        found = true;
        this.totalArr[index] += Number(donation);
        this.numArr[index] += Number(1);
        if (this.planArr[index] !== "N/A") {
          if (plan !== "N/A") {
            this.planArr[index] = plan;
            this.donateArr[index] = Number(donation);
          }
        }
        else{
          this.planArr[index] = plan;
          if(plan !== "N/A"){
            this.donateArr[index] = Number(donation);
          }
        }
        return;
      }
    }
    if (this.charityArr.length == 0 || found === false) {
      if(plan === "N/A"){
        this.donateArr.push(Number(0));
      }
      else{
        this.donateArr.push(Number(donation));
      }
      this.numArr.push(Number(1));
      charity.added = true;
      this.charityArr.push(charity);
      this.planArr.push(plan);
      this.totalArr.push(Number(donation));
    }
  }
}
