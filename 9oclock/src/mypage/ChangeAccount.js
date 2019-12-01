import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions,Alert, TextInput,Image, ScrollView} from "react-native";
import { Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import FirebaseSDK, { app } from '../config';


const{height,width} = Dimensions.get("window");

export default class ChangeAccount extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      currentAccount: this.props.navigation.state.params.account,
      currentBank : this.props.navigation.state.params.bank,
      newBank: null,
      newAccount:null,      

    }
  }  
  render(){
        let data=[{label:'농협', value: '농협'},{label:'하나', value: '하나'},{label:'KB국민', value: 'KB국민'},{label:'신한', value: '신한'},{label:'우리', value:'우리'}, {label:'외환', value:'외환'},{label:'우체국', value:'우체국'},{label:'수협', value:'수협'},{label:'신협', value:'신협'},{label:'카카오뱅크', value:'카카오뱅크'},{label:'저축은행', value:'저축은행'},{label:'기업',value:'기업'}]
        const placeholder = {
          label: '은행명',
          value: null,
          fontSize:25,
        };
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
          <View style={styles.titlecontainer}>
                <Text style={styles.title}>계좌번호 변경</Text>
          <TouchableOpacity onPress = {() => this.props.navigation.navigate("Mypagemain")}>
          <Image source = {require('./x_button.png')} style = {styles.image}/>
       </TouchableOpacity>
       </View>

        <View>
        <Text style={styles.subTitle}>기존 계좌번호</Text>
          <View style={{flexDirection:"row", marginHorizontal:15,}}>
              <Text style={{marginVertical:8, marginRight:15,  borderRadius:5, borderWidth:1, borderColor:'#eaeaea', paddingVertical:11, paddingHorizontal:10, fontSize: 16}}>{this.state.currentBank}</Text>
              <View style={styles.accountInput}>
                <Text>{this.state.currentAccount}</Text>
              </View>
          </View>
          <Text style={styles.subTitle}>신규 계좌번호</Text>
          <View style={styles.inputContainer}>
            <View style={{marginVertical:8, marginRight:15,  borderRadius:5, borderWidth:1, borderColor:'#eaeaea', paddingVertical:10, paddingHorizontal:10}}>
              <RNPickerSelect 
                onValueChange={(newBank) => this.setState({newBank})} 
                items={data} 
                placeholder={placeholder} 
                textInputProps={{color:"#333333", fontSize:16}}
                value ={this.state.newBank}
              />
            </View>
            <TextInput 
              placeholder='-빼고 입력해주세요.' 
              placeholderColor="#c4c3cb" 
              style={styles.accountInput}
              onChangeText={this.onChangeTextAccount} 
              value={this.state.newAccount} 
            />
          </View>

        </View>

        <View style={styles.buttoncontainer}>
          <Button
                buttonStyle={styles.changebutton}
                onPress={() => this.changepress()}
                title="변경"
              />
              <Button
                buttonStyle={styles.changebutton}
                onPress={() => this.cancelpress()}
                title="취소"
              />
        </View>
        </View>
        </View>
        
        );

    }
    
    changepress(){
      //계좌 변경
      Alert.alert(
        '',
        '변경되었습니다. 사실은 안했지롱!',
        [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
        ],
        {cancelable: false}
      )
      
    }
    cancelpress(){
      this.props.navigation.navigate("Mypagemain")
    }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlecontainer:{
    borderBottomColor:'#A9A9A9', 
    borderBottomWidth: 2,
    marginBottom:10, 
    marginHorizontal:10,
    paddingBottom:7,
    flexDirection:"row",
    // borderWidth:1,
    // borderColor: "black"
  },
  buttoncontainer:{
    alignContent : "center",
    marginTop : 30,
    //borderWidth :1,
    borderColor : "black",
    justifyContent: "center",
    width : width - 20,
    height : 300,
    alignSelf: "center",       
    flexDirection : "row"
  },
  image : {        
    flex:1,
    alignSelf:"center",
    marginTop: 28,
    width : 60,
    height : 60,
    marginBottom: -10,
  },

  title : {
    color : "black",
    fontSize : 30,
    marginTop : 45,
    fontWeight : "900",
    marginBottom : 7,
    marginLeft:15,
    alignSelf : "flex-start",
    flex:1,
    marginBottom: 0
  },
  inputContainer:{
    flexDirection:'row',
    width: width-30,
    alignContent: 'stretch',
    marginLeft:15,
    marginRight:15,
  },
  PwTextinput:{
    height: 43,
    flex:1,
    fontSize: 14,
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#eaeaea',
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    textAlign : "center",
  },
  changebutton: {    
    backgroundColor: '#a9a9a9',
    borderRadius: 5,
    //borderWidth:1,        
    width : 100,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    flexDirection : "row"
  },
  cancelbutton: {
    backgroundColor: '#a9a9a9',
    borderRadius: 5,
    //borderWidth:1,        
    width : 100,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    flexDirection : "row"
  },
  beforecontainer:{
    borderColor : "black",
    borderWidth : 1,
    width: width - 30,
    height : 30,
    fontSize: 20,
    fontWeight : "400",
    flexDirection : "row",
    justifyContent: "center",
    alignSelf : "center",
    
  },
  beforeaccount:{
    height: 43,
    //flex:1,
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
    marginHorizontal:15,
    marginVertical:8,
    justifyContent: 'center',
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
    marginVertical:8,
    justifyContent:'center',
    
  },
  subTitle:{
    fontSize:16,
    marginLeft:16,
    marginTop:5,
    color: '#333333'

  },
});