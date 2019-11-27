import React, { Component } from "react";

import {Keyboard, Text, View, TextInput, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';



const { height, width } = Dimensions.get("window");

export default class IdFindPage extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerView}>
            <View style={styles.containerView}>
              <View style={styles.titleContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>아이디 찾기</Text>
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate("LoginPage")} >
                    <Image source = {require('./x_button.png')} style={styles.x_button} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: "column",borderBottomColor:'#A9A9A9', borderBottomWidth: StyleSheet.hairlineWidth, marginHorizontal:10,paddingBottom:20}}>
                <Text style={styles.subTitle}>가입하신 학교 웹메일 주소를 입력해주세요.</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholderColor="#c4c3cb" style={styles.emailInput}/>
                  <Text style={styles.textMail}>@ seoultech.ac.kr</Text>
                  <Button buttonStyle={styles.button} title="확인" fontSize='10'/>
                </View>
              </View>
                <Text style={styles.text}>ID는 chun****5224 입니다.</Text>
                <TouchableOpacity onPress = {() => this.props.navigation.navigate("LoginPage")}>
                        <Text style={styles.text2}>로그인 페이지로</Text>
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
    marginLeft:10,
    marginTop:20,
    marginBottom:15,
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
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5
  },
  inputContainer:{
    flexDirection:'row',
    width: width-30,
    alignContent: 'stretch',
    marginLeft:10,
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

});
