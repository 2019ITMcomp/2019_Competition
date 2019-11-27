import React from 'react';
import { ImagePicker, Permissions} from 'expo';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ImageEditor
}from 'react-native';

import FirebaseSDK from '../config';

const firebaseSDK = new FirebaseSDK();

export default class Signup extends React.Component{
    state = {
        name : 'no name',
        email : 'test@live.com',
        password : '123456',
        avartar : ''
    };

    onPressCreate = async() =>{
        try{
            const user ={
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
            };
            await firebaseSDK.createAccount(user);
            
        }catch({message}){
            console.log('Create account failed. catch error : ' + message);

            //TODO
            // 만약에 같은 address가 있다면 오류 메시지를 뜨게 하는 것까지는 괜찮지만, 
            // 오류를 캐치해서 보여주고 다시 입력하도록 해야한다. 
        }
    };

    onChangeTextEmail = email => this.setState({ email });
	onChangeTextPassword = password => this.setState({ password });
    onChangeTextName = name => this.setState({ name });
    
    onImageUpload = async() =>{
        const { state : cameraRollPerm} = await Permissions.askAsync(
            Permissions.CAMERA_ROLL
        );
        try{
            // only if user allows permission to camera roll 
            if(cameraRollPerm === 'granted'){
                let pickerResult = await ImagePicker.launchImageLibraryAsync({
                    allowEditing : true,
                    aspect : [4,3]
                });
                console.log(
                    'Ready to upload... pickerResult json : ' + JSON.stringify(pcikerResult)
                );

                var wantedMaxSize = 150;
                var rawheight = pickerResult.height;
                var rawwidth = pickerResult.width;
                var ratio = rawwidth / rawheight;
                var wantedwidth = wantedMaxSize;
                var wantedheight = wantedMaxSize / ratio;
                // check vertical or horizontal
                if(rawheight > rawwidth){
                    wantedwidth = wantedMaxSize * ratio;
                    wantedheight = wantedMaxSize;
                }
                let resizedUri = await new Promise((resolve, reject) =>{
                    ImageEditor.cropImage(
                        pickerResult.uri,
                        {
                            offset: { x: 0, y: 0 },
							size: { width: pickerResult.width, height: pickerResult.height },
							displaySize: { width: wantedwidth, height: wantedheight },
							resizeMode: 'contain'
                        },
                        uri => resolve(uri),
                        () => reject()
                    );
                });
                let uploadUrl = await firebaseSDK.uploadImage(resizedUri);
                this.setState({ avatar : uploadUrl });
                await firebaseSDK.updateAvatar(uploadUrl);

            }
        }catch(err){
            console.log('onImageUpload error : ' + err.message);
            alert('Upload image error : ' + err.message);
        }
    }

    render(){
        return(
            <View>
				<Text style={styles.title}>Email:</Text>
				<TextInput
					style={styles.nameInput}
					placeHolder="test@live.com"
					onChangeText={this.onChangeTextEmail}
					value={this.state.email}
				/>
				<Text style={styles.title}>Password:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextPassword}
					value={this.state.password}
				/>
				<Text style={styles.title}>Name:</Text>
				<TextInput
					style={styles.nameInput}
					onChangeText={this.onChangeTextName}
					value={this.state.name}
				/>
				<Button
					title="Signup"
					style={styles.buttonText}
					onPress={this.onPressCreate}
				/>
				<Button
					title="Upload Avatar"
					style={styles.buttonText}
					onPress={this.onImageUpload}
				/>
			</View>
        );
    };
}

const offset = 16;
const styles = StyleSheet.create({
	title: {
		marginTop: offset,
		marginLeft: offset,
		fontSize: offset
	},
	nameInput: {
		height: offset * 2,
		margin: offset,
		paddingHorizontal: offset,
		borderColor: '#111111',
		borderWidth: 1,
		fontSize: offset
	},
	buttonText: {
		marginLeft: offset,
		fontSize: 42
	}
});