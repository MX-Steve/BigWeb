import React,{Component} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,ActivityIndicator} from 'react-native';

export default class ProjectProductList extends Component{
    constructor(){
        super();
        this.state = {
            list:[],
            nowPage:1,
            pageCount:1
        }
    }
    //向服务器端发起请求
    componentWillMount(){
        this.loadData();
    }
    loadData = ()=>{
        setTimeout(()=>{
            fetch('http://176.3.15.6:8080/step04/admin/data/product_list.php?pno='+this.state.nowPage)
            .then((response)=>response.json())
            .then((response)=>{
                console.log(response);
                //状态写操作
                this.setState({pageCount:response.pageCount});
                var myList = response.data;
                
                //2.将返回数据拼接一下
                var oldList = this.state.list;
                oldList = oldList.concat(myList);
                //解决一个警告：missing keys for items
                for(var i=0;i<oldList.length;i++){
                    oldList[i].key = i;
                }
                this.setState({list:oldList});
            });
        },1500);
    }
    //弹窗显示当前商品所销售的个数
    showSoldCount=(index)=>{
        alert(index);
    }
    showItem=(info)=>{
        return <TouchableOpacity 
                    onPress={()=>{
                        this.showSoldCount(info.index);
                    }}
                    style={{flexDirection:"row"}}>
                <Image 
                    style={{width:50,height:50}}
                    source={{uri:"http://176.3.15.6:8080/step04/admin/"+info.item.pic}} />
                <Text>{info.item.title}</Text>
            </TouchableOpacity>
    }
    loadMore=()=>{
        //1.向服务器端请求下一页数据
        var pno = this.state.nowPage;
        pno++;
        this.setState({nowPage:pno},()=>{
            if(pno > this.state.pageCount){
                return;
            }
            this.loadData();
        });
        
        
    }
    renderFooter = ()=>{
        var pno = this.state.nowPage;
        var pageCount = this.state.pageCount;
        if(pno < pageCount){
            return <View>
                        <ActivityIndicator size="large"/>
                        <Text style={{alignSelf:"center"}}>正在加载...</Text>
                    </View>
        }else{
            return null;
        }
    }
    render(){
        return <FlatList 
                onEndReached={this.loadMore}
                onEndReachedThreshold={0.5}
                renderItem={this.showItem}
                ListFooterComponent={this.renderFooter}
                data={this.state.list} />
    }
}