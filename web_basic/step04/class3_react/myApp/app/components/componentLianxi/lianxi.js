import React,{Component} from 'react';
import {Button} from 'react-native';

export default class LianXiComponent extends Component{

  constructor(){
    super();
    this.state = {
      switch:false
    };
  }

  handlePress=()=>{
      var nowSwitch = this.state.switch;
      this.setState({switch:!nowSwitch});
  }

  render(){
    return <Button 
    onPress={this.handlePress}
    title={this.state.switch?'开':'关'}>
    </Button>
  }

}