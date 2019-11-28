import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, TextInput} from "react-native";
import { Button } from 'react-native-elements';
import DialogInput from 'react-native-dialog-input';



const{height,width} = Dimensions.get("window");

export default class AccountDrop extends Component{

    constructor(props){
      super(props);
      this.state = {
        isAlertVisible:false,
        dropmsg: "회원탈퇴에 동의합니다",
      };
    }  
    
    


    render(){
      
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>회원 탈퇴</Text>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate("Mypagemain")}>
              <Image source = {require('./x_button.png')} style = {styles.image}/>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.rules}>회원 탈퇴시, 모든 정보가 삭제되며 복구가 불가능 합니다.</Text>

            <View style={styles.inputContainer}>
            <Text style={styles.presentpw}>현재 비밀번호 : </Text>
              
                      <TextInput  placeholderColor="#c4c3cb" style={styles.PwTextinput} placeholder = "비밀번호 입력" textAlignVertical="center"/> 
                </View>
                
          </View>

          <View style={styles.buttoncontainer}>
            <Button
                  buttonStyle={styles.changebutton}
                  onPress={()=>this.setState({isAlertVisible:true})}
                  title="탈퇴하기"
                />
                
          </View>

          <View>
            <DialogInput isDialogVisible={this.state.isAlertVisible}
              title={"아래와 똑같이 입력해주세요."}
              message={this.state.dropmsg}
              hintInput ={""}
              dialogStyle={"White"}
              submitInput={ (inputText) => {this.submit(inputText)} }
              closeDialog={ () => {this.closefunction()}}>
            </DialogInput>
          </View>

        </View>
        </View>
        
        );

    }
    closefunction(){
      this.setState({dropmsg:"회원탈퇴에 동의합니다"})
      this.setState({isAlertVisible:false});
    }

    submit(inputText){
      console.log(inputText);
      this.setState({isAlertVisible:false});

      if(inputText == this.state.dropmsg){
      this.props.navigation.navigate("Mypagemain");
    }else{
      this.setState({dropmsg:"틀렸습니다. 다시 입력해주세요. \n 회원탈퇴에 동의합니다"})
      this.setState({isAlertVisible:true});
    }
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
        
      },
      buttoncontainer:{
        alignContent : "center",
        marginTop : 30,
        borderWidth :1,
        borderColor : "black",
        justifyContent: "center",
        width : width - 20,
        height : 300,
        alignItems: "center",       
        flexDirection : "row",
        alignSelf:"center",

        
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
        //borderWidth:1,
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
      rules:{
        fontSize:15,
        marginLeft: 25,
        marginRight:10,
        marginTop:15,
        marginBottom:15,
      },
      presentpw:{
        fontSize:15,
        marginRight:10,
        marginTop:30,
      },
});