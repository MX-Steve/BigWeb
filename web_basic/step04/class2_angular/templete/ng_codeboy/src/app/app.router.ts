import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HeaderComponent} from './utility/header/header.component'
import{FooterComponent} from './utility/footer/footer.component'
import{IndexComponent} from './index/index.component'
import{LoginComponent} from './login/login.component'
import{RegisterComponent} from './register/register.component'
import{ListComponent} from './list/list.component'
import{DetailComponent} from './detail/detail.component'
import{CartComponent} from './cart/cart.component'
import{OrderConfirmComponent} from './orderConfirm/order-confirm.component'
import{UserCenterComponent} from './userCenter/user-center.component'
import{NotFoundComponent} from './utility/notFound/not-found.component'
import { OrderConfirmStepOneComponent } from "./orderConfirm/orderConfirmStepOne.component"
import { OrderConfirmStepTwoComponent } from "./orderConfirm/orderConfirmStepTwo.component"
import { OrderConfirmStepThreeComponent } from "./orderConfirm/orderConfirmStepThree.component"


const routes: Routes = [
  { path: '', component:IndexComponent  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'index',component:IndexComponent},
  {path:'list',component:ListComponent},
  {path:'detail',component:DetailComponent},
  {path:'cart',component:CartComponent},
  {
    path:'OrderComfirm',component:OrderConfirmComponent,
    children:[
      {path:"",component:OrderConfirmStepOneComponent},
      {path:"stepone",component:OrderConfirmStepOneComponent},
      {path:"steptwo",component:OrderConfirmStepTwoComponent},
      {path:"stepthree",component:OrderConfirmStepThreeComponent}
    ]
  },
  {path:'UserCenter',component:UserCenterComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
