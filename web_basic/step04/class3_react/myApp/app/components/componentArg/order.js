import React,{Component} from 'react'
import {View,Text} from 'react-native'

export default class OrderComponent extends Component{
    constructor(){
        super();
        this.state={
            price:0
        }
    }
    componentWillMount(){
        var price = this.props.navigation.state.params.price;
        this.setState({price:price});
    }
    render(){
        return <Text>订单页面:价格为：{this.state.price}</Text>
    }
}