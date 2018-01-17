import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'orderConfirmStepOne',
    templateUrl: './order-comfirm-step-one.component.html',
    styleUrls:["assets/css/order_confirm.css"]
})

export class OrderConfirmStepOneComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }
    jump(){
        this.router.navigateByUrl("/OrderComfirm/steptwo");
    }
}