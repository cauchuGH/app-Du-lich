import 'react-native-gesture-handler';

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native'

import Screen from './Screen/BaiViet'
import AppNavigator from './/Screen/routerScreen'

export default class MyApp extends Component {

  render() {
    return (
      
        <AppNavigator></AppNavigator>
      
    )
  }
}
