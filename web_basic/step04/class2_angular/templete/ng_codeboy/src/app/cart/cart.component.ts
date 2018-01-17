import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../utility/service/http.service"
import { Router } from "@angular/router"

@Component({
    selector: 'storeCart',
    templateUrl:"./cart.component.html",
    styleUrls:["assets/css/cart.css"]
})

export class CartComponent implements OnInit {
    cartList:Array<any>=[];
    // count:number = 0;
    isAllSelected:boolean = false;

    //全选触发ngModelChange时触发
    selectAll(){
        //遍历cartList,给每个商品的isSelected改为当前结果
        for(var i=0;i<this.cartList.length;i++){
            this.cartList[i].isSelected = this.isAllSelected;
        }
    }

    //每个商品的单选
    selectOne(){
        let result:boolean = true;
        //1.逻辑与运算
        for(var i=0;i<this.cartList.length;i++){
            result = this.cartList[i].isSelected && result;
            console.log(this.cartList[i].isSelected);
        }
        console.log(result);
        //2.将与运算最终的结果赋值给 isAllSelected
        this.isAllSelected = result;
    }
    constructor(private http:MyHttpService,private router:Router) { }

    ngOnInit() { 
        this.http.sendRequest("http://127.0.0.1:8080/step04/admin/data/cart/list.php")
            .subscribe((result:any)=>{
                console.log(result);
                this.cartList = result.data;
                //遍历cartList,给每个商品添加isSelected
                for(var i=0;i<this.cartList.length;i++){
                    this.cartList[i].isSelected = false;
                }
            });
    }
    jumpToOrder(){
        this.router.navigateByUrl("/OrderComfirm");
    }
    //修改数量
    modifyProductCount(isAdd:boolean,index:number){
        console.log(index);
        if(isAdd){
            this.cartList[index].count++;
        }else{
            if(this.cartList[index].count==1){
                return;
            }
            this.cartList[index].count--;
        }
    }
}