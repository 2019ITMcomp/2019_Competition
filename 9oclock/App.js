import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignUpPage from './page/SignUp.js'
import LoginPage from './page/Login.js'
import LoginSuccessPage from './page/LoginSuccess'
import IdFindPage from './page/IdFind'
import PwFindPage from './page/PwFind'

export default class App extends React.Component {
  render() {
    return (
      //<SignUpPage />
      <LoginPage/>
      //<LoginSuccessPage/>
      //<IdFindPage/>
      //<PwFindPage/>
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
