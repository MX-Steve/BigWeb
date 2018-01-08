import React,{Component} from "react";
import {Button,View,Text} from "react-native";

export default class Component10 extends Component{
    handlePress(){
        //服务器发起请求
        fetch('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            console.log(response);
        });
    }
    render(){
        return <Button onPress={this.handlePress} title="获取数据"></Button>
    }
}
