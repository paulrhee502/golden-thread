import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Confirmation } from '../pages/confirmation/confirmation';
import { Profile } from '../pages/profile/profile';
import { Registration } from '../pages/registration/registration';
import { CharityListPage } from '../pages/charity-list/charity-list';
import { DetailsPage } from '../pages/details/details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    Confirmation,
    Profile,
    Registration,
    CharityListPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    Confirmation,
    Profile,
    Registration,
    CharityListPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
