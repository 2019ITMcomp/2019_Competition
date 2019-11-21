import React, {Component} from 'react';
import {
    View, 
    Text,
    TouchableHighlight,
    StyleSheet,
    TextInput,
    AlertIOS
} from 'react-native';

import {db} from '../config';

let addItem = item => {
    db.ref('/items').push({
        name : item
    });
};

export default class AddItem extends Component{
    state ={
        name : ''
    };
    
    handleChange = e =>{ // 여기에 적힌 'e'라는 부분이 바인딩 하는 대상이라는 것이 아니라, 
                        //이것을 실행하기 위해서 필요한 인자 값이라는 듯
        this.setState({
            name : e.nativeEvent.text
        });
    };
    handleSubmit = () => {
        addItem(this.state.name);
        // AlertIOS.alert('Item saved successfully');
    };

    render() {
        return (
          <View style={styles.main}>
            <Text style={styles.title}>Add Item</Text>
            <TextInput style={styles.itemInput} onChange={this.handleChange} />
            <TouchableHighlight
              style={styles.button}
              underlayColor="white"
              onPress={this.handleSubmit}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#6565fc'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });