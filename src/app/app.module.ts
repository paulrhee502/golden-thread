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
import { ChartsModule } from 'ng2-charts';
import { PaymentPage } from '../pages/payment/payment';
import { MyCharitiesProvider } from '../providers/my-charities/my-charities';
import { MyCharitiesPage } from '../pages/my-charities/my-charities';
import { DonatePage } from '../pages/donate/donate';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    Confirmation,
    Profile,
    Registration,
    CharityListPage,
    DetailsPage,
    PaymentPage,
    MyCharitiesPage,
    DonatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
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
    DetailsPage,
    PaymentPage,
    MyCharitiesPage, 
    DonatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyCharitiesProvider
  ]
})
export class AppModule {}
