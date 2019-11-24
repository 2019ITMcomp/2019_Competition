import Firebase from 'firebase';
import * as c from './constant';

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


export default class FirebaseSDK {
    constructor(){
        if(!Firebase.apps.length){
            // for avoiding re-initializing
            Firebase.initializeApp(config); 
        }
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

    get ref(){
        return Firebase.database().ref('Messages');
    }

    get refUid(){
        return (Firebase.auth().currentUser || {}).uid; 
    }

    // refOn = callback =>{ // 지금 안쓰는 상태임.
    //     this.ref
    //     .limitToLast(20)
    // }

    refOff(){
        this.ref.off();
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

    // 여기서 message의 정보를 얻어오는 것인데, 애초에 등록이 안되는데요...?
    get = callback =>{
        this.ref.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    send = messages => {
        messages.forEach(item => {
            const message ={
                text: item.text,                
                timestamp : Firebase.database.ServerValue.TIMESTAMP,
                user: item.user
                //여기에 item.user._id가 없다는 것...? 
            };

            this.ref.push(message);
        });
    };
    
    
    
}



//위에 코드는 로그인을 위해서 만들어 놓은 것이고, 아래는 db만을 따로 사용하기 위해서 만들어 놓은 코드...? 
export let app = Firebase.initializeApp(config);
export const db = app.database();


