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
import {StackNavigator} from "react-navigation";

import ProjectLogin from "./app/components/project/login"
import ProjectMain from "./app/components/project/main"
import ProjectProductList from "./app/components/project/productList"
import TestComponent from './app/components/project/test'
import UserListComponent from './app/components/project/userList'
//配置路由
const RootNavigator = StackNavigator({
  myUserList:{screen:UserListComponent},
  myMain:{ 
    screen:ProjectMain,
    navigationOptions:()=>({
      headerTitle:"管理页面",
      headerTitleStyle:{
        alignSelf:"center"
      }
    })
  },
  myList:{screen:ProjectProductList},
  myLogin:{
    screen:ProjectLogin,
    navigationOptions:()=>({
      headerTitle:"登录",
      headerTitleStyle:{
        color:'red',
        alignSelf:"center"
      }
    })
  },
});
export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
