import React, {
  Component, 
} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';

import SignUp from './src/components/Signup';
import SignIn from './src/components/SignIn';
import ChatScreen from './src/components/ChatScreen';
import Rooms from './src/screens/Rooms';
import SelectRoom from './src/screens/SelectRoom';

// 아래 import는 소현 & 희진 작품
import SignUpPage from './src/page/SignUp';
import LoginPage from './src/page/Login';
import LoginSuccessPage from './src/page/LoginSuccess';
import IdFindPage from './src/page/IdFind';
import PwFindPage from './src/page/PwFind';


import Mypagemain from "./mypage/MyPageMain";
import ChangePw from "./mypage/ChangePw";
import AppInfo from "./mypage/AppInfo";
import AccountDrop from "./mypage/AccountDrop";
import ChangeAccount from "./mypage/ChangeAccount";


const AppNavigator = createStackNavigator(
  {
    Home,
    SignUp,
    SignIn,
    Rooms,
    ChatScreen,
    SelectRoom,

    //아래 희진
    SignUpPage,
    LoginPage,
    LoginSuccessPage,
    IdFindPage,
    PwFindPage,
    //아래 소현
    Mypagemain,
    ChangePw,
    AppInfo,
    AccountDrop,
    ChangeAccount,
  },
  {
    initialRouteName: 'Home',
    //headerBackTitleVisible: false,
    // headerMode:"none"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component  {
  render(){
    return <AppContainer />;
    //<ChangeAccount/>

    }
}

