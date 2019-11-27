import React, { Component } from 'react';
import { 
    View, 
    Text,
    Button,
} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View>
                <Text>
                    Home Screen
                </Text>
                
                <Button title = "Sign In"
                color = "green"
                onPress = {() => this.props.navigation.navigate("SignIn")}>
                </Button>
                <Button title = "Sign Up"
                color = "red"
                onPress = {() => this.props.navigation.navigate("SignUp")}>
                </Button>
                <Button title = "희진"
                color = "black"
                onPress = {() => this.props.navigation.navigate("LoginPage")}>
                </Button>
                <Button title = "소현"
                color = "blue"
                onPress = {() => this.props.navigation.navigate("Mypagemain")}>
                </Button>
            </View>
        );
    };
}