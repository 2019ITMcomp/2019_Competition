import React, { Component } from 'react';
import { 
    View, 
    Text,
    Button,
    TextInput,
    TouchableHighlight,
    StatusBar,
    FlatList,
} from 'react-native';
import {db, app} from '../config';
import styles from '../components/styles';

//TODO
//유저의 정보를 받아와서 그 유저의 방들을 목록화 시켜주는 것을 해야함.

export default class SelectRoom extends Component{

    constructor(props){
        super(props);
        this.roomsRef = db.ref('Rooms');
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
            onPress={() => this.openMessages(item)}
            >
                <Text style={styles.roomLiText}>{item.name}</Text>
            </TouchableHighlight>
        )
    }

    render(){
        return(
            <View style={styles.roomsContainer}>

                <Button title = "All of rooms"
                color = "blue"
                onPress = {() => this.props.navigation.navigate("Rooms")}>
                </Button>

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