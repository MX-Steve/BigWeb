import React,{Component} from 'react'
import {Button} from 'react-native'


export default class LoginComponent extends Component{
    handlePress=()=>{
        this.props.navigation.navigate("myMain");
    }
    render(){
        return <Button onPress={this.handlePress} title="登录"></Button>
    }
}