import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'orderConfirmStepThree',
    templateUrl: './orderConfirmStepThree.component.html'
})

export class OrderConfirmStepThreeComponent implements OnInit ,OnDestroy {
    count:number = 5;
    timer:any;
    constructor(private router:Router) { }

    ngOnInit() { 
        this.timer = setInterval(()=>{
            this.count--;
            if(this.count <=0){
                clearInterval(this.timer);
                this.timer = null;
                this.router.navigateByUrl("");
            }
        },1000);
    }
    ngOnDestroy(){
        if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}