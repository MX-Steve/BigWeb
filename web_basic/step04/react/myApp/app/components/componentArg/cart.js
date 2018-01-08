import React,{Component} from 'react'
import {View,TextInput,Button} from 'react-native'

export default class CartComponent extends Component{

    constructor(){
        super();
        this.state={
            price:0
        }
    }
    handlePress=()=>{
        var price = this.state.price;
        this.props.navigation.navigate("myOrder",{price:price});
    }
    handleChangeText=(msg)=>{
        this.setState({price:msg});
    }
    render(){
        return <View>
            <TextInput onChangeText={this.handleChangeText} placeholder="请输入" />
            <Button 
                onPress={this.handlePress}
                title="结算" />
        </View>
    }
}