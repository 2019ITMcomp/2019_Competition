import React, {Component} from 'react';
import {Alert,SafeAreaView, View, Image, Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {Icon} from 'native-base';
import FirebaseSDK, { app } from './src/config';
import Star from 'react-native-star-view';

const Firebase = new FirebaseSDK();

export default class DrawerComponent extends Component{
    constructor(props){
        super(props);

        
        this.state={
           
        }
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
              <Text style={{fontSize:40,fontweight:20}}>
              
              </Text>
            </View>
            <View>
              <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
              ───────────────
              </Text>
              </View>
            <View style={{marginTop:5, marginBottom:5}}>
              <Text style={{marginLeft:10,fontSize:18, marginBottom:5}}>   
                
                  <Text style={{color:'black', marginBottom:5}}>
                    별1
                  </Text>
              </Text>
              <Text style={{marginLeft:10,fontSize:18, marginBottom:5}}>
                소현
                  <Text style={{color:'black' , marginBottom:5}}>
                  별점3
                  </Text>
              </Text> 
              <Text style={{marginLeft:10,fontSize:18, marginBottom:5}}>
                희진
                  <Text style={{color:'black' , marginBottom:5}}>
                    별3
                  </Text>
              </Text>
            </View>
            <View style={{marginBottom:30}}>
            <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
            ───────────────
            </Text>
            </View>
          <View style={{ alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={()=>alert(app.auth().currentUser.displayName)}>
          {/*displayName 다른걸로 설정*/}
          <Text style={{fontSize:23,fontweight:15}}>
          내 계좌번호 가져오기
          </Text>
          </TouchableOpacity>
          </View>
          <View style={{marginTop:30}}>
            <Text style={{color:'rgba(87, 185, 158, 0.48)'}}>
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