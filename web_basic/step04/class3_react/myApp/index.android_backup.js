/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Component1 from './app/components/component1/component1';
import Component2 from './app/components/component2/component2'
import Component3 from './app/components/componentStyleSheet/component3'
import Component4 from './app/components/componentState/component4'
import Component5 from 
'./app/components/componentButton/component5'
import LianXiComponent from './app/components/componentLianxi/lianxi'
import Component6 from './app/components/componentFlatList/component6'
import Component7 from './app/components/componentImage/component7'
import Component8 from './app/components/componentInput/component8'
import Component9 from './app/components/componentTO/component9'
import Component10 from './app/components/componentFetch/component10'
import TestComponent from './app/components/componentLianxi/testserver'
import Component11 from './app/components/componentFlexBox/component11'
import ToDoBox from './app/components/toDoBox/todobox'
import Component12 from './app/components/componentLoading/component12'
import ListComponent from './app/components/componentNavigation/list'
import DetailComponent from './app/components/componentNavigation/detail'
import LoginComponent from "./app/components/component_user/loginComponent"
import MainComponent from "./app/components/component_user/mainComponent"
import CartComponent from './app/components/componentArg/cart'
import OrderComponent from './app/components/componentArg/order'
import CheckComponent from './app/components/lianxi/check'
import PayComponent from './app/components/lianxi/pay'
import SendComponent from './app/components/lianxi/send'

//引入要用到的路由配置类
import {StackNavigator} from "react-navigation";

//配置路由词典
const RootNavigator = StackNavigator({
  myCheck:{screen:CheckComponent},
  myPay:{
    screen:PayComponent,
    navigationOptions:()=>({
      headerTitle:"支付页面",
      headerTitleStyle:{
        alignSelf:'center',
        color:'red'
      }
    })
  },
  mySend:{screen:SendComponent},
  myCart:{screen:CartComponent},
  myOrder:{screen:OrderComponent},
  myLogin:{screen:LoginComponent},
  myMain:{screen:MainComponent},
  myList:{screen:ListComponent},
  myDetail:{screen:DetailComponent},
});

export default class myapp extends Component {
  render() {
    return (
      <View >
        <Text>{'\n'}</Text>
        <Component12/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => RootNavigator);
