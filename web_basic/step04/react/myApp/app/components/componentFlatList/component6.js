import React,{Component} from 'react';
import {Text,FlatList} from 'react-native';

export default class Component6 extends Component{

  constructor(){
    super();
    this.state = {
      myList:[100,200,300]
    };
  }

  // showItem方法通过renderItem给了FlatList
  // 这个方法的参数就是一个对象，包含item和index
  showItem(info){
    console.log(info);
    return <Text>{info.item}</Text>
  }

  render(){
    return <FlatList 
    renderItem={this.showItem}
    data={this.state.myList}>
    </FlatList>
  }
}