import React,{Component} from 'react';
import {Text,FlatList,Image,TouchableOpacity} from "react-native";

export default class UserListComponent extends Component{
    constructor(){
        super();
        this.state = {
            list:[]
        }
    }
    componentWillMount(){
        fetch('http://176.3.15.6:8080/step04/admin/data/user_list.php')
        .then((response)=>response.json())
        .then((response)=>{
            console.log(response);
            var myList = response.data;
            for(var i=0;i<myList.length;i++){
                myList[i].key = i;
            }
            this.setState({list:myList});
            
        })
    }
    showPhoneNumber=(index)=>{
        alert(this.state.list[index].phone);
    }
    showItem=(info)=>{
        return <TouchableOpacity 
                onPress={()=>{this.showPhoneNumber(info.index)}}
                style={{flexDirection:'row'}}>
            <Image 
                style={{width:50,height:50,borderRadius:15}} 
                source={{uri:"http://176.3.15.6:8080/step04/admin/img/avatar/default.png"}}></Image>
            <Text>{info.item.uname}</Text>
        </TouchableOpacity>
    }
    render(){
        return <FlatList 
                renderItem = {this.showItem}
                data={this.state.list}
                />
    }
}