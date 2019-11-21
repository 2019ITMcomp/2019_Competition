import React, {Component} from "react";
import {View,Text, TouchableOpacity, StyleSheet,Platform, TextInput, Dimensions, Image, ScrollView} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';
import ToggleSwitch from 'toggle-switch-react-native'


const{height,width} = Dimensions.get("window");
const { rating } = 3.5;
export default class Mainpage extends Component{
    state = {
      trial : true,
      isOntf : true,
    };
    onToggle(isOn) {
      console.log("Changed to " + isOn);
    }
    render(){
      const { isOntf } = this.state;
        return(
          
        <View style={styles.container}>        
        <View style={styles.container}>
          
           <View style={styles.titlecontainer}>
                <Text style={styles.title}>회원정보</Text>
           <TouchableOpacity onPress={this.xbutton}  >
          <Image source = {require('./x_button.png')} style = {styles.image}/>
       </TouchableOpacity>
       </View>
          
          
       <ScrollView>
         <View style = {{alignItems:"center" , marginTop: 30 }}>
            <View style = {styles.circlename}>
                <Text style = {styles.username}>희진</Text>
            </View>
            <Rating
              type="custom"
              fractions={1} // 소수 점에 맞춰
              startingValue={4.6}
              showReadOnlyText = {false}
              readonly
              showRating
              imageSize={40}
              ratingTextColor="black"
              onFinishRating={this.ratingCompleted} 
              style={{ paddingVertical: 10 }}
            />
            
            </View>
            
            <View style={styles.subcontainer}>
            <Text> </Text>
              </View>
        <View style={styles.subcontainer}>
        <TouchableOpacity 
        onPress = {() => this.props.navigation.navigate("AppInfo")}>
          <Text style={styles.otherlink}>앱 정보</Text>
       </TouchableOpacity>
       </View>

       <View style={styles.subcontainer}>
       <TouchableOpacity 
       onPress = {() => this.props.navigation.navigate("ChangePw")}>
          <Text style={styles.otherlink}>비밀번호 변경</Text>
       </TouchableOpacity>
       </View>

       <View style={styles.subcontainer}>
       <TouchableOpacity onPress={this.accountchange}>
          <Text style={styles.otherlink}>계좌번호 변경</Text>
       </TouchableOpacity>
       </View>

       <View style={styles.subcontainer}>
       <TouchableOpacity onPress={this.logout}>
          <Text style={styles.otherlink}>로그아웃</Text>
       </TouchableOpacity>
       </View>

       <View style={styles.subcontainer}>
       <TouchableOpacity onPress={this.accountdrop}>
          <Text style={styles.otherlink}>회원 탈퇴</Text>
       </TouchableOpacity>
       </View>
      
       <View style={styles.subcontainer}>
       <TouchableOpacity onPress={this.appnoti}>
          <Text style={styles.otherlink}>앱 알림</Text>
       </TouchableOpacity>
       <ToggleSwitch
        style={styles.togglebtn}
        isOn={isOntf}
        onColor="green"
        offColor="#a9a9a9"
        size="large"
        onToggle={isOntf => {this.setState({isOntf}); this.onToggle(isOntf)}}

      />
        </View>
       </ScrollView>
        </View>
        </View>
        
        );

    }
    
    appinfo = () =>{
      this.setState(prevState =>{ 
        return{
          trial : false,
        }
      }); 
    }
    pwchange = () =>{
      this.setState(prevState =>{ 
        return{
          trial : false,
        }
      }); 
    }
    accontchange = () =>{
      this.setState(prevState =>{   
        return{
          trial : false,
        }
      }); 
    }
    logout = () =>{
      this.setState(prevState =>{ 
        return{
          trial : false,
        }
      }); 
    }
    accountdrop = () =>{
      this.setState(prevState =>{ 
        return{
          trial : false,
        }
      }); 
    }
    appnoti = () =>{
      this.setState(prevState =>{ 
        return{
          trial : false,
        }
      }); 
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
      },
      info : {
        color : "black",
        fontSize : 20,
        fontWeight : "900",     
        alignSelf : "center"
      },
      otherpages : {
        alignSelf : "flex-start",
        marginHorizontal : 20,
        padding: 5,
        borderBottomColor:"#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf : "flex-start",
        justifyContent:"space-between",
        
      },
      subcontainer:{
        borderBottomColor:'#A9A9A9', 
        borderBottomWidth: 1,
        marginBottom:10, 
        marginHorizontal:10,
        paddingBottom:7,
        flexDirection:"row",
        flex: 1
        // borderWidth:1,
        // borderColor: "black"
      },
      otherlink : {
        fontSize : 15,
        marginLeft : 5,
        marginTop : 10,
        marginBottom : 10,
        flex : 1,
        flexDirection:"row",
        alignSelf:"flex-start"
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
      },
      togglebtn:{
        flex:1,
        flexDirection:"row",
        alignSelf:"center",
        
      }
});