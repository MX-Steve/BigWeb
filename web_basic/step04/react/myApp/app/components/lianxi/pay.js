import React,{Component} from 'react';
import {Button} from 'react-native'

export default class PayComponent extends Component{

    handlePress=()=>{
        this.props.navigation.navigate("mySend");

    }
    render(){
        return <Button title={"支付"+this.props.navigation.state.params.price} onPress={this.handlePress}/>
    }
}