import React, { Component } from "react";


import {StyleSheet,Keyboard,Dimensions, Text, View, TextInput, Image,TouchableWithoutFeedback,TouchableOpacity, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';



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
            <View style={styles.container}>
                <Text style={styles.text}>가입을 축하합니다 !</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("LoginPage")}>
                    <Text style={styles.text2}>로그인 페이지로</Text>
                </TouchableOpacity>
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

  onLoginPagePress() {

  }



}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#DDDDDD',
        height: 130,
        marginHorizontal:50,
        alignItems:'center',
        
    },
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
      text:{
          marginTop:30,
          fontSize:20,
          textAlignVertical:'center'
      },
      text2:{
        marginTop:15,
        fontSize:15,
        textAlignVertical:'center',
        backgroundColor:'white',
        color:'black',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5,
      },
      loginButton: {
        backgroundColor: '#E9E9E9',
        paddingHorizontal:15,
        borderRadius: 5,
        height: 45,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        
      },
      

})
