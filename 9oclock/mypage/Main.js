import React, {Component} from "react";
import {FlatList, Alert,View,Text, TouchableOpacity, StyleSheet,Platform, TextInput, Dimensions, Image, ScrollView} from "react-native";
import RNPickerSelect from 'react-native-picker-select'
import FirebaseSDK, {db, app} from '../src/config';
import { Button } from 'react-native-elements';
import { withTheme } from "react-native-elements";
import ChangeAccount from "./ChangeAccount";

const{height,width} = Dimensions.get("window");


const firebase = new FirebaseSDK();
export default class Mainpage extends Component{
    
    constructor(props){
        super(props);
        this.user_id = firebase.refUid; // id를 기반으로 찾기. 
        this.userRef = db.ref('Users/' + this.user_id);

        this.state = {
        title:"아홉시\n오분전",
        newRoom : '',
        departure:undefined,
        termination : undefined,
        hour :  undefined,
        minute : undefined,
        };
      }  
    // componentDidMount(){
    //     this.listenForRooms(this.userRef);
        
    // }

    // listenForRooms(userRef){
    //     userRef.on('value', (dataSnapshot) => {
    //         var roomsFB = [];
    //         dataSnapshot.forEach( (child) => {
    //             var roomKey = child.val().roomKey;
                
    //             db.ref('Rooms/' + roomKey).once('value', (data) => {
    //                 roomsFB.push({
    //                     name : data.val().name,
    //                     key : roomKey,
    //                 });
    //                 this.setState({ rooms : roomsFB});
    //             })                
    //         });                        
    //     });
    // }

    openChat(room){                
        
        this.props.navigation.navigate('ChatScreen', {
            name : app.auth().currentUser,
            roomKey : room.key,
            roomName : room.name,
        });
    }

    makeRoom =() => { 

        if(this.state.termination === undefined || this.state.hour === undefined || this.state.minute === undefined){
            alert("빼먹지 말고 모두 입력해라 =ㅅ=");
        }else{
            let today = new Date().getDate()
            let newRoomName = today + "일 "+ this.state.termination + " " + this.state.hour + "시 " + this.state.minute + "분";
            // 1. 룸 내임이 중복된 것이 있는지 확인해야함.
            // 2. 그 방들이 모두 다 찼는지도 확인해야함. isClosed를 통해서
            // db.ref(newRoomName + '/Rooms)이런식으로 들어가야됨. 최상위가 roomname이 되는 것.
            console.log(newRoomName);
            // firebase.refRoom(newRoomName);
        }
    } 

    renderRow(item) {        

        return (
            <TouchableOpacity style={styles.roomLi}
            underlayColor="#fff"
            onPress={() => this.openChat(item)}
            >
                <Text style={styles.taxilist}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    render(){
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
          
       
         <View>
            <Text style={styles.subtitle}>출발 예정 시각</Text>
            </View>
            <View style={styles.meeting}>
            <View>
                <View style={styles.time}>                
                
                <View style={styles.hour}>                    
                    <RNPickerSelect   
                        placeholder={{
                            label : '08시',
                            value : '8',
                            fontSize : 20,
                        }}                   
                        items={[                        
                            { label : '09시', value : '9'},
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
                            label : '00분',
                            value : '0',
                            fontSize : 20,
                        }}         
                        items={[
                            { label : '02분', value : '2'},
                            { label : '04분', value : '4'},{ label : '06분', value : '6'},
                            { label : '08분', value : '8'},{ label : '10분', value : '10'},
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

                <View style={styles.place}>
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
                                departure : value,
                            });                        
                        }}
                        value = {this.state.departure}
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
                            { label : '무궁관', value : '무궁관'},
                            { label : '어의관', value : '어의관'},
                            { label : '다산관', value : '다산관'},
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
                <View>
                <TouchableOpacity onPress = {() => this.makeRoom}>
               <View>
                    <Image source = {require('./glass.png')} style = {styles.glassimage}/>
                </View>
            </TouchableOpacity>
                </View>
                </View>
            </View>

         </View>
         
         <View>

         </View>
            
            

            <View style={{height:100}}></View>
            
            <Button title = "All of rooms"
                color = "blue"
                onPress = {() => this.props.navigation.navigate("Rooms")}>
                </Button>
                

                 
           <View>
           <View style={styles.titlecontainer}>
               <Text style={styles.subtitle}>지난 동승 목록</Text>
               </View>
           </View>
           <ScrollView>
           <View>
                   {/* <FlatList style={styles.taxilist}
                    data={this.state.rooms}
                    renderItem={({item}) => (this.renderRow(item)
                    )}
                    /> */}
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
      subtitle:{
        color : "black",
        fontSize : 20,
        marginLeft : 15,
        fontWeight : "500",
        marginBottom : 7,
        justifyContent:"center",
      },
    meeting:{
        //borderWidth:1,
        marginHorizontal:10,
        borderRadius:5,
        backgroundColor: "rgba(87, 185, 158, 0.48)",
    },
    time:{
        flexDirection:"row",
        marginTop:10,
    },
    hour:{
        paddingLeft:(width/6)/2-10,
        paddingVertical:15,
        //borderWidth:1,
        height: 40,
        width: width/5,
        marginHorizontal: 15,
        marginTop:10,
        backgroundColor:"white",
        borderColor:"#e9e9e9",
        borderRadius: 5,
        
        
    },
    minute:{
        paddingLeft:(width/6)/2-10,
        paddingVertical:15,
        borderWidth:1,
        height: 40,
        width: width/5,
        //marginHorizontal: 15,
        marginTop:10,
        backgroundColor:"white",
        borderColor:"#e9e9e9",
        borderRadius: 5,
        
        
    },
    place:{
        flexDirection:"row",
        marginBottom:20,

    },
    departure:{
        paddingLeft:(width/3)/2-22,
        paddingVertical:15,
        borderWidth:1,
        height: 40,
        width: width/3,
        marginHorizontal: 15,
        marginTop:10,
        backgroundColor:"white",
        borderColor:"#e9e9e9",
        borderRadius: 5,
    },
    arrival:{
        paddingLeft:(width/3)/2-22,
        paddingVertical:15,
        borderWidth:1,
        height: 40,
        width: width/3,
        marginHorizontal: 15,
        marginTop:10,
        backgroundColor:"white",
        borderColor:"#e9e9e9",
        borderRadius: 5,
    },
    glassimage:{
        alignSelf:"flex-end",
        marginTop: 13,
        width : 35,
        height : 35,
        resizeMode: 'stretch',
    },
    taxilist:{
        marginLeft:15,
        fontSize:20,
    },
});