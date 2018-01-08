
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

export default class Component5 extends Component{

  handlePress(){
    alert('btn is clicked');
  }

  render(){
    return <View>
      <Text></Text>
      <Button 
      onPress={this.handlePress}
      title="clickMe"></Button>
    </View>
  }
}