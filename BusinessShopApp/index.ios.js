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
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native';
import Navigation from './Navigation/navigation'
import navigation from './Navigation/app'

class Testing extends Component{
  render() {
    return (

      <View style={{backgroundColor:'red',flex:1}}>
      <Navigation />
      </View>
      );
  }
}

export default class BusinessShopApp extends Component {
	
	_toast() {
        // showMessage('提示信息内容','显示时长1~5秒','位置['top','center','bottom']')
        var CalendarManager = NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    }
  render() {
  	
    return (
      <View style={styles.container}>
     <TouchableOpacity onPress={ this._toast.bind(this) }>
                    <View>
                        <Text>点击图片可以去图文详情页</Text>
                    </View>
                    <Testing />
                </TouchableOpacity>
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

AppRegistry.registerComponent('BusinessShopApp', () => navigation);
