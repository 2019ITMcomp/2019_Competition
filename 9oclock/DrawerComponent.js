import React, {Component} from 'react';
import {Alert, Clipboard, SafeAreaView, View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {Icon} from 'native-base';
import Star from 'react-native-star-view';
import FirebaseSDK, { app } from './src/config';
const firebase = new FirebaseSDK();

export default class DrawerComponent extends Component{
    constructor(props){
      
        super(props);

        this.userId = [];
        this.userInfo = [];
        this.state={
            userIds : [],
            user2 : '',
            user3 : '', 

            userName_1 : "원소현",
            userRating_1 : "32",
            count_1 : "7",
            userName_2 : "강의현",
            userRating_2 : "14",
            count_2 : "3",
            userName_3 : "손희진",
            userRating_3 : "22",
            count_3 : "6", 
            currentAccount: "3020525108671",
            currentBank: "농협", 
            //currentAccount: this.props.navigation.state.params.account,
            //currentBank : this.props.navigation.state.params.bank,        
        }
        
    }

    setUserId = async (ids) =>{            
      this.userId = ids;
      let temp = [];
      
      for(let i = 0; i < ids.length; i++){
        temp = await this.setUserInfo(ids[0]); 
        this.userInfo.push(temp)
      }
      console.log(this.userInfo);
      
    };

    setUserInfo = async (userId) =>{ 
      return new Promise(function(resolve, rejects){
        firebase.refUser(userId).on('value', (data)=>{                                     
          resolve(data)
        })                      
      })      

    }



    render(){
 
    
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{height:150, backgroundColor:'#fff',alignItems:'center', justifyContent:'center'}}>
              <Image source={require('./assets/icon.png')} style={{height:120, width:120,
                borderRadius: 60}}
              />
            </View>

            <View style={{marginTop:50,alignItems:'center',justifyContent:'center'}}>

              <Text style={{fontSize:25,fontweight:"200",textAlign:"center"}}>
              대화상대
              </Text>
            </View>
            <View>
              <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
              ───────────────
              </Text>
              </View>
            <View style={{marginTop:5, marginBottom:5, flexDirection:"row",marginHorizontal:10,}}>
              <Text style={{fontSize:18,flex:2,marginLeft:15}}>{this.state.userName_1}</Text> 
              <Star score={this.state.userRating_1/this.state.count_1} style={styles.starStyle} />
              <Text style={{fontSize:18,marginLeft:15,flex:1}}>{(this.state.userRating_1/this.state.count_1).toFixed(1)}</Text>
            </View>
            <View>
              <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
              ───────────────
              </Text>
              </View>
            <View style={{marginTop:5, marginBottom:5, flexDirection:"row",marginHorizontal:10,}}>
              <Text style={{fontSize:18,flex:2,marginLeft:15}}>{this.state.userName_2}</Text> 
              <Star score={this.state.userRating_1/this.state.count_1} style={styles.starStyle} />
              <Text style={{fontSize:18,marginLeft:15,flex:1}}>{(this.state.userRating_2/this.state.count_2).toFixed(1)}</Text>
            </View>
            <View>
              <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
              ───────────────
              </Text>
              </View>
            <View style={{marginTop:5, marginBottom:5, flexDirection:"row",marginHorizontal:10,}}>
              <Text style={{fontSize:18,flex:2,marginLeft:15}}>{this.state.userName_3}</Text> 
              <Star score={this.state.userRating_3/this.state.count_3} style={styles.starStyle} />
              <Text style={{fontSize:18,marginLeft:15,flex:1}}>{(this.state.userRating_3/this.state.count_3).toFixed(1)}</Text>
            </View>

            

            
            <View style={{marginBottom:30}}>
            <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
            ───────────────
            </Text>
            </View>
          <View style={{ alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={()=> alert('계좌번호를 클립보드로 복사하였습니다.')}>
          {/*displayName 다른걸로 설정*/}
          <Text style={{fontSize:23,fontweight:15}}>
          내 계좌번호 가져오기
          </Text>
          </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
            <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
            ───────────────
            </Text>
            </View>
          <TouchableOpacity onPress={()=>Alert.alert('아홉시 오분전','진짜로 나가게?',
          [{text:'방 나가기',onPress:null},{text:'취소',onPress:null}],
          {cancelable:false})}>
        
          <View style={{marginTop:90,alignItems:'center'}} >
          <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
            ───────────────
            </Text>
            <Text style={{fontSize:25}}>
              나가기 <Icon name="arrow-forward"></Icon>
            </Text>
            <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
            ───────────────
            </Text>
          </View>
          </TouchableOpacity>
          <DrawerItems {...this.props}/>
          
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  starStyle : {
    width: 100,
    height: 20,
    flex:3,
  },
});