import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignUpPage from './page/SignUp.js'
import Mainpage from "./mypage/Mypagemain";
export default class App extends React.Component {
  render() {
    return (
      <Mainpage />
      // <SignUpPage />
      
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
