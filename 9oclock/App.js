import React, {Component, } from 'react';
import {SafeAreaView,View,Image,Text,Dimensions} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
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

const {width}=Dimensions.get('window');
const CustomDrawerComponent =(props)=>(
  <SafeAreaView style={{flex:1}}>
  <View style={{height:150, backgroundColor:'black',alignItems:'center', justifyContent:'center'}}>
  <Image source={require('./assets/icon.png')} style={{height:120, width:120,
    borderRadius: 60}}
    />
  </View>
  <View style={{height: 200, marginTop:50}}>
  <Text style={{color:'blue'}}>
  
  </Text>
  </View>
  <View>
  <Text>
  계좌가져오기
  </Text>
  </View>
  
  <DrawerItems {...props}/>
  
  </SafeAreaView>
)

const SideDrawerNavigator=createDrawerNavigator({
  Happy:{screen: ChatScreen},
},{
  contentComponent:CustomDrawerComponent,
drawerPosition : 'right',
drawerWidth:width * 3/5,
contentOptions:{
  activeTintcolor:'Orange',
  activeBackgroundColor:'#fff'
}
});


const AppNavigator = createStackNavigator(
  {
    Home,
    SignUp,
    Rooms,
    ChatScreen:{
      screen:SideDrawerNavigator
    },
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

