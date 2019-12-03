import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions,Alert, TextInput,Image, ScrollView} from "react-native";
import { Button } from 'react-native-elements';
import { app } from "../config";

//TODO 비밀번호 변경에서, 비밀번호를 입력받아서, 기존비밀번호랑 비교해서 확인작업을 통해서 이메일을 발송해야함.

const{height,width} = Dimensions.get("window");

export default class ChangePw extends Component{
    state = {
      password : null,
      content: false,
    };
    
    render(){
      const { isOntf } = this.state;
      
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>비밀번호 변경</Text>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate("Mypagemain")}>
              <Image source = {require('./x_button.png')} style = {styles.image}/>
            </TouchableOpacity>
          </View>

          <View> 
            <View style={styles.inputContainer}>
                    <TextInput  
                      placeholderColor="#c4c3cb" 
                      style={styles.PwTextinput} 
                      placeholder = "기존 비밀번호 입력" 
                      textAlignVertical="center"
                      secureTextEntry={true}
                      onChangeText={(text)=> this.setState({password: text})}
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
                  buttonStyle={styles.cancelbutton}
                  onPress={() => this.cancelpress()}
                  title="취소"
                />
          </View>
          
          {this.state.content ? ( <View><Text style={styles.text}>이메일을 확인해주세요! </Text></View> ) : null }   

        </View>
        </View>
        
        );

    }
    
    changepress(){
      // db에 입력받은 데이터 전송하는 코드 있어야함. 
      //기존 비번 일치여부, 새로운 비번 같은지 확인하는 코드 필요.
      try{
        if(this.state.password !=null){
          app.auth().sendPasswordResetEmail(app.auth().currentUser.email);
          this.setState(previousState => ({content: !previousState.content}))
        }else{
          Alert.alert(
            '',
            '비밀번호를 입력하세요 !',
            [{text: 'OK', onPress: ()=> console.log('OK Pressed')},
            ],
            {cancelable: false}
          )
        }
      }catch(error){
        console.log(error.toString());
        console.log('ㅅㅂ 안됨');
      }
    }

    cancelpress(){
      // 변화 없이 Mypage로 돌아감
      this.props.navigation.navigate("Mypagemain");
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
        height : 70,
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
      text:{
        fontSize:20,
        marginLeft:10,
        marginTop:20,
        marginBottom:15,
        color: '#333333',
        textAlign:'center'
      },
      changebutton: {
        
        backgroundColor: '#a9a9a9',
        borderRadius: 5,
        
        width : 100,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        flexDirection : "row"
      },
      cancelbutton: {
        backgroundColor: '#a9a9a9',
        borderRadius: 5,
        
        width : 100,
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        flexDirection : "row"
      },
    
});