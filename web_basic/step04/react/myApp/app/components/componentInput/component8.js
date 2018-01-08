import React,{Component} from 'react';
import {TextInput,View} from 'react-native';

export default class Component8 extends Component{


  //onChangeText所指定的事件处理函数被调用时，
  //其实是由参数的，这个参数就是当前输入框中输入的文本内容
  handleChangeText(msg){
    console.log(msg);
  }

  render(){
    return <View>
      <TextInput 
      keyboardType="numeric"
      placeholder="请输入密码"
      onChangeText={this.handleChangeText}
      secureTextEntry={true}>
      </TextInput>
    </View>
  }

}