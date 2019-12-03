import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, Image,TouchableWithoutFeedback, Alert, KeyboardAvoidingView,Dimensions, StyleSheet,  ScrollView,TouchableOpacity} from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import FirebaseSDK, { app } from '../config';
import { HitTestResultTypes } from "expo/build/AR";

const firebase = new FirebaseSDK();
const { height, width } = Dimensions.get("window");

export default class SignUpPage extends Component {

  state={
    checked: false,
    name: null,
    email: null,
    password : null,
    rePassword: null,
    bank: null,
    account: null,
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
                  <TouchableOpacity onPress = {this.onXbuttonPress.bind()}>
                    <Image source = {require('./x_button.png')} style={styles.x_button} />
                  </TouchableOpacity>
                </View>
              </View>
        <ScrollView>
              <View style={{flex:1, flexDirection: "column"}}>
                <Text style={styles.subTitle}>이름</Text>
                <TextInput  
                  placeholderColor="#c4c3cb" 
                  style={styles.textInput} 
                  onChangeText={this.onChangeTextName} 
                  value={this.state.name} 
                />
                <Text style={styles.subTitle}>비밀번호</Text>
                <TextInput  
                  placeholderColor="#c4c3cb" 
                  style={styles.textInput} 
                  secureTextEntry={true}
                  onChangeText={this.onChangeTextPassword} 
                  value={this.state.password} 
                />
                <Text style={styles.subTitle}>비밀번호 재입력</Text>
                <TextInput  
                  placeholderColor="#c4c3cb" 
                  style={styles.textInput} 
                  secureTextEntry={true}
                  onChangeText={this.onChangeTextRepassword} 
                  value={this.state.rePassword} 
                />
                <Text style={styles.subTitle}>학교 웹메일</Text>
                <View style={styles.inputContainer}>
                  <TextInput 
                    placeholderColor="#c4c3cb" 
                    style={styles.emailInput}
                    onChangeText={this.onChangeTextEmail} 
                    value={this.state.email} 
                  />
                  <Text style={styles.textMail}>@ seoultech.ac.kr</Text>
                </View>
                <Text style={styles.subTitle}>계좌번호</Text>
                <View style={styles.inputContainer}>
                  <View style={{marginVertical:8, marginRight:15,  borderRadius:5, borderWidth:1, borderColor:'#eaeaea', paddingVertical:10, paddingHorizontal:10}}>
                    <RNPickerSelect 
                      onValueChange={(bank) => this.setState({bank})} 
                      items={data} 
                      placeholder={placeholder} 
                      textInputProps={{color:"#333333", fontSize:16}}
                      value ={this.state.bank}
                    />
                  </View>
                  <TextInput 
                    placeholder='-빼고 입력해주세요.' 
                    placeholderColor="#c4c3cb" 
                    style={styles.accountInput}
                    onChangeText={this.onChangeTextAccount} 
                    value={this.state.account} 
                  />
                </View>
                <View style={styles.inputContainer2}>
                  <TouchableOpacity onPress={this.onPolicyPress.bind()}>
                    <Text style={styles.subTitle2}>이용약관</Text>
                  </TouchableOpacity>
                  <Text style={styles.subTitle3}>을 읽고 이에 동의합니다.</Text>
                  <CheckBox 
                    checked={this.state.checked}  
                    onPress={() => this.setState({checked: !this.state.checked})} 
                  />
                </View>
                <Button
                  buttonStyle={styles.signupButton}
                  onPress={this.onSignUpPress.bind(this)}
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
  async onSignUpPress() {
    if(this.state.name==null){
      Alert.alert(
        '',
        '이름을 입력하세요 !',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else if(this.state.email==null){
      Alert.alert(
        '',
        '웹메일을 입력하세요 !',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else if(this.state.password==null){
      Alert.alert(
        '',
        '비밀번호를 입력하세요 !',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else if(this.state.rePassword==null){
      Alert.alert(
        '',
        '비밀번호 재입력해주세요 !',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else if(this.state.account==null){
      Alert.alert(
        '',
        '계좌를 입력하세요 !',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else if(this.state.password != this.state.rePassword){
      Alert.alert(
        '',
        '비밀번호를 잘못 입력하셨습니다. !',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else if(this.state.checked != true){
      Alert.alert(
        '',
        '이용약관에 동의해주세요! ',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
    }else{
      try{
        const user ={
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            bank: this.state.bank,
            account: this.state.account,
        };

        await firebase.createAccount(user);
        
        console.log(user.toString());
      }catch({message}){
        console.log('Create account failed. catch error : ' + message);

        //TODO
        // 만약에 같은 address가 있다면 오류 메시지를 뜨게 하는 것까지는 괜찮지만, 
        // 오류를 캐치해서 보여주고 다시 입력하도록 해야한다. 
        // admin이 안돼서 실패 ^.^ 안돼요~ 
      }
      
      this.props.navigation.navigate("SignUpSuccessPage");
    }
  };
  onXbuttonPress=()=>{
    this.props.navigation.navigate("LoginPage");
  };
  onChangeTextName = name => this.setState({ name });
  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextRepassword = rePassword => this.setState({ rePassword });
  onChangeTextAccount = account => this.setState({ account });
  onPolicyPress=()=>{
    Alert.alert(
      '이용약관',
      "1.개인정보 처리방침\n개인정보 처리방침은 회사가 서비스를 제공함에 있어, 개인정보를 어떻게 수집·이용·보관·파기하는지에 대한 정보를 담은 방침을 의미합니다. 개인정보 처리방침은 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 국내 개인정보 보호 법령을 모두 준수하고 있습니다. 이 약관의 정의는 서비스 이용약관을 따릅니다.\n\n 2. 수집하는 개인정보의 항목\n회사는 서비스 제공을 위해 아래 항목 중 최소한의 개인정보를 수집합니다.\n\n2.1 회원가입을 할 경우\n학교, 이메일, 이름, 계좌번호, 광고성 정보 수신 동의 여부\n\n2.2 학교인증을 할 경우\n학교 이메일\n\n※ 각 항목 또는 추가적으로 수집이 필요한 개인정보 및 개인정보를 포함한 자료는 이용자 응대 과정과 서비스 내부 알림 수단 등을 통해 별도로 요청·수집될 수 있습니다.\n※ 서비스 이용 과정에서 기기 정보, 이용 기록, 로그 기록이 자동으로 수집될 수 있습니다. \n\n3. 수집한 개인정보의 이용\n회사는 쾌적한 서비스를 제공하기 위해, 아래의 목적에 한해 개인정보를 이용합니다.\n가입 및 탈퇴 의사 확인, 회원 식별,\n서비스 제공 및 기존·신규 시스템 개발·유지·개선\n인구통계학적 자료 분석을 통한 맞춤형 콘텐츠 및 광고 제공\n\n4. 개인정보의 제3자 제공 및 처리위탁\n회사는 관련법 및 회원의 동의가 없는 한, 회원의 개인정보를 제3자에게 절대 제공하지 않습니다. 단, 회사는 보안성 높은 서비스 제공을 위하여, 신뢰도가 검증된 아래 회사에 개인정보 관련 업무 처리를 위탁할 수 있습니다. 이 경우 회사는 회원에게 위탁을 받는 자와 업무의 내용을 사전에 알리고 동의를 받습니다. 위탁을 받는 자 또는 업무의 내용이 변경될 경우에도 같습니다.\nGoogle Firebase : 서비스 시스템 제공, 데이터 관리 및 보관, 회원 관리, 운영 시스템 지원\n\n5. 수집한 개인정보의 보관 및 파기\n회사는 서비스를 제공하는 동안 개인정보 취급방침 및 관련법에 의거하여 회원의 개인정보를 지속적으로 관리 및 보관합니다. 탈퇴 등으로 인해 개인정보 수집 및 이용목적이 달성될 경우, 수집된 개인정보는 즉시 또는 아래와 같이 일정 기간 이후 파기됩니다.\n가입 및 학교 인증 시 수집된 개인정보 : 탈퇴 즉시\n로그기록 : 최대 3년\n※ 위 항에도 불구하고 법령에 의해 개인정보를 보관할 경우, 해당 법령에서 정한 최대 기간만큼 저장합니다.\n※ 개인정보의 수집 및 이용 목적이 달성되지 않았을 경우, 개인정보 파기 요청은 처리되지 않습니다.\n※ 개인정보 파기는 복구가 불가능한 기술적 방법을 이용하므로, 파기된 개인정보를 복원 할 수 없습니다.\n※ 학교 인증 시, 위조·도용 피해를 방지하기 위해 실명, 학교 이메일을 비식별화하여 1년간 보관합니다.\n※ 부정행위 시, 제재를 위해 IP 주소 및 비식별화한 실명, 학교 이메일 최대 1년 간 보관합니다. 단 시스템 해킹, 학교 인증자료 위·변조, 계정 탈취·판매 등의 중대한 부정행위로 서비스에 피해가 발생할 수 있다고 판단될 경우, 추가 피해 방지를 위해 이를 5년 간 보관합니다.\n※ 비식별화란? 일방향 암호화 처리를 하는 과정을 말합니다. 비식별화된 정보는 복호화가 불가능하며, 누구라도 이 정보로 개인을 식별하거나 유추할 수 없습니다.\n\n6. 정보주체의 권리, 의무 및 행사\n회원은 언제든지 [내 정보]를 통해 자신의 개인정보를 조회하거나 수정, 삭제, 탈퇴를 할 수 있습니다.\n기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.\n개인분쟁조정위원회 (www.1336.or.kr / 1336)\n정보보호마크인증위원회 (www.eprivacy.or.kr / 02-580-0533~4)\n대검찰청 인터넷범죄수사센터 (icic.sppo.go.kr / 02-3480-3600)\n경찰청 사이버테러대응센터 (www.ctrc.go.kr / 02-392-0330)\n\n7. 기타\n이 약관은 2019년 11월 20일에 최신화 되었습니다.",
          [{text: 'OK', onPress: ()=> console.log('OK Pressed')}],
        {cancelable: false}
    )
  };
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
