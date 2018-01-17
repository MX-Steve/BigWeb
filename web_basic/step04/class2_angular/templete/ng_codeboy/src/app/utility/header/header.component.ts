import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../service/http.service"
import { Router } from "@angular/router"

@Component({
    selector: 'storeHeader',
    templateUrl:"./header.component.html"
})

export class HeaderComponent implements OnInit {
    isUserLogin:boolean = false;
    userName:string = '';
    constructor(
        private http:MyHttpService,
        private router:Router
    
    ) { }

    ngOnInit() { 
        //检查用户是否登录
        this.http.sendRequest("http://176.3.15.6:8080/step04/admin/data/user/session_data.php")
            .subscribe((result:any)=>{
                if(result.uname){
                    this.isUserLogin = true;
                    this.userName = result.uname;
                }else{
                    this.isUserLogin = false;
                    this.userName = '';
                }
            });
    }
    //去列表页
    goToList(){
        this.router.navigateByUrl("/list");
    }
    //退出登录
    logout(){
        this.http.sendRequest("http://176.3.15.6:8080/step04/admin/data/user/logout.php")
            .subscribe((result:any)=>{
                if(result.code == 200){
                    this.isUserLogin = false;
                    this.userName = '';
                }
            });
    }
}