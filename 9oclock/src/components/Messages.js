import React, {Component} from 'react';
import {
    StatusBar,
    View
}from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import FirebaseSDK, { db } from '../config';
// import styles from '../components/styles';

export default class Messages extends Component{

    constructor(props){
        super(props);
        var roomKey = this.props.navigation.state.params.roomKey;
        this.messagesRef = db.ref('messages/${roomKey}');
        this.state ={
            user : '',
            messages : []
        }
    }
    // 아래의 코드가 어떻게 쓰이는 지를 이해해야지 응용해서 navigation stack을 이용해서 사용할텐딩...
    static navigationOptions = ({ navigation }) => ({
        title : navigation.state.params.roomName,

    });

    componentDidMount(){
        this.setState({ user : FirebaseSDK.auth().currentUser});
        this.listenForMessages(this.messageRef);
    }

    listenForMessages(messageRef){
        messageRef.on('value', (dataSnapshot) =>{
            var messagesFB = [];
            dataSnapshot.forEach((child) => {
                messagesFB = [({
                    _id : child.key,
                    text : child.val().text,
                    createAt : child.avl().createAt,
                    user :{
                        _id : child.val().user._id,
                        name : child.val().user.name
                    }
                }), ...messagesFB];
            });
            this.setState({messages : messagesFB });
        });
    }

    addMessage(message = {}) {
        var message = message[0]
        this.messagesRef.push({
            text: message.text,
            createdAt: Date.now(),
            user: {
                _id: message.user._id,
                name: message.user.name
            }
        })
    }

    render(){
        return(
            <View style = {{flex : 1}}>
                <StatusBar barStyle = "light-content"/>
                <GiftedChat
                messages = {this.state.messages}
                onSend = {this.addMessages.bind(this)}
                user = {{
                    _id : this.state.user.includes,
                    name : this.state.user.email,
                }}
                />
            </View>
        );
    }
}