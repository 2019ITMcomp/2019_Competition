import React, {Component, } from 'react';
import {Icon} from 'native-base';
import {Button,SafeAreaView,View,Image,Text,Dimensions, TouchableOpacity} from 'react-native';
import { createStackNavigator, HeaderStyleInterpolator } from 'react-navigation-stack';
import {NavigationActions,createAppContainer } from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";


import ChatScreen from './src/components/ChatScreen';
import Rooms from './src/screens/Rooms';

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
const firebase = new FirebaseSDK();
const CustomDrawerComponent =(props)=>(
  <SafeAreaView style={{flex:1}}>
    <View style={{height:150, backgroundColor:'#fff',alignItems:'center', justifyContent:'center'}}>
      <Image source={require('./assets/icon.png')} style={{height:120, width:120,
        borderRadius: 60}}
      />
    </View>
    <View style={{marginTop:50,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:40,fontweight:20}}>
      대화상대
      </Text>
    </View>
    <View>
      <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
      ───────────────
      </Text>
      </View>
    <View style={{marginTop:5, marginBottom:5}}>
      <Text style={{marginLeft:10,fontSize:18, marginBottom:5}}>   
        {props.screenProps.username}
          <Text style={{color:'black', marginBottom:5}}>
            {props.screenProps.rating}
          </Text>
      </Text>
      <Text style={{marginLeft:10,fontSize:18, marginBottom:5}}>
        {props.screenProps.username2}
          <Text style={{color:'black' , marginBottom:5}}>
            {props.screenProps.rating2}
          </Text>
      </Text> 
      <Text style={{marginLeft:10,fontSize:18, marginBottom:5}}>
        {props.screenProps.username3}
          <Text style={{color:'black' , marginBottom:5}}>
            {props.screenProps.rating3}
          </Text>
      </Text>
    </View>
    <View style={{marginBottom:30}}>
    <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
    ───────────────
    </Text>
    </View>
  <View style={{ alignItems:'center',justifyContent:'center'}}>
  <TouchableOpacity onPress={()=>alert(props.screenProps.account)}>
  <Text style={{fontSize:23,fontweight:15}}>
  내 계좌번호 가져오기
  </Text>
  </TouchableOpacity>
  </View>
  <View style={{marginTop:30}}>
    <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
    ───────────────
    </Text>
    </View>
  <TouchableOpacity onPress={()=>alert(props.screenProps.isReal)}>

  <View style={{marginTop:90,alignItems:'center'}} >
  <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
    ───────────────
    </Text>
    <Text style={{fontSize:25}}>
      {out} <Icon name="arrow-forward"></Icon>
    </Text>
    <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
    ───────────────
    </Text>
  </View>
  </TouchableOpacity>
  <DrawerItems {...props}/>
  
  </SafeAreaView>
)



const SideDrawerNavigator=createDrawerNavigator({
  ' ':{screen: ChatScreen},
},{
  contentComponent:CustomDrawerComponent,
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
    Rooms,
    ChatScreen:{
      screen:SideDrawerNavigator
    },

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
    initialRouteName: 'LoginPage',
    //headerBackTitleVisible: false,
    headerMode:"none"
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      username:'강의현',
      rating:'  ★★★★(4.3)',
      username2:'손희진',
      rating2:'  ★★★★(4.5)',
      username3:'원소현',
      rating3:'  ★★★★(4.5)',
      account:'농협 12345678',
      isReal:'정말 나가시겠습니까?',
      userIds : [],
    };
  }

  setUserId = (ids) =>{
    this.setState({
      userIds : ids
    })
  }


  render(){ 



    return <AppContainer screenProps={{
      username:this.state.username,
      username2:this.state.username2,
      username3:this.state.username3,
      rating:this.state.rating,
      rating2:this.state.rating2,
      rating3:this.state.rating3, 
      account:this.state.account,
      isReal:this.state.isReal}}/>;
    //<ChangeAccount/>

    }
}

