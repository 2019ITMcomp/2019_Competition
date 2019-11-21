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
                <Button 
                title = "Add an Item"
                onPress ={() => this.props.navigation.navigate('AddItem')}>                    
                </Button>
                <Button title = "List of Items"
                color = "green"
                onPress = {() => this.props.navigation.navigate("List")}>
                </Button>
                <Button title = "List Rooms"
                color = "green"
                onPress = {() => this.props.navigation.navigate("Rooms")}>
                </Button>
                <Button title = "Login"
                color = "black"
                onPress = {() => this.props.navigation.navigate("Login")}>
                </Button>
                <Button title = "TestButton"
                color = "red"
                onPress = {() => this.props.navigation.navigate("Test")}>
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