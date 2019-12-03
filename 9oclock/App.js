import React, {Component, } from 'react';
import {Icon} from 'native-base';
import {Alert,Button,SafeAreaView,View,Image,Text,Dimensions, TouchableOpacity} from 'react-native';
import { createStackNavigator, HeaderStyleInterpolator } from 'react-navigation-stack';
import {NavigationActions,createAppContainer } from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import DrawerComponent from './DrawerComponent';


import ChatScreen from './src/components/ChatScreen';
import SignUpPage from './src/page/SignUp';
import LoginPage from './src/page/Login';
import SignUpSuccessPage from './src/page/SignUpSuccess';
import EmailValidationPage from './src/page/EmailValidation';
import IdFindPage from './src/page/IdFind';
import PwFindPage from './src/page/PwFind';

import Mypagemain from "./src/mypage/Mypagemain";
import ChangePw from "./src/mypage/ChangePw";
import AppInfo from "./src/mypage/AppInfo";
import AccountDrop from "./src/mypage/AccountDrop";
import ChangeAccount from "./src/mypage/ChangeAccount";
import AppMain from "./src/mypage/Main";
import FirebaseSDK from './src/config';

const {width}=Dimensions.get('window');
const out='방나가기    '
const SideDrawerNavigator=createDrawerNavigator({
  ' ':{screen: ChatScreen},
},{
  contentComponent:DrawerComponent,
drawerPosition : 'right',
drawerWidth:width * 3/5,
keyboardDismissMode:'none',
contentOptions:{
  activeTintcolor:'Orange',
  activeBackgroundColor:'#fff'
}
});

const AppNavigator = createStackNavigator(
  {
    ChatScreen:{
      screen:SideDrawerNavigator
    },
    SignUpPage,
    LoginPage,
    SignUpSuccessPage,
    IdFindPage,
    PwFindPage,
    EmailValidationPage,
    Mypagemain,
    ChangePw,
    AppInfo,
    AccountDrop,
    ChangeAccount,
    AppMain,
  },
  {
    initialRouteName: 'LoginPage',
    //headerBackTitleVisible: false,
    headerMode:"none"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component  {

  render(){ 

    return <AppContainer/>;
    //<ChangeAccount/>

    }
}

