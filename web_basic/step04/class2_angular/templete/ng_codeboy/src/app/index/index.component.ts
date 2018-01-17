import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "../utility/service/http.service"

@Component({
    selector: 'storeIndex',
    templateUrl:"./index.component.html",
    styleUrls:["assets/css/animate.css","assets/css/item_cat.css","assets/css/slide.css"]
})

export class IndexComponent implements OnInit {
    //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //图片
    //Photos
    private slides: Array<any> = [];

    carouselItems:Array<any>=[];
    newArrivalItems:Array<any>=[];
    recommendedItems:any=[];
    topSaleItems:Array<any>=[];
    title:'';
    constructor(private http:MyHttpService) { }

    ngOnInit() { 
        this.http.sendRequest("http://176.3.15.6:8080/step04/admin/data/product/index.php")
            .subscribe((result:any)=>{
                console.log(result);
                this.carouselItems = result.carouselItems;
                this.newArrivalItems = result.newArrivalItems;
                this.recommendedItems = result.recommendedItems;
                this.topSaleItems = result.topSaleItems;
                for(var i=0;i<this.carouselItems.length;i++){
                    var item = this.carouselItems[i];
                    this.slides.push(
                        { image: item.img , text:item.title}
                    );
                }
            });
        
        
    }
}