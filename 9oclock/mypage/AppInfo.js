import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView} from "react-native";





const{height,width} = Dimensions.get("window");

export default class Appinfo extends Component{
    state = {
      trial : true,
      isOntf : true,
    };
    
    render(){
      const { isOntf } = this.state;
      
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>앱 정보</Text>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate("Mypagemain")}>
              <Image source = {require('./x_button.png')} style = {styles.image}/>
            </TouchableOpacity>
          </View>

          <View>
           <Text style={styles.rules}>이용 약관 및 이용 규칙</Text>
           <View style={styles.textbox}>
               <ScrollView> 
                   <Text>이용약관입니다. 내용을 채워 넣어야 해요</Text>
               </ScrollView>
           </View>
           </View>   
          
       
        </View>
        </View>
        
        );

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
      rules:{
        fontSize:20,
        marginLeft: 25,
      },
      textbox:{
        backgroundColor : "#e9e9e9",
        marginTop: 20,
        width : width-30,
        height: height - height/4,
        alignSelf: "center"
      }
});