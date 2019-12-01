import React, { Component } from "react";

//import styles from "./style.js";
import {
  Keyboard, 
  Text, 
  View, 
  StyleSheet, 
  TextInput,
  Dimensions, 
  Image,
  TouchableWithoutFeedback, 
  Alert, 
  KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import { app } from '../config';

const { height, width } = Dimensions.get("window");

export default class LoginScreen extends Component {
  
  static navigationOptions = {
    title : 'SignIn',
    header : null,

  }
  constructor(props){
    super(props);
    this.state = {
        userEmail : '',
        userPassword : '',

    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style ={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/icon.png')} style={styles.logo}/>
            </View>
            <TextInput 
            placeholder="UserEmail" 
            placeholderColor="#c4c3cb" 
            style={styles.loginFormTextInput}
            onChangeText={(text) => this.setState({ userEmail: text })}
            />
            <TextInput 
            placeholder="Password" 
            placeholderColor="#c4c3cb" 
            style={styles.loginFormTextInput} 
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ userPassword: text })}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={this.onLoginPress.bind(this)}
              title="Login"
            />
            <Button
              buttonStyle={styles.signupButton}
              onPress = {this.onSignUpPress.bind(this)}
              title="Sign Up"
            />
            <View style={styles.idpwFindView}>
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

  async onLoginPress() {
    if (this.state.userEmail != '' && this.state.userPassword != '') {
      try {
          await app.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword);
          console.log(this.state.userEmail + ' signed in');
          // console.log('이메일 로그인 성공 : ', JSON.stringify(app.auth().currentUser));
          //email 인증 확인 후 메인페이지 접속 가능
          if(app.auth().currentUser.emailVerified==false){
            this.props.navigation.navigate('EmailValidationPage');
          }else{
            this.props.navigation.navigate('AppMain');
          }
      } catch(error) {
          console.log(error.toString());
          Alert.alert(error.toString());
          app.auth().updateCurrentUser
      }
    }
    else {
      Alert.alert(
          'Invalid Sign In',
          'The Email and Password fields cannot be blank.',
          [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
      )
    }
  }

  onSignUpPress = () =>{
    this.props.navigation.navigate("SignUpPage");
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
    textAlign:'right',
    flex:1,
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
