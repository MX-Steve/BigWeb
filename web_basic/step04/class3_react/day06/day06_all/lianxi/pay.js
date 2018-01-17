import React,{Component} from 'react';
import {Button} from 'react-native'

export default class PayComponent extends Component{


  handlePress=()=>{
     this.props.navigation
    .navigate('send')
  }

  render(){
    return <Button 
    onPress={this.handlePress} 
    title={"支付"+this.props.navigation.state.params.price}/>
  }
}