import React,{Component} from "react";
import {View,Text,TouchableOpacity} from "react-native";

export default class Component9 extends Component
{

    handlePress(){
        alert(1);
    }
    render(){
        return <TouchableOpacity onPress={this.handlePress}>
            <Text>点我试试</Text>
        </TouchableOpacity>
    }
}