import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// import { createStackNavigator } from 'react-navigation-stack';


import Tinh from './Tinh';
import Lan from './Lan';
import ThemLan from './ThemLan';
import BaiViet from './BaiViet';
import ThemBaiViet from './ThemBaiViet';

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode = 'none'>
                    <Stack.Screen name="Tinh" component={Tinh} ></Stack.Screen>
                    <Stack.Screen name="Lan" component={Lan}></Stack.Screen>
                    <Stack.Screen name="BaiViet" component={BaiViet}></Stack.Screen>
                    <Stack.Screen name="ThemLan" component={ThemLan}></Stack.Screen>
                    <Stack.Screen name="ThemBaiViet" component={ThemBaiViet}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
// import 'react-native-gesture-handler';
// import { createStackNavigator, createAppContainer } from "react-navigation";

// import tinh from './Tinh'
// import lan from './Lan'
// import baiViet from './BaiViet'
// import themLan from './ThemLan'
// const AppNavigator = createStackNavigator({
//     Tinh: {
//       screen: tinh
//     },
//     Lan: {
//       screen: lan
//     },
//     BaiViet:{
//         screen: baiViet
//     },
//     ThemLan:{
//         screen: themLan
//     }
//   });
//   export default createAppContainer(AppNavigator);