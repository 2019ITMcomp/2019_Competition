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
import FirebaseSDK, {db, app} from '../config';
import styles from '../components/styles';

//TODO
//유저의 정보를 받아와서 그 유저의 방들을 목록화 시켜주는 것을 해야함. -- 완료 
const firebase = new FirebaseSDK();

export default class SelectRoom extends Component{

    constructor(props){
        super(props);
        this.user_id = firebase.refUid; // id를 기반으로 찾기. 
        this.userRef = db.ref('Users/' + this.user_id);
                
        this.state = {
            rooms : [],
            newRoom : ''
        }
    }

    componentDidMount(){
        this.listenForRooms(this.userRef);
        
    }

    listenForRooms(userRef){
        userRef.on('value', (dataSnapshot) => {
            var roomsFB = [];
            dataSnapshot.forEach( (child) => {
                var roomKey = child.val().roomKey;
                
                db.ref('Rooms/' + roomKey).once('value', (data) => {
                    roomsFB.push({
                        name : data.val().name,
                        key : roomKey,
                    });
                    this.setState({ rooms : roomsFB});
                })                

            });            
            // this.setState({ rooms : roomsFB});
        });
    }

    openChat(room){                
        
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

                <Button title = "All of rooms"
                color = "blue"
                onPress = {() => this.props.navigation.navigate("Rooms")}>
                </Button>

                <StatusBar barStyle="light-content"/>
                <Text style={styles.roomsHeader}>Chatypus</Text>
                <View style={styles.roomsInputContainer}>
                    <Text style={styles.roomsInput}>Your room !</Text>  
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