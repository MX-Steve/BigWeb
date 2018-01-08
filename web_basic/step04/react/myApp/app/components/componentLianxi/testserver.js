import React,{Component} from 'react';
import {FlatList,Text} from 'react-native';

export default class TestComponent extends Component{

  constructor(){
    super();
    this.state = {
      list:[]
    };
  }

  componentWillMount(){
    fetch('http://172.163.100.100/admin/data/user_list.php')
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
      console.log(response);
      //response.data
      this.setState({list:response.data});
    })
  }

  displayItem(info){
    return <Text>
      {info.item.uname}
    </Text>
  }

  render(){
    return <FlatList 
    renderItem={this.displayItem}
    data={this.state.list}></FlatList>
  }

}