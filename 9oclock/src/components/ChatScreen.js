import React from "react";
import {Platform,KeyboardAvoidingView, SafeAreaView} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import FirebaseSDK, {db} from '../config';

const Firebase = new FirebaseSDK();

export default class ChatScreen extends React.Component {
    
    constructor(props){
        super(props);
        var roomKey = this.props.navigation.state.params.roomKey;
        // this.messagesRef = db.ref(`messages/${roomKey}`);
        // 지금 당장은 쓰지 않는 코드
        this.state ={
            user : '',
            messages : []
        }
    }
    
    get user(){ 
        return {
            _id: Firebase.refUid,
            // name: this.props.navigation.state.params.name
        };
    }

    //마운트를 통해서, 기존에 있던 메시지들을 db에서 꺼내오고, GiftedChat에
    //추가를 하는 식으로 한다. 
    componentDidMount(){
        
        Firebase.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages,message),
            //messages 에 들어가야 하는 게, text, timestamp, 그리고 user라는 건데.
            
            // user : this.user.name //이게 아니라 state에 user 자체를 넣어야 할 거 같은데
    
        }))
        );
    }

    componentWillUnmount(){
        Firebase.refOff();
    }

    render(){
        const chat = <GiftedChat 
        messages={this.state.messages} 
        onSend={Firebase.send} 
        user={this.user} 
        />;

        if(Platform.OS === 'android'){
            return(
                <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={{ flex : 1}}>{chat}</SafeAreaView>;
    }



}