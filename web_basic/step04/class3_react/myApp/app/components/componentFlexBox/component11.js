import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Component11 extends Component{

    render(){
      return <View>
        <View style={{
          height:100,backgroundColor:'#e6e6e6',alignItems:'center'}}>
          <Text>水平居中</Text>
        </View>
        <View style={{
          height:100,backgroundColor:'#0efefe',justifyContent:'center'}}>
          <Text>垂直居中</Text>
        </View>
        <View style={{
          height:100,
          backgroundColor:'#fefe0e',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text>居中</Text>
        </View>  
      </View>
    }

}