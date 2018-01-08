import React,{Component} from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';

export default class ListComponent extends Component{
    handlePress=()=>{
        //跳转到详情页
        console.log(this.props);
    }
    showItem=(info)=>{
        return <TouchableOpacity
            onPress={this.handlePress}>
                <Text>{info.item}</Text>
               </TouchableOpacity>
    }
    render(){
        return <FlatList 
            renderItem={this.showItem}
            data={[100,200,300]}
            />
    }
}