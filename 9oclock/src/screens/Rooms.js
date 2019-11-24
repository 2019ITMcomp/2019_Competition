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
import {db, app} from '../config'; 
import styles from '../components/styles';

export default class Rooms extends Component{

    constructor(props){
        super(props);
        this.roomsRef = db.ref('rooms');
        this.state = {
            rooms : [],
            newRoom : ''
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

    openMessages(room){        
        console.log("Test working");
        // this.props.navigation.navigate('Messages', {roomKey : room.key, roomName : room.name});
        this.props.navigation.navigate('ChatScreen', {name : app.auth().currentUser });
    }

    renderRow(item) {
        return (
            <TouchableHighlight style={styles.roomLi}
            underlayColor="#fff"
            onPress={() => this.openMessages(item)}
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

 
