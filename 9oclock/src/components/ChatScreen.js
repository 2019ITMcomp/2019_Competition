import React from "react";
import {StyleSheet,Platform,KeyboardAvoidingView, SafeAreaView, Keyboard, Text} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import FirebaseSDK from '../config';
import {Header, Left, Right, Icon,Body,Title} from 'native-base';
import DrawerComponent from '../../DrawerComponent';

const Firebase = new FirebaseSDK();
const DC = new DrawerComponent();

export default class ChatScreen extends React.Component {


    constructor(props){
        super(props);
        
        let roomKey = this.props.navigation.state.params.roomKey; 
        let roomName = this.props.navigation.state.params.roomName;
        Firebase.setRoomKey(roomKey);
        
        this.state ={
            user : '',
            messages : [],
            roomKey : roomKey,
            roomName : roomName, //룸 네임 쓰는 부분을 빼버림... 삭제할까 생각.
            
        }
    }


    get user(){ 
        return {
            _id: Firebase.refUid,
            name: Firebase.refUserName
        };
    }

    //마운트를 통해서, 기존에 있던 메시지들을 db에서 꺼내오고, GiftedChat에
    //추가를 하는 식으로 한다. 
    componentDidMount(){
        Firebase.get(message => this.setState(previous => (
            {
            messages: GiftedChat.append(previous.messages,message),
            //messages 에 들어가야 하는 게, text, timestamp, 그리고 user라는 건데.
            
            // user : this.user.name //이게 아니라 state에 user 자체를 넣어야 할 거 같은데
    
        }))
        );
    }

    componentWillUnmount(){
        Firebase.refOff();
    }

    onPressMenu = () =>{
        
        Firebase.refRoom_UserId(this.state.roomKey.split('/')[1], this.state.roomKey.split('/')[0]).on('value', (data)=>{
            let ids = [];
            data.forEach((child)=>{
                ids.push(child.key);
            });
            console.log(ids);
            DC.setUserId(ids);            
            
        })


        this.props.navigation.openDrawer();
        Keyboard.dismiss();
    }

    render(){
        const chat = <GiftedChat 
        messages={this.state.messages} 
        onSend={Firebase.send} 
        user={this.user} 
        showUserAvatar = {true}
        showAvatarForEveryMessage = {true}
        renderUsernameOnMessage = {true}
        />;
        const roomNames=this.state.roomName

        if(Platform.OS === 'android'){
            return(
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30} enabled>
                <Header>
        <Left>
        <Icon name='arrow-round-back' onPress={()=> this.props.navigation.navigate('AppMain')}/>
        </Left>
        <Right>
        <Icon name="menu" onPress={this.onPressMenu}/>
        </Right>
            </Header>
                {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={styles.container}>
        <Header style={{ marginTop: -20, paddingTop:10, height: 65}}>
        
        <Left style={{ flex:1, paddingTop:-10, paddingBottom:-10}}>
        <Icon name='arrow-round-back' onPress={()=> this.props.navigation.navigate('AppMain')}/>
        </Left>
        <Body style={{flex:4, paddingTop:-10, paddingBottom:-10}}>
        <Title>{roomNames}</Title></Body>
        <Right style={{ flex:1, paddingTop:-10, paddingBottom:-10}}>
        <Icon name="menu" onPress={this.onPressMenu}/>
        </Right>
            </Header>
        {chat}</SafeAreaView>;
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
        

    }
});