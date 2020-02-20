/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component, useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

async function register(email, password) {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    console.error(e.message);
  }
}
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8937f2',
    accent: 'yellow',
  },
};

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [searchValue, changeSearchValue] = useState('')
 
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
 
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
 
  if (initializing) return null;
 
  if (!user) {
    return (
      <PaperProvider theme={theme}>
          <Appbar.Header style={styles.top}> 
            <Text style={styles.headerText}> Sports</Text>
            <Text style={styles.headerTextFaded}> Events</Text>
            <Text style={styles.subHeadingPrimary}> 🔥Hot </Text>
            <Text style={styles.subHeading}> 🔴Live </Text>
            <Text style={styles.subHeading}> 🌎All </Text>
          </Appbar.Header>
          <SearchBar
            placeholder='games, events, or teams'
            containerStyle={styles.search}
            inputContainerStyle={styles.innerSearchBar}
            searchIcon
            placeholderTextColor={'black'}
          />
          <View style={styles.iconContainer}>
            <Icon name='filter' size={30} color={'#ddd'}/>
          </View>
          
      </PaperProvider>
    );
  }
 
  return (
    <PaperProvider theme={theme}>
          <Appbar.Header style={styles.top}> 
            <Text style={styles.headerText}> Sports</Text>
            <Text style={styles.headerTextFaded}> Events</Text>
            <Text style={styles.subHeadingPrimary}> 🔥Hot </Text>
            <Text style={styles.subHeading}> 🔴Live </Text>
            <Text style={styles.subHeading}> 🌎All </Text>
          </Appbar.Header>
      </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconContainer: {
    borderBottomColor: '#ddd',
    marginLeft: 350,
    marginTop: -40,
    backgroundColor: '#fff',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    paddingRight: 10
  },
  search: {
    marginTop: 107,
    width: '80%',
    backgroundColor: 'white',
  },
  innerSearchBar: {
    backgroundColor: 'white'
  },
  subHeading: {
    marginTop: 75,
    paddingLeft: 115,
    paddingRight: 115,
    marginLeft: -231.5,
    color: 'grey'
  },
  subHeadingPrimary: {
    marginTop: 75,
    paddingLeft: 115,
    paddingRight: 115,
    marginLeft: -253.5,
    color: 'white'
  },
  headerTextFaded: {
    color: 'grey',
    fontSize: 20
  },
  top: {
    position: 'absolute',
    height: 150,
    width: 2000

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
