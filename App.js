/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component, useState, useEffect } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  SafeAreaView, 
  FlatList,
  TouchableOpacity
 } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { 
  Appbar, 
  DefaultTheme, 
  Provider as PaperProvider } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sports from './screens/sports';
import Events from './screens/events';
import GameView from './screens/gameview';





const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8937f2',
    accent: 'yellow',
  },
};





export default function App() {
 
  return (
    <PaperProvider theme={theme}>
        <Appbar.Header style={styles.top}>
          <TouchableOpacity>
            <Text style={styles.headerTextFaded}> Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.headerText}> Events</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.subHeadingPrimary}> 🔥Hot </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.subHeading}> 🔴Live </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.subHeading}> 🌎All </Text>
          </TouchableOpacity>
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

        <GameView />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
