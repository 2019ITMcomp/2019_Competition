import React, { Component } from 'react';
import { 
    View, 
    Text,
    Button,
    TextInput,
    TouchableHighlight,
    StatusBar,
    FlatList,
    Alert,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import FirebaseSDK, {db, app} from '../config';
import styles from '../components/styles';
import { calculateUTF8Chars } from 'bytebuffer';


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
            newRoom : '',
            termination : undefined,
            hour :  undefined,
            minute : undefined,
        }
    }

    componentDidMount(){
        this.listenForRooms(this.userRef);
        
    }

    listenForRooms(userRef){
        userRef.on('value', (dataSnapshot) => {
            let roomsFB = [];
            dataSnapshot.forEach( (child) => {
                
                let roomKey = child.val().roomKey;
                let roomName = child.val().roomName;  
                db.ref('Rooms/' + roomName + '/' + roomKey).on('value', (data) => {                    
                                
                    roomsFB.push({
                        name : data.val().roomName,
                        key : roomName + '/' + roomKey,
                    });
                    this.setState({ rooms : roomsFB});
                })                
            });                        
        });
    }

    openChat(room){                
        
        this.props.navigation.navigate('ChatScreen', {
            name : app.auth().currentUser,
            roomKey : room.key,
            roomName : room.name,
        });
    }


    duplicateCheck = async (newRoomName) =>{
        let roomRef = firebase.refRoom(newRoomName);            
        let roomNumber = 1;
        
        roomRef.on('value' , (dataSnapshot) => {
            
            console.log('snapshot : ' + dataSnapshot);
            dataSnapshot.forEach((child) => {
                console.log("Roomnumber : " + roomNumber);
                console.log('child : ' + child);
                console.log('is closed? : ' + child.val().isClosed);
                if(child.val().isClosed){
                    roomNumber += 1;
                }else{ // 빈 곳을 발견했다는 의미이므로. 
                    //user를 그곳에 더하고!
                    this.props.navigation.navigate('ChatScreen', {
                        name : app.auth().currentUser,
                        roomKey : child.key,
                        roomName : newRoomName,
                    });
                    return;
                }
            });
        })
        return roomNumber;
    }

    makeRoom = async () => { 

        if(this.state.termination === undefined || this.state.hour === undefined || this.state.minute === undefined){
            alert("빼먹지 말고 모두 입력해라 =ㅅ=");
        }else{
            let today = new Date().getDate()
            let newRoomName = today + "일 "+ this.state.termination + " " + this.state.hour + "시 " + this.state.minute + "분";
            // 1. 룸 내임이 중복된 것이 있는지 확인해야함.
            // 2. 그 방들이 모두 다 찼는지도 확인해야함. isClosed를 통해서
            
            
            // 방 번호는 중요하지 않고, 개수를 새서 추가만 하면 되니까.
            // 다만, 그 방에 들어있는 isClosed가 어떻게 되있는지가 중요하지.
            
            // let roomNumber = await this.duplicateCheck(newRoomName);
            let roomNumber = 1;
            


            firebase.enter(newRoomName);
            
            let newRoomKey = await firebase.refRoomKey(newRoomName)
            
            firebase.enter2(newRoomName, newRoomKey); 
            console.log(newRoomKey);
            alert("새로운 방으로 이동합니다 !");

            // TODO 위에서 새로운 방을 만들고, 바로 그 방의 룸키를 받아와서 사용해야댐...
            this.props.navigation.navigate('ChatScreen', {
                name : app.auth().currentUser,
                roomKey : newRoomKey,
                roomName : newRoomName,
            });
            
            
            //TODO 바로 들어가서 chatting을 한 경우에는, 그 방에 user가 등록이 안됨
        }
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
                <View> 
                    <RNPickerSelect
                    placeholder={{
                        label : '어디로?',
                        value : null,
                        fontSize : 25,
                    }}  
                    items={[                        
                        { label : '기숙사행', value : '기숙사행'},
                        { label : '무궁관행', value : '무궁관행'},
                    ]} 
                    onValueChange={(value) => {
                        this.setState({
                            termination : value,
                        });                        
                    }}
                    value = {this.state.termination}
                    textInputProps={{color:"#333333", fontSize:16}}                     
                    />
                    <RNPickerSelect   
                    placeholder={{
                        label : '몇 시?',
                        value : null,
                        fontSize : 25,
                    }}                   
                    items={[                        
                        { label : '8시', value : '8'},
                        { label : '9시', value : '9'},
                        { label : '10시', value : '10'},
                        { label : '11시', value : '11'},
                        { label : '12시', value : '12'},
                    ]} 
                    onValueChange={(value) => {
                        this.setState({
                            hour: value,
                        });
                    }}
                    value = {this.state.hour}
                    textInputProps={{color:"#333333", fontSize:16}}                                    
                    />
                    <RNPickerSelect 
                    placeholder={{
                        label : '몇 분?',
                        value : null,
                        fontSize : 25,
                    }}         
                    items={[
                        { label : '0분', value : '0'},{ label : '2분', value : '2'},
                        { label : '4분', value : '4'},{ label : '6분', value : '6'},
                        { label : '8분', value : '8'},{ label : '10분', value : '10'},
                        { label : '12분', value : '12'},{ label : '14분', value : '14'},
                        { label : '16분', value : '16'},{ label : '18분', value : '18'},
                        { label : '20분', value : '20'},{ label : '22분', value : '22'},
                        { label : '24분', value : '24'},{ label : '26분', value : '26'},
                        { label : '28분', value : '28'},{ label : '30분', value : '30'},
                        { label : '32분', value : '32'},{ label : '34분', value : '34'},
                        { label : '36분', value : '36'},{ label : '38분', value : '38'},
                        { label : '40분', value : '40'},{ label : '42분', value : '42'},
                        { label : '44분', value : '44'},{ label : '46분', value : '46'},
                        { label : '48분', value : '48'},{ label : '50분', value : '50'},
                        { label : '52분', value : '52'},{ label : '54분', value : '54'},
                        { label : '56분', value : '56'},{ label : '58분', value : '58'},
                    ]}          
                    onValueChange={(value) => {
                        this.setState({
                            minute: value,
                        });
                    }}           
                    textInputProps={{color:"#333333", fontSize:16}} 
                    value = {this.state.minute}                    
                    />                    
                    <TouchableHighlight
                    onPress={this.makeRoom}
                    >
                        <Text>Touch Here</Text>
                    </TouchableHighlight>                                        
                </View>
                

                <StatusBar barStyle="light-content"/>
                <Text style={styles.roomsHeader}>진관이의 채팅앱</Text>
                <View style={styles.roomsInputContainer}>
                    <Text style={styles.roomsInput}>택시를 많이 탔구나!</Text>  
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