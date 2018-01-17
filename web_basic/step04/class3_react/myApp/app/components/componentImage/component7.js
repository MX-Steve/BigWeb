import React,{Component} from 'react';
import {View,Image}  from 'react-native';


export default class Component7 extends Component{

  constructor(){
    super();
    this.state = {
      imgUrl:'1.jpg'
    }
  }
  render(){
    return <View>
      <Image 
      style={{width:30,height:30}}
      source={require("../../img/1.jpg")} />
    </View>
  }

}