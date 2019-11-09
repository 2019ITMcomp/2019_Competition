import React, { Component } from "react";

import styles from "./style.js";
import {Keyboard, Text, View, TextInput, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions} from 'react-native';
import { Button } from 'react-native-elements';

const { height, width } = Dimensions.get("window");

export default class SignUpPage extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={{fontSize:30, textAlign: 'center', fontWeight:'300',marginTop:40,marginBottom:15}}>회원가입</Text>
            <TextInput placeholder="아이디" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="비밀번호" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <TextInput placeholder="비밀번호 재입력" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <View style={{flex:1, flexDirection:'row',width: width,}}>
              <TextInput placeholder="학교 웹메일 주소" placeholderColor="#c4c3cb" style={{height: 43,
                width:width-220,
                fontSize: 14,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#eaeaea',
                backgroundColor: '#fafafa',
                paddingLeft: 10,
                marginLeft: 15,
                marginTop: 5,
                marginBottom: 5}}/>
              <Text style={{fontSize:15,marginLeft:7, marginTop:15,color:'#696969'}}>@ seoultech.ac.kr</Text>
              <Button buttonStyle={{backgroundColor: '#C0C0C0',borderRadius: 5, height:45, marginLeft:20 , width:45}} title="전송"/>
            </View>

          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }
  onSignUpPress(){

  }
  onIdFind(){

  }
  onPwFind(){

  }


}
