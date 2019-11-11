import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet,Platform, TextInput, Dimensions, Image} from "react-native";
const{height,width} = Dimensions.get("window");

export default class Mainpage extends Component{
    state = {
      trial : true,
    };
    render(){
        return(
        <View style={styles.container}>        
          <View style = {styles.input} >
           <Text style = {styles.info}>  회원 정보                                 </Text>
           <TouchableOpacity onPress={this.xbutton}>
          <Image source = {require('./x_button.png')} style = {styles.image}/>
       </TouchableOpacity>
           
          </View>
          
         
         <View style = {styles.title}>
            <View style = {styles.circlename}>
                <Text style = {styles.username}>희진</Text>
            </View>
            </View>
        </View>
        );

    }
    xbutton = () => {
      //페이지 이동 , 일단은 누르는 버튼으로 만들어 놨음.
      this.setState(prevState =>{ 
        return{
          trial : false,
        }
      }); 
    }
    
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      },
      info : {
        color : "black",
        fontSize : 30,
        fontWeight : "900",     
        alignSelf : "center"
      },      
      input:{
        marginTop: 50,
        marginHorizontal : 10,
        padding: 5,
        borderBottomColor:"#bbb",
        borderBottomWidth: 2,
        alignSelf : "flex-start",
        flexDirection:"row",
        justifyContent:"space-between"
    
      },
      image : {
        alignContent : "flex-end",
        width : 60,
        height : 60,
      },
      title : {
        color : "black",
        fontSize : 30,
        marginTop : 30,
        fontWeight : "200",
        marginBottom : 30
      },
      circlename:{
        alignItems : "center",
        justifyContent : "center",
        backgroundColor: "#a9a9a9",
        width : 120,
        height : 120,
        borderRadius : 150
      },
      username : {
        fontSize : 30,        
      }
});