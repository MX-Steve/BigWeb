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
import ToDoBox  from './app/components/todobox/todobox'
import Component12 from './app/components/componentLoading/component12'

// 引入要用到的路由配置类
import {StackNavigator} from 'react-navigation'

import ListComponent from './app/components/componentNavigation/list'
import DetailComponent from './app/components/componentNavigation/detail'
import LoginComponent from './app/components/componentSPA/login'
import MainComponent from './app/components/componentSPA/main'
import CartComponent from './app/components/componentArg/cart'
import OrderComponent from './app/components/componentArg/order'

// 配置路由词典
const RootNavigator = StackNavigator({
  testCart:{screen:CartComponent},
  testOrder:{screen:OrderComponent},
  myLogin:{screen:LoginComponent},
  myMain:{screen:MainComponent},
  myList:{screen:ListComponent},
  myDetail:{screen:DetailComponent}
}
);

AppRegistry.registerComponent('myapp', () => RootNavigator);
