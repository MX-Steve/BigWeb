import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'orderConfirmStepTwo',
    templateUrl: './orderConfirmStepTwo.component.html',
    styleUrls:["assets/css/payment.css"]
})

export class OrderConfirmStepTwoComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { 

    }
    jump(){
        this.router.navigateByUrl("OrderComfirm/stepthree");
    }
}