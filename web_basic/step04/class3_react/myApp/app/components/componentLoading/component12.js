import React,{Component} from 'react';
import {ActivityIndicator,View,Text,Switch} from 'react-native';

export default class Component12 extends Component{
    constructor(){
        super();
        this.state={
            myValue:true
        }
    }
    handleValueChange=(msg)=>{
        // console.log(msg);
        this.setState({myValue:msg});
    }
    render(){
        return <View style={{alignItems:'center'}}>
            <ActivityIndicator size="large">
            </ActivityIndicator>
            <Text>loading...</Text>
            <Switch 
                onValueChange={this.handleValueChange}
                value={this.state.myValue}/>
        </View>    
    }
}