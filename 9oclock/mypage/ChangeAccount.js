import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions, TextInput,Image, ScrollView} from "react-native";
import { Button } from 'react-native-elements';




const{height,width} = Dimensions.get("window");

export default class ChangeAccount extends Component{
    
  constructor(props){
    super(props);
    this.state = {
      useraccount : "농협은행, 010-0101010-102",

    }
  }  

  
  state = {
      
    };
    
    render(){
      
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
            <View style={styles.beforecontainer}>
                <Text>기존 계좌번호 : </Text>
                <Text>{this.state.useraccount}</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholderColor="#c4c3cb" style={styles.PwTextinput} placeholder = "은행 명" textAlignVertical="center"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholderColor="#c4c3cb" style={styles.PwTextinput} placeholder = "새로운 비밀번호 확인" textAlignVertical="center"/>
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
      this.setState({useraccount : "input 받은거 넣어줘야함", });
    }
    cancelpress(){

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
    borderWidth:1,        
    width : 100,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    flexDirection : "row"
  },
  cancelbutton: {
    backgroundColor: '#a9a9a9',
    borderRadius: 5,
    borderWidth:1,        
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
    flex : 1
  }
});