import React, {Component} from 'react';
import {Alert, SafeAreaView, View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import {Icon} from 'native-base';
import Star from 'react-native-star-view';

export default class DrawerComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
          userName_1 : "소현",
          userRating_1 : "32",
          count_1 : "7",
          userName_2 : "의현",
          userRating_2 : "14",
          count_2 : "3",
          userName_3 : "희진",
          userRating_3 : "22",
          count_3 : "6",
        };
              
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
              <Text style={{fontSize:18,flex:1,marginLeft:15}}>{this.state.userName_1}</Text> 
              <Star score={this.state.userRating_1/this.state.count_1} style={styles.starStyle} />
              <Text style={{fontSize:18,marginLeft:15,flex:1}}>{(this.state.userRating_1/this.state.count_1).toFixed(1)}</Text>
            </View>
            <View>
              <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
              ───────────────
              </Text>
              </View>
            <View style={{marginTop:5, marginBottom:5, flexDirection:"row",marginHorizontal:10,}}>
              <Text style={{fontSize:18,flex:1,marginLeft:15}}>{this.state.userName_2}</Text> 
              <Star score={this.state.userRating_1/this.state.count_1} style={styles.starStyle} />
              <Text style={{fontSize:18,marginLeft:15,flex:1}}>{(this.state.userRating_2/this.state.count_2).toFixed(1)}</Text>
            </View>
            <View>
              <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
              ───────────────
              </Text>
              </View>
            <View style={{marginTop:5, marginBottom:5, flexDirection:"row",marginHorizontal:10,}}>
              <Text style={{fontSize:18,flex:1,marginLeft:15}}>{this.state.userName_3}</Text> 
              <Star score={this.state.userRating_3/this.state.count_3} style={styles.starStyle} />
              <Text style={{fontSize:18,marginLeft:15,flex:1}}>{(this.state.userRating_3/this.state.count_3).toFixed(1)}</Text>
            </View>

            

            
            <View style={{marginBottom:30}}>
            <Text style={{color:'rgba(87, 185, 158, 0.48)',textAlign:"center"}}>
            ───────────────
            </Text>
            </View>
          <View style={{ alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={()=>alert('계좌번호다')}>
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
    flex:2,
  },
});