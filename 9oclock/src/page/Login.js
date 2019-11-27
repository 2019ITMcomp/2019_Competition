import React, { Component } from "react";

//import styles from "./style.js";
import {Keyboard, Text, View, StyleSheet, TextInput,Dimensions, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';


const { height, width } = Dimensions.get("window");
export default class LoginScreen extends Component {
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style ={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/icon.png')} style={styles.logo}/>
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
              onPress = {() => this.props.navigation.navigate("SignUpPage")}
              title="Sign Up"
            />
            <View style={styles.idpwFindView}>
              <Text style={styles.text} onPress = {() => this.props.navigation.navigate("IdFindPage")}>아이디 찾기</Text>
              <Text style={styles.text} onPress = {() => this.props.navigation.navigate("PwFindPage")}>비밀번호 찾기</Text>
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
  


}

const styles=StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logo: {
    marginTop: 100,
    marginBottom:30,
    height: 150,
    width: 150,
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: 'rgba(87, 185, 158, 0.7)',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  signupButton:{
    backgroundColor: '#A9A9A9',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  text:{
    fontSize:15,
    marginLeft:20,
    marginRight:20,
  },
  idpwFindView:{
    marginTop:20,
    width: width,
    justifyContent: 'space-around',
    flex:1,
    flexDirection:'row',
  
  },
  signUpFormContainer:{
    flex:1,
    flexDirection:'row',
    width:width,
    justifyContent: 'space-around',
  },
  signupCheckButton:{
    width: 43,
    height: 43,
  }

})
