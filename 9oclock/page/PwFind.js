import React, { Component } from "react";

import {Keyboard, Text, View, TextInput, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';


const { height, width } = Dimensions.get("window");

export default class PwFindPage extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerView}>
            <View style={styles.containerView}>
              <View style={styles.titleContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>비밀번호 찾기</Text>
                  <TouchableOpacity onPress={this.xbutton} >
                    <Image source = {require('./x_button.png')} style={styles.x_button} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: "column", borderBottomColor:'#A9A9A9', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal:10,paddingBottom:20}}>
                <Text style={styles.subTitle}>아이디</Text>
                <TextInput  placeholderColor="#c4c3cb" style={styles.textInput} />
                <Text style={styles.subTitle}>가입하신 학교 웹메일 주소를 입력해주세요.</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholderColor="#c4c3cb" style={styles.emailInput}/>
                  <Text style={styles.textMail}>@ seoultech.ac.kr</Text>
                  <Button buttonStyle={styles.button} title="확인" fontSize='10'/>
                </View>
                <Text style={styles.subTitle}>인증번호</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholderColor="#c4c3cb" style={styles.emailInput}/>
                  <Button buttonStyle={styles.button} title="확인" fontSize='10'></Button>
                </View>
              </View>
                <TouchableOpacity onPress={this.onLoginPagePress}>
                        <Text style={styles.text2}>비밀번호 변경하기</Text>
                </TouchableOpacity>
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
  title :{
    fontSize:30, 
    fontWeight:'900',
    marginTop:45,  
    marginLeft:15, 
    flex:1,
  },
  titleContainer:{
    borderBottomColor:'#A9A9A9', 
    borderBottomWidth: 2, 
    marginBottom:10, 
    marginLeft:10, 
    marginRight:10, 
    paddingBottom:7,
    alignItems:'center' 
  },
  x_button:{
    marginTop:28, 
    height:60, 
    width:60, 
    flex:1,
    marginBottom:-10,
  },
  subTitle:{
    fontSize:17,
    marginLeft:7,
    marginTop:10,
    //marginBottom:5,
    color: '#333333'

  },
  containerView: {
    flex: 1,
  },
  emailInput:{
    height: 43,
    flex:1,
    fontSize: 14,
    borderRadius: 5,
    //borderBottomWidth: 1,
    //borderBottomColor: '#c4c3cb',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#eaeaea',
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 5
  },
  inputContainer:{
    flexDirection:'row',
    width: width-30,
    alignContent: 'stretch',
    marginHorizontal:7,
    marginRight:15,
    //borderWidth:1,
    //borderColor:'black'
    
  },
  textMail:{
    fontSize:15,
    marginLeft:7, 
    marginTop:15,
    color:'#696969'
  },
  button:{
    backgroundColor: '#C0C0C0',
    borderRadius: 5, 
    height:45, 
    marginLeft:15, 
    width:45,
    marginTop:5
  },
  text:{
    fontSize:20,
    marginLeft:10,
    marginTop:20,
    marginBottom:15,
    color: '#333333',
    textAlign:'center'
  },
  text2:{
    marginTop:15,
    fontSize:17,
    textAlignVertical:'center',
    backgroundColor:'white',
    color:'black',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:5,
    textAlign:'center'
  },
  textInput: {
    height: 43,
    fontSize: 17,
    borderRadius: 5,
    //borderBottomWidth: 1,
    //borderBottomColor: '#c4c3cb',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#eaeaea',
    paddingLeft: 10,
    marginLeft: 7,
    marginRight: 7,
    marginTop: 5,
    marginBottom: 5,
  
  },
});
