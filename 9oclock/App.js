import React, {
  Component, 
} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';

import SignUp from './src/components/Signup';
import ChatScreen from './src/components/ChatScreen';
import Rooms from './src/screens/Rooms';
import SelectRoom from './src/screens/SelectRoom';

// 아래 import는 소현 & 희진 작품
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

const AppNavigator = createStackNavigator(
  {
    Home,
    SignUp,
    Rooms,
    ChatScreen,
    SelectRoom,

    //아래 희진
    SignUpPage,
    LoginPage,
    SignUpSuccessPage,
    IdFindPage,
    PwFindPage,
    EmailValidationPage,
    //아래 소현
    Mypagemain,
    ChangePw,
    AppInfo,
    AccountDrop,
    ChangeAccount,
    AppMain,
  },
  {
    initialRouteName: 'Home',
    //headerBackTitleVisible: false,
    //  headerMode:"none"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component  {
  render(){
    return <AppContainer />;
    //<ChangeAccount/>

    }
}

