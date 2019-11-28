import React, {Component} from "react";
import {Alert,View,Text, TouchableOpacity, StyleSheet,Platform, TextInput, Dimensions, Image, ScrollView} from "react-native";

import RNPickerSelect from 'react-native-picker-select'
import { withTheme } from "react-native-elements";

const{height,width} = Dimensions.get("window");
const { rating } = 3.5;
export default class Mainpage extends Component{
    
    constructor(props){
        super(props);
        this.state = {
        title:"아홉시\n오분전"
        };
      }  
      
    render(){
      const { isOntf } = this.state;
        return(

        <View style={styles.container}>        
        <View style={styles.container}>
          
        <View style={styles.titlecontainer}>
            <Text style={styles.title}>{this.state.title}</Text>
            <TouchableOpacity onPress = {() => this.props.navigation.navigate("Mypagemain")}>
               <View style={styles.userimg}>
                    <Image source = {require('./user.png')} style = {styles.image}/>
                </View>
            </TouchableOpacity>
       </View>          
          
       <ScrollView>
         <View style={styles.meeting}>
            <Text>출발 예정 시각</Text>
            <View>
                <View style={styles.departure}>
                    <RNPickerSelect
                        placeholder={{
                            label : '출발지',
                            value : null,
                            fontSize : 25,
                        }}  
                        items={[                        
                            { label : '공릉역', value : '공릉역'},
                            { label : '석계역', value : '석계역'},
                            { label : '철길CU', value : '철길CU'},
                        ]} 
                        onValueChange={(value) => {
                            this.setState({
                                termination : value,
                            });                        
                        }}
                        value = {this.state.termination}
                        textInputProps={{color:"#333333", fontSize:16}}                     
                    />
                </View>
            
                <View style={styles.arrival}>
                    <RNPickerSelect
                        placeholder={{
                            label : '도착지',
                            value : null,
                            fontSize : 25,
                        }}  
                        items={[                        
                            { label : '기숙사행', value : '기숙사행'},
                            { label : '무궁관행', value : '무궁관행'},
                        ]} 
                        onValueChange={(value) => {
                            this.setState({
                                termination : value,
                            });                        
                        }}
                        value = {this.state.termination}
                        textInputProps={{color:"#333333", fontSize:16}}                     
                    />
                </View>
                <View style={styles.hour}>
                    <RNPickerSelect   
                        placeholder={{
                            label : '시',
                            value : null,
                            fontSize : 25,
                        }}                   
                        items={[                        
                            { label : '8시', value : '8'},
                            { label : '9시', value : '9'},
                            { label : '10시', value : '10'},
                            { label : '11시', value : '11'},
                            { label : '12시', value : '12'},
                        ]} 
                        onValueChange={(value) => {
                            this.setState({
                                hour: value,
                            });
                        }}
                        value = {this.state.hour}
                        textInputProps={{color:"#333333", fontSize:16}}                                    
                    />
                </View>
                <View style={styles.minute}>
                    <RNPickerSelect 
                        placeholder={{
                            label : '분',
                            value : null,
                            fontSize : 25,
                        }}         
                        items={[
                            { label : '0분', value : '0'},{ label : '2분', value : '2'},
                            { label : '4분', value : '4'},{ label : '6분', value : '6'},
                            { label : '8분', value : '8'},{ label : '10분', value : '10'},
                            { label : '12분', value : '12'},{ label : '14분', value : '14'},
                            { label : '16분', value : '16'},{ label : '18분', value : '18'},
                            { label : '20분', value : '20'},{ label : '22분', value : '22'},
                            { label : '24분', value : '24'},{ label : '26분', value : '26'},
                            { label : '28분', value : '28'},{ label : '30분', value : '30'},
                            { label : '32분', value : '32'},{ label : '34분', value : '34'},
                            { label : '36분', value : '36'},{ label : '38분', value : '38'},
                            { label : '40분', value : '40'},{ label : '42분', value : '42'},
                            { label : '44분', value : '44'},{ label : '46분', value : '46'},
                            { label : '48분', value : '48'},{ label : '50분', value : '50'},
                            { label : '52분', value : '52'},{ label : '54분', value : '54'},
                            { label : '56분', value : '56'},{ label : '58분', value : '58'},
                        ]}          
                        onValueChange={(value) => {
                            this.setState({
                                minute: value,
                            });
                        }}           
                        textInputProps={{color:"#333333", fontSize:16}} 
                        value = {this.state.minute}                    
                    />  
                </View>
            </View>

         </View>
         
         <View>

         </View>
            
            

      
       
       </ScrollView>
        </View>
        </View>
        
        );

    }
  
    
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
      },
    titlecontainer:{
        // 타이틀 박스
        borderBottomColor:'#A9A9A9', 
        borderBottomWidth: 2,
        marginBottom:10, 
        marginHorizontal:10,
        paddingBottom:7,
        flexDirection:"row",
        //borderWidth:1,        
      },
    userimg:{
        width: width/11,
        flex:1,
        paddingTop: 16,
      },
    title : {    
        flex:3,
        color : "black",
        fontSize : 20,
        marginTop : 45,
        fontWeight : "500",
        marginBottom : 7,
        marginLeft: width/2-36,
        alignSelf : "center",
        justifyContent:"center",
      },
    image : {
        // 이미지 세팅
        alignSelf:"flex-end",
        marginTop: 28,
        width : 45,
        height : 45,
        resizeMode: 'stretch',
        flexDirection:"row",
      },
    meeting:{
        borderWidth:1,
        marginHorizontal:10,
        backgroundColor: "rgba(87, 185, 158, 0.7)",
    },
    departure:{
        borderWidth:1,
        marginTop:10,
        backgroundColor:"white"
    },
    arrival:{
        borderWidth:1,
        marginTop:10,
    },
    hour:{
        borderWidth:1,
        marginTop:10,
    },
    minute:{
        borderWidth:1,
        marginTop:10,
    }
      
});