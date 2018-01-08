import React,{Component} from 'react';
import {TouchableOpacity,Text} from 'react-native'

export default class Component9 extends Component{
  handlePress(){
    alert('点击成功！');
  }

  render(){
    return <TouchableOpacity 
    onPress={this.handlePress} >
      <Text>点我试试</Text>
    </TouchableOpacity>
  }

}

