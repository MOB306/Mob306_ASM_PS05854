/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Userlogin from './component/Userlogin';
import Splash from './component/Splash';
import Verify from './component/Verify';
import CreateNew from './component/CreateNew';
import FogotPass from './component/FogotPass';
import SetProfile from './component/SetProfile';
import UpdateProfile from './component/UpdateProfile';

import Logo from './component/com/Logo';
// import ButtonFace from './component/com/ButtonFace';
// import ButtonCreateBack from './component/com/ButtonCreateBack'; import
// Mycomponent from './component/com/Mycomponent';

const Navigation = StackNavigator({
  // ButtonFace:{screen: ButtonFace},
  UpdateProfile: {
    screen: UpdateProfile
  },
  Userlogin: {
    screen: Userlogin
  },
  
  
  CreateNew: {
    screen: CreateNew
  },
  Verify: {
    screen: Verify
  },
  
  Splash: {
    screen: Splash
  },
  FogotPass: {
    screen: FogotPass
  },
  SetProfile: {
    screen: SetProfile
  }
}, {headerMode: 'none'});

export default Navigation;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});
