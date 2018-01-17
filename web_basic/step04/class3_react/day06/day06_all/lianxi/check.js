import React,{Component} from 'react';
import {Button,Text,View} from 'react-native';

export default class CheckComponent extends Component{
  handlePress=()=>{
    this.props.navigation
    .navigate('pay',{price:100});
  }

  render(){
    return <View>
      <Text>这是商品的查看页面</Text>
      <Button 
      onPress={this.handlePress} 
      title="去支付"/>
    </View>
  }

}