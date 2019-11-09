import React, { Component } from "react";

import styles from "./style.js";
import {Keyboard, Text, View, TextInput, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';



export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style ={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../assets/icon.png')} style={styles.logo}/>
            </View>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
            <Button
              buttonStyle={styles.signupButton}
              onPress={() => this.onSignUpPress()}
              title="Sign Up"
            />
            <View style={styles.idpwFindView}>
              <Text style={styles.text} onPress={()=> this.onIdFind()}>아이디 찾기</Text>
              <Text style={styles.text} onPress={()=> this.onPwFind()}>비밀번호 찾기</Text>
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
