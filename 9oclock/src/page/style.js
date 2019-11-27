import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView,
  AsyncStorage
} from "react-native";

//const React = require("react-native");
const { height, width } = Dimensions.get("window");
//const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logo: {
  marginTop: 100,
  marginBottom:30,
  height: 150,
  width: 150,
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  backgroundColor: 'rgba(87, 185, 158, 0.7)',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
  marginLeft: 15,
  marginRight: 15,
},
signupButton:{
  backgroundColor: '#A9A9A9',
  borderRadius: 5,
  height: 45,
  marginTop: 10,
  marginLeft: 15,
  marginRight: 15,
},
text:{
  fontSize:15,
  marginLeft:20,
  marginRight:20,
},
idpwFindView:{
  marginTop:20,
  width: width,
  justifyContent: 'space-around',
  flex:1,
  flexDirection:'row',

},
signUpFormContainer:{
  flex:1,
  flexDirection:'row',
  width:width,
  justifyContent: 'space-around',
},
signupCheckButton:{
  width: 43,
  height: 43,
}
};
