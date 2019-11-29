import Firebase from 'firebase';
import * as c from './constant';
import { supportsOrientationLockAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import { rejects } from 'assert';

let config = {
    apiKey : c.FIREBASE_API_KEY,
    authDomain : c.FIREBASE_AUTH_DOMAIN,
    databaseURL : "https://oclock-27bcb.firebaseio.com",
    projectId: c.FIREBASE_PROJECT_ID,
    storageBucket: c.FIREBASE_STORAGE_BUCKET,
    messagingSenderId : c.FIREBASE_MESSAGING_SENDER_ID,  
    appId : c.FIREBASE_APP_ID, // appId 와 measurementId는 다른 코드에서는 사용되지 않았음. 
    measurementId : c.MEASUREMENT_ID,
};


export default class FirebaseSDK{
    constructor(){
        if(!Firebase.apps.length){
            // for avoiding re-initializing
            Firebase.initializeApp(config); 
        }
        
        this.roomKey = '';
    }


    login = async (user, success_callback, failed_callback) => {
		await Firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.then(success_callback, failed_callback);
    };
    
    createAccount = async user => {
        Firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(
            function() {
                console.log(
                'created user successfully. User email:' +
                user.email +
                ' name:' +
                user.name
                );

                var userf = Firebase.auth().currentUser;

                userf.updateProfile({ displayName: user.name }).then(
                    function() {
                        console.log('Updated displayName successfully. name:' + user.name);
                        alert(
                            'User ' + user.name + ' was created successfully. Please login.'
                        );
                    },
                    function(error) {
                        console.warn('Error update displayName.');
                    }
                );
            },
            function(error) {
                //console.error를 사용하면 기능이 중단되고 다시 하도록 나온다. 
                //console.error('got error:' + typeof error + ' string:' + error.message);
                alert('Create account failed. Error: ' + error.message);
            }
        );
    };

    
    get refMessages(){
        return Firebase.database().ref('Rooms/' + this.roomKey + '/messages');
    }

    get refUid(){
        return (Firebase.auth().currentUser || {}).uid; 
    }

    get refUserName(){
        return Firebase.auth().currentUser.displayName;
    }

    // 적용이 왜 안될까. //get은 아무 formal한 parameter를 가지면 안된다는데
    refRoom(newRoomName){
        return Firebase.database().ref('Rooms/' + newRoomName);
    }

    refRoomKey = (newRoomName) => {
        let room_ref = Firebase.database().ref('Rooms/' + newRoomName);
        let key = '';
        
        return new Promise(function (resolve, rejects){
        
            room_ref.on('value', (dataSnapshot) =>{
                console.log("data : " + dataSnapshot);
                dataSnapshot.forEach((child) =>{                
                    if(child.val().isClosed === false){                         
                        key = child.key;                    
                    }                     
            
                });
            });
            resolve(key);
        })
        
        
    }

    setRoomKey = key => {
        this.roomKey = key;
    }

    refOff(){
        this.refMessages.off();
    }

    parse = message =>{
        const {user,text,timestamp} = message.val(); 
        //여기에 들어가는 user가 문제인듯
        const {key: _id}=message;
        const createdAt = new Date(timestamp);

        return{
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback =>{ //아 ... 말 그대로 콜백 값이 callback에 담기는거야...? 바인딩 플러스에???
        // callback은 말 그대로 인자값을 넣어주는 것 같은데,,, 잘 모르겠다. 
        
        this.refMessages.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    send = messages => {
        messages.forEach(item => {
            const message ={
                text: item.text,                
                timestamp : Firebase.database.ServerValue.TIMESTAMP,
                user: item.user
                //여기에 item.user._id가 없다는 것...? 
            };
            this.refMessages.push(message);
        });
    };

    // duplicateCheck = (newRoomName) =>{
    //     let roomRef = firebase.refRoom(newRoomName);            
    //     let roomNumber = 1;
        
    //     roomRef.on('value' , (dataSnapshot) => {
            
    //         console.log('snapshot : ' + dataSnapshot);
    //         dataSnapshot.forEach((child) => {
    //             console.log("Roomnumber : " + roomNumber);
    //             console.log('child : ' + child);
    //             console.log('is closed? : ' + child.val().isClosed);
    //             if(child.val().isClosed){
    //                 roomNumber += 1;
    //             }else{ // 빈 곳을 발견했다는 의미이므로. 
    //                 //user를 그곳에 더하고!
    //                 this.props.navigation.navigate('ChatScreen', {
    //                     name : app.auth().currentUser,
    //                     roomKey : child.key,
    //                     roomName : newRoomName,
    //                 });
    //                 return;
    //             }
    //         });
    //     })
    //     return roomNumber;
    // }

    checkRoom = (newRoomName) =>{
        return new Promise(function (resolve, reject){
            let key = '';
            let room_ref = Firebase.database().ref('Rooms/' + newRoomName);
            room_ref.on('value', (dataSnapshot)=>{
                dataSnapshot.forEach( (child) =>{
                    if(!child.val().isClosed){//열려 있는 방이 있을 때
                        key = child.key;
                    }   
                })
            })

            resolve(key);
        })
    }
    
    createRoom = async (roomName) =>{
        return new Promise(async function( resolve, rejects){
            let room_ref = Firebase.database().ref('Rooms/' + roomName);        
            await room_ref.push( { 
                roomName : roomName, 
                createdAt : Date.now(),
                isClosed : false,
            } )
            resolve();
        })
        
    }
    enter =  (newRoomName, roomKey) =>{
        
        let user_ref = Firebase.database().ref('Users/' + this.refUid);
        user_ref.push( {
            roomName : newRoomName,
            roomKey : roomKey 
        });
    }
}



//위에 코드는 로그인을 위해서 만들어 놓은 것이고, 아래는 db만을 따로 사용하기 위해서 만들어 놓은 코드...? 
export let app = Firebase.initializeApp(config);
export const db = app.database();


