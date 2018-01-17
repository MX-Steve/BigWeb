import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class Component3 extends Component{
  render(){
    return <View>
      <Text 
    style={{color:'red',fontSize:30}}>
      it is component3 
     </Text>
     <Text style={styles.myText}> hello rn </Text>
     <Text>{this.props.myName}</Text>
     </View>
    }
}

//创建样式类的配置对象
const styles = StyleSheet.create(
  {
    myText:{
      color:'red',
      fontSize:30
    }
  }
);