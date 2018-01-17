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
import {StackNavigator} from 'react-navigation'
import LoginComponent from './app/components/project/login'
import MainComponent from './app/components/project/main'
import ProductListComponent from './app/components/project/productList'


//配置路由词典
const RootNavigator = StackNavigator({
  myLogin:{
    screen:LoginComponent,
    navigationOptions:()=>({
      headerTitle:'登录',
      headerLeft:null,
      headerTitleStyle:{
        alignSelf:'center'
      }
    })
  },
  myMain:{
    screen:MainComponent,
    navigationOptions:()=>({
      headerTitle:'管理界面',
      headerLeft:null,
      headerTitleStyle:{
        alignSelf:'center'
      }
    })
  },
  myPL:{
    screen:ProductListComponent,
    navigationOptions:()=>({
      headerTitle:'商品列表',
      headerLeft:null,
      headerTitleStyle:{
        alignSelf:'center'
      }
    })
  }
})

AppRegistry.registerComponent('myapp', () => RootNavigator);
