import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import{HttpModule}from '@angular/http';
import { AppComponent }  from './app.component';
import {AppRoutingModule} from'./app.router';
import { MyHttpService } from "./utility/service/http.service"

import {HeaderComponent} from './utility/header/header.component'
import {FooterComponent} from './utility/footer/footer.component'
import {IndexComponent} from './index/index.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ListComponent} from './list/list.component'
import {DetailComponent} from './detail/detail.component'
import {CartComponent} from './cart/cart.component'
import {OrderConfirmComponent} from './orderConfirm/order-confirm.component'
import {UserCenterComponent} from './userCenter/user-center.component'
import {NotFoundComponent} from './utility/notFound/not-found.component'
import {Carousel} from "./utility/carsousel/carousel.component"
import {Slide} from "./utility/carsousel/slide.component"
import { OrderConfirmStepOneComponent } from "./orderConfirm/orderConfirmStepOne.component"
import { OrderConfirmStepTwoComponent } from "./orderConfirm/orderConfirmStepTwo.component"
import { OrderConfirmStepThreeComponent } from "./orderConfirm/orderConfirmStepThree.component"

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  declarations: [ 
    OrderConfirmStepOneComponent , OrderConfirmStepTwoComponent , OrderConfirmStepThreeComponent ,
    Slide , Carousel,AppComponent,HeaderComponent,FooterComponent,IndexComponent,LoginComponent,RegisterComponent,
    ListComponent,DetailComponent,CartComponent,OrderConfirmComponent,UserCenterComponent,NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers:[MyHttpService]
})
export class AppModule { }
