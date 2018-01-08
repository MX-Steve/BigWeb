import React,{Component} from 'react';
import {View,TextInput} from 'react-native';

export default class Component8 extends Component
{
    handleChangeText(msg){
        console.log(msg);
    }
    render(){
        return <View>
            <TextInput 
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            placeholder="请输入用户名"
            secureTextEntry={true}></TextInput>
        </View>
    }
}