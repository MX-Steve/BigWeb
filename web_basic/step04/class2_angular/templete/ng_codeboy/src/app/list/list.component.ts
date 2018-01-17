import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../utility/service/http.service"

@Component({
    selector: 'storeList',
    templateUrl:"./list.component.html",
    styleUrls:["assets/css/products.css","./list.css"]
})

export class ListComponent implements OnInit {
    pList:Array<any>=[];
    pageCount:number = 0;
    pageSize:number = 0;
    pno:number = 0;
    recordCount = 0;
    pageList:Array<any> = [];
    constructor(private http:MyHttpService) { }

    ngOnInit() { 
        this.loadData();
    }
    changePage(pageNo:number){
        //设置当前是第几页
        this.pno = pageNo;
        //请求该页面对应的数据
        this.loadData();
    }
    //上一页和下一页,切换不同的页面
    modifyPage(isAdd:boolean){
        if(isAdd){
            //下一页
            if(this.pno<this.pageCount){this.pno++;}
            
        }else{
            //下一页
            if(this.pno>1){this.pno--;}
            
        }
        this.loadData();
    }

    //加载数据
    loadData(){
        this.http.sendRequest("http://176.3.15.6:8080/step04/admin/data/product/list.php?pno="+this.pno)
            .subscribe((result:any)=>{
                console.log(result);
                this.pList = result.data;
                this.pno = result.pno;
                this.pageCount = result.pageCount;
                this.pageList = [];
                for(var i=0;i<this.pageCount;i++){
                    this.pageList.push(i+1);
                }
            });
    }
}