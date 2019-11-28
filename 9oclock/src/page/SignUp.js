import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions, StyleSheet,  ScrollView,TouchableOpacity} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import RNPickerSelect from 'react-native-picker-select';


const { height, width } = Dimensions.get("window");

export default class SignUpPage extends Component {

  state={
    checked: false,
  };
  render() {
    let data=[{label:'농협', value: '농협'},{label:'하나', value: '하나'},{label:'KB국민', value: 'KB국민'},{label:'신한', value: '신한'},{label:'우리', value:'우리'}, {label:'외환', value:'외환'},{label:'우체국', value:'우체국'},{label:'수협', value:'수협'},{label:'신협', value:'신협'},{label:'카카오뱅크', value:'카카오뱅크'},{label:'저축은행', value:'저축은행'},{label:'기업',value:'기업'}]
    const placeholder = {
      label: '은행명',
      value: null,
      fontSize:25,
    };
    
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerView}>
            <View style={styles.containerView}>
              <View style={styles.titleContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>회원가입</Text>
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate("LoginPage")} >
                    <Image source = {require('./x_button.png')} style={styles.x_button} />
                  </TouchableOpacity>
                </View>
              </View>
        <ScrollView>
              <View style={{flex:1, flexDirection: "column"}}>
                <Text style={styles.subTitle}>이름</Text>
                <TextInput  placeholderColor="#c4c3cb" style={styles.textInput} />
                <Text style={styles.subTitle}>비밀번호</Text>
                <TextInput  placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
                <Text style={styles.subTitle}>비밀번호 재입력</Text>
                <TextInput  placeholderColor="#c4c3cb" style={styles.textInput} secureTextEntry={true}/>
                <Text style={styles.subTitle}>학교 웹메일</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholderColor="#c4c3cb" style={styles.emailInput}/>
                  <Text style={styles.textMail}>@ seoultech.ac.kr</Text>
                  <Button buttonStyle={styles.button} title="전송" fontSize='10'/>
                </View>
                <Text style={styles.subTitle}>인증번호</Text>
                <View style={styles.inputContainer}>
                  <TextInput placeholderColor="#c4c3cb" style={styles.emailInput}/>
                  <Button buttonStyle={styles.button} title="확인" fontSize='10'></Button>
                </View>
                <Text style={styles.subTitle}>계좌번호</Text>
                <View style={styles.inputContainer}>
                  
                  <View style={{marginVertical:8, marginRight:15,  borderRadius:5, borderWidth:1, borderColor:'#eaeaea', paddingVertical:10, paddingHorizontal:10}}>
                    <RNPickerSelect onValueChange={(value) => console.log(value)} items={data} placeholder={placeholder} textInputProps={{color:"#333333", fontSize:16}} />
                  </View>
                  <TextInput placeholder='-빼고 입력해주세요.' placeholderColor="#c4c3cb" style={styles.accountInput}/>
                </View>
                <View style={styles.inputContainer2}>
                  <Text style={styles.subTitle2}>이용약관</Text>
                  <Text style={styles.subTitle3}>을 읽고 이에 동의합니다.</Text>
                  <CheckBox checked={this.state.checked}  onPress={() => this.setState({checked: !this.state.checked})} />
                </View>
                <Button
                  buttonStyle={styles.signupButton}
                  onPress = {() => this.props.navigation.navigate("SignUpSuccessPage")}
                  title="가입 완료"
                />
                <View style={{height:30}}></View>
              </View>
        </ScrollView>

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
  xbutton(){

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
    fontSize:16,
    marginLeft:16,
    marginTop:5,
    color: '#333333'

  },
  subTitle3:{
    fontSize:16,
    marginLeft:16,
    marginTop:17,
    color: '#333333'

  },
  subTitle2:{
    fontSize:16,
    marginLeft:8,
    marginRight:-10,
    marginTop:20,
    color: '#333333',
    textDecorationLine:'underline',
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
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
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
    marginLeft:15,
    marginRight:15,
    //borderWidth:1,
    //borderColor:'black'
    
  },
  inputContainer2:{
    flexDirection:'row',
    width: width-30,
    alignContent: 'stretch',
    marginLeft:15,
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
    marginLeft:20 , 
    width:45,
    marginTop:5
  },
  accountInput:{
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
    // marginTop: 10,
    // marginBottom: 5
    marginVertical:8
  },
  signupButton:{
    backgroundColor: '#A9A9A9',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },



});
