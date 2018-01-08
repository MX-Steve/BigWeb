import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class ToDoItem extends Component{
    handlePress=()=>{
        //this.props.funcDel(1);
        this.props.delete(this.props.myIndex);
    }
    render(){
        return <View>
            <Button
             onPress={this.handlePress}
             title="删除"/>
            <Text>{this.props.myContent}</Text>
        </View>
    }
}