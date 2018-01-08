import React,{Component} from 'react';
import {View,Text,Button} from 'react-native'

export default class CheckComponent extends Component{

    handlePress=()=>{
        this.props.navigation.navigate("myPay",{price:100});
    }
    render(){
        return <View>
            <Text>这是商品查看页面</Text>
            <Button onPress={this.handlePress} title="去支付"></Button>
        </View>
    }
}