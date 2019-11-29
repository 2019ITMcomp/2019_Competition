import React from "react";
import {StyleSheet,Platform,KeyboardAvoidingView, SafeAreaView, Keyboard} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import FirebaseSDK, {db} from '../config';
import {Header, Left, Right, Icon} from 'native-base';

const Firebase = new FirebaseSDK();
export default class ChatScreen extends React.Component {

    constructor(props){
        super(props);
        
        var rKey = this.props.navigation.state.params.roomKey; 
        Firebase.setRoomKey(rKey);
        
        this.state ={
            user : '',
            messages : [],
            roomKey : rKey,
        }
    }


    get user(){ 
        return {
            _id: Firebase.refUid,
            _name: Firebase.refUserName
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

    render(){
        const chat = <GiftedChat 
        messages={this.state.messages} 
        onSend={Firebase.send} 
        user={this.user} 
        />;

        if(Platform.OS === 'android'){
            return(
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30} enabled>
                <Header>
        <Left>
        <Icon name='arrow-round-back' onPress={()=> this.props.navigation.navigate('AppMain')}/>
        </Left>
        <Right>
        <Icon name="menu" onPress={()=> {this.props.navigation.openDrawer();Keyboard.dismiss()}}/>
        </Right>
            </Header>
                {chat}
                </KeyboardAvoidingView>
            );
        }

        return <SafeAreaView style={styles.container}>
        <Header>
        <Left>
        <Icon name='arrow-round-back' onPress={()=> this.props.navigation.navigate('AppMain')}/>
        </Left>
        <Right>
        <Icon name="menu" onPress={()=> {this.props.navigation.openDrawer();Keyboard.dismiss()}}/>
        </Right>
            </Header>
        {chat}</SafeAreaView>;
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        

    }
})