import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableHighlight
}from 'react-native';
import firebaseSDK, {db} from '../config';


export default class Test extends Component{

    

    static navigationOptions ={
        title : 'Test page'
    };

    constructor(props){
            
        super(props);
        this.roomsRef = db.ref('rooms');
        this.state = {
            rooms : [],
            newRoom : ''
        }
    }

    get user(){
        return {
            u_name: this.props.navigation.state.params.name,
            email: this.props.navigation.state.params.email,
            avatar: this.props.navigation.state.params.avatar,
            id: firebaseSDK.uid,
            _id: firebaseSDK.uid
        }
    }

    componentDidMount(){
        this.listenForRooms(this.roomsRef);
    }

    listenForRooms(roomsRef){
        roomsRef.on('value', (dataSnapshot) => {
            var roomsFB = [];
            dataSnapshot.forEach((child) => {
                roomsFB.push({
                    name : child.val().name,
                    key : child.key
                });
            });
            this.setState({ rooms : roomsFB});
        });
    }

    renderRow(item){
        return(
            <TouchableHighlight 
            underlayColor = '#fff'
            //onPress = {() => this.openMessages(item)}
            >
                <Text>{item.name}</Text>                
            </TouchableHighlight>
        )
    }

    render(){

        return(
            <View>
                <FlatList
                data = {this.state.rooms} // 아래의 item은 data에 담은 값을 나타내는 모양이다.
                renderItem = {({item}) => (this.renderRow(item)
                )}
                />
            </View>

        )
    }
}

