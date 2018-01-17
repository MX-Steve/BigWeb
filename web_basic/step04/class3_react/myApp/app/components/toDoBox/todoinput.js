import React,{Component} from 'react';
import {View,Text,Button,TextInput} from 'react-native';

export default class ToDoInput extends Component{
    constructor(){
        super();
        this.state={
            userInput:''
        }
    }
    sendToFather=()=>{
        //调用方法，通过属性传值
        this.props.funcSave(this.state.userInput);
        this.setState({userInput:''});
    }
    //在该方法中将当前输入的值保存在状态中，方便在点击添加按钮时发送给父组件
    handleChangeText=(msg)=>{
        this.setState({
            userInput:msg
        });
    }
    render(){
        return <View>
            <Text>代做事项列表</Text>
            <Text>{'\n'}</Text>
            <TextInput 
                onChangeText={this.handleChangeText}
                placeholder="请输入代做事项"/>
            <Button 
                onPress={this.sendToFather} 
                title="添加"/>
        </View>
    }
}