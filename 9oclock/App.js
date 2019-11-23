import React, {
  Component, 
} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
// Home 을 제외한 아래의 screens들은 나중에 사용할 것들이다. 
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';
import Chat from './src/components/Chat';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import SignIn from './src/components/SignIn';

import Rooms from './src/screens/Rooms';
// import Messages from './src/components/Messages';

// 아래 import는 소현 & 희진 작품
import SignUpPage from './page/SignUp.js'
import LoginPage from './page/Login.js'
import LoginSuccessPage from './page/LoginSuccess'
import IdFindPage from './page/IdFind'
import PwFindPage from './page/PwFind'
import Mainpage from "./mypage/Mypagemain";

import Mypagemain from "./mypage/Mypagemain";
import ChangePw from "./mypage/ChangePw";
import AppInfo from "./mypage/AppInfo";

import Test from './src/screens/Test';

const AppNavigator = createStackNavigator(
  {
    Home,
    AddItem,
    List,
    Chat,
    Login,
    Signup,
    SignIn,
    Rooms,
    // Messages,
    Test,

    //아래 희진
    SignUpPage,
    LoginPage,
    LoginSuccessPage,
    IdFindPage,
    PwFindPage,
    Mainpage,
    //아래 소현
    Mypagemain,
    ChangePw,
    AppInfo,

  },
  {
    initialRouteName: 'Home',
    // headerMode:"none"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component  {
  render(){
    return <AppContainer />;
  }
}

