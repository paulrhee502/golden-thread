import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCharitiesPage } from './my-charities';

@NgModule({
  declarations: [
    MyCharitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCharitiesPage),
  ],
})
export class MyCharitiesPageModule {}
