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

    uploadImage = async uri =>{
        console.log('Got image to upload. uri :' + uri);
        try{
            const response = await fetch(uri);
            const blob = await response.blob();
            const ref = Firebase
            .storage()
            .ref('avatar')
            .child(uuid.v4());
            const task = ref.put(blob);

            return new Promise((resolve, reject) => {
                task.on(
                    'state_changed',
                    () => {

                    },
                    reject, // 여기에 원래 쉼표가 없는데 내가 추가해놓음...
                    () => resolve(task.snapshot.downloadURL)
                );
            });
        }catch(err){
            console.log('uploadImage try/catch error : ' + err.message);
        }
    };

    updateAvatar = url =>{
        var userf = Firebase.auth().currentUser;
        if(userf != null){
            userf.updateProfile({ avatar : url }).then(
                function(){
                    console.log('Updated avatar successfully. url : ' + url);
                    alert('Avatar image is saved successfully.');
                },
                function(error){
                    console.warn('Error update avatar.');
                    alert('Error update avatar. Error : ' + error.message);
                }
            );
        }else{
            console.log("Can't update avatar, user is not login.");
            alert('Unable to update avatar. You must login first.');
        }
    };

    get ref(){
        return Firebase.database().ref('Messages');
    }

    refOn = callback =>{
        this.ref
        .limitToLast(20)
    }
}



//위에 코드는 로그인을 위해서 만들어 놓은 것이고, 아래는 db만을 따로 사용하기 위해서 만들어 놓은 코드...? 
export let app = Firebase.initializeApp(config);
export const db = app.database();


