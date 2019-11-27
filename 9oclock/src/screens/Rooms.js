'use strict';

import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    StatusBar,
    ListView,
    FlatList,
    View
}from 'react-native';
import FirebaseSDK, {db, app} from '../config'; 
import styles from '../components/styles';


const firebase = new FirebaseSDK();

export default class Rooms extends Component{

    constructor(props){
        super(props);
        this.roomsRef = db.ref('Rooms');
        this.userRef = firebase.refUid;
        this.duplicated = false; 
        this.state = {            
            rooms : [],
            newRoom : '',
            Participated : [], // TODO : 유저가 참여하고 있는 방의 _id를 나타냄.
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

    addRoom(){
        if(this.state.newRoom === ''){
            return;
        }
        this.roomsRef.push( { name : this.state.newRoom });
        this.setState({ newRoom : ''});
    }

    checkUserKey(room){ //중복을 확인        
        db.ref('Users/' + this.userRef).on('value', (dataSnapshot) =>{                                
            dataSnapshot.forEach( (child) =>{    
                console.log("Test : ");
                console.log(room.key === child.val().roomKey);            
                if(room.key === child.val().roomKey){
                    this.duplicated = true;
                }
            })            
        })
        
    }

    openChat(room){               
        // 이것을 this.duplicated가 아니라 this.setState를 이용해서 하려고했는데
        // setState 메소드가 불통인지 잘 모르겠으나 안되더라... 나중에 해볼 것
        // 이미 user가 room에 들어가 있을 경우, 다시 들어가는 처리를 방지.
        this.duplicated = false;
        this.checkUserKey(room);        
        if(!this.duplicated){
            firebase.enter(room.key);
        }

        this.props.navigation.navigate('ChatScreen', {
            name : app.auth().currentUser,
            roomKey : room.key,
            roomName : room.name,
        });
    }

    renderRow(item) {
        return (
            <TouchableHighlight style={styles.roomLi}
            underlayColor="#fff"
            onPress={() => this.openChat(item)}
            >
                <Text style={styles.roomLiText}>{item.name}</Text>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <View style={styles.roomsContainer}>
                <StatusBar barStyle="light-content"/>
                <Text style={styles.roomsHeader}>Chatypus</Text>
                <View style={styles.roomsInputContainer}>
                    <TextInput
                    style={styles.roomsInput}
                    placeholder={"New Room Name"}
                    onChangeText={(text) => this.setState({newRoom: text})}
                    value={this.state.newRoom}
                    />
                    <TouchableHighlight style={styles.roomsNewButton}
                    underlayColor="#fff"
                    onPress={() => this.addRoom()}
                    >
                        <Text style={styles.roomsNewButtonText}>Create</Text>
                    </TouchableHighlight>
                </View> 
                <View style={styles.roomsListContainer}>
                    <FlatList
                    data={this.state.rooms}
                    renderItem={({item}) => (this.renderRow(item)
                    )}
                    />
                </View>
            </View>
        );
    }
}

 
