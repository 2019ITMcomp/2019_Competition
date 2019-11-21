import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions, TextInput,Image, ScrollView} from "react-native";
import { Button } from 'react-native-elements';




const{height,width} = Dimensions.get("window");

export default class Mainpage extends Component{
    state = {
      userpw : "default",
    };
    
    render(){
      const { isOntf } = this.state;
      
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
          <View style={styles.titlecontainer}>
                <Text style={styles.title}>비밀번호 변경</Text>
          <TouchableOpacity onPress={this.xbutton}  >
          <Image source = {require('./x_button.png')} style = {styles.image}/>
       </TouchableOpacity>
       </View>

        <View> 
        <View style={styles.inputContainer}>
                  <TextInput  placeholderColor="#c4c3cb" style={styles.PwTextinput} placeholder = "기존 비밀번호 입력" textAlignVertical="center"/>
            </View>
            <View style={styles.inputContainer}>
                  <TextInput placeholderColor="#c4c3cb" style={styles.PwTextinput} placeholder = "새로운 비밀번호 입력" textAlignVertical="center"/>
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
                onPress={() => this.changepress()}
                title="취소"
              />
        </View>

        </View>
        </View>
        
        );

    }
    
    changepress(){
      
    }
    
    
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
      info : {
        color : "black",
        fontSize : 20,
        fontWeight : "900",     
        alignSelf : "center"
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
        marginTop : 30,
        borderWidth :1,
        borderColor : "black",
        flex: 1,
        width : width - 20,
        height : 10,
        alignSelf: "center",
        alignContent : "stretch",
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
    
});