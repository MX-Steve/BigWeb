import React,{Component} from 'react';
import {Text} from 'react-native';


export default class Component4 extends Component{

  constructor(){
    super();//指定继承component构造函数中的一些属性
    //完成状态的初始化
    this.state = {
      count:1
    };
  }

  componentDidMount(){
      console.log('did mount');
      setInterval(
        ()=>{
          //每隔1s，将状态中的值自增一次
          var nowCount = this.state.count;
          nowCount++;
          this.setState({count:nowCount});
        },
        1000
      );
  }

  render(){
    return <Text>{this.state.count}</Text>
  }
}