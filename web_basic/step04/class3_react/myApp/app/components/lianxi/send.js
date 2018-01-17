import React,{Component} from 'react';
import {Button} from 'react-native'

export default class SendComponent extends Component{

    handlePress=()=>{
        this.props.navigation.navigate("myCheck");
    }
    
    render(){
        return <Button title="查看商品" onPress={this.handlePress}/>
    }
}