import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../utility/service/http.service"
import { Router } from "@angular/router"

@Component({
    selector: 'storeLogin',
    templateUrl:'./login.component.html',
    styleUrls:["assets/css/login.css"]
})

export class LoginComponent implements OnInit {
    uname:string = 'dingding';
    upwd:string = '123456';
    constructor(
        private http:MyHttpService,
        private router:Router
    ) { }

    ngOnInit() { }
    //登录
    userLogin(){
        this.http.sendRequest("http://176.3.15.6:8080/step04/admin/data/user/login.php?uname="+this.uname+"&upwd="+this.upwd)
            .subscribe((result:any)=>{
                if(result.code == 200){
                    this.router.navigateByUrl("/index");
                }else{
                    alert("用户名或者密码错误");
                }
            });
    }
}