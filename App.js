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
  Provider as PaperProvider, Card } from 'react-native-paper';
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



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      categories: [{
        active: true,
        name: 'Events'
      },
      {
        active: false,
        name: 'Sports'
      }
    ],
    subCategories: [{
      active: true,
      name: '🔥Hot'
    },{
      active: false,
      name: '🔴Live'
    }, {
      active: false,
      name: '🌎All'
    }]



    }
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search, categories, subCategories } = this.state
    return (
      <PaperProvider theme={theme}>
          <Appbar.Header style={styles.top}>
            {categories.map(category => {
              return (
                <TouchableOpacity>
                  <Text style={category.active ? styles.headerText: styles.headerTextFaded}> {category.name}</Text>
                </TouchableOpacity>
              )
            })}
            {subCategories.map(category => {
              return (
                <TouchableOpacity>
                  <Text style={category.active ? styles.subHeadingPrimary : styles.subHeading}> {category.name}</Text>
                </TouchableOpacity>
              )
            })}
          </Appbar.Header>
          <SearchBar
            placeholder='games, events, or teams'
            containerStyle={styles.search}
            onChangeText={this.updateSearch}
            inputContainerStyle={styles.innerSearchBar}
            searchIcon
            placeholderTextColor={'black'}
            value={search}
          />
          <Card style={styles.iconContainer}>
            <Icon name='filter' size={40} color={'#ddd'}/>
          </Card>
  
          <GameView />
      </PaperProvider>
    );
  }
}


const styles = StyleSheet.create({
  iconContainer: {
    borderBottomColor: '#ddd',
    marginLeft: 350,
    marginTop: -55,
    backgroundColor: '#fff',
    width: 50,
    paddingTop: 10,
    paddingBottom: 10

  },
  headerText: {
    color: 'white',
    fontSize: 20,
    paddingRight: 10,
    fontFamily: 'System',
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
    color: 'grey',
    fontFamily: 'System'
  },
  subHeadingPrimary: {
    marginTop: 75,
    paddingLeft: 115,
    paddingRight: 115,
    marginLeft: -253.5,
    color: 'white',
    fontFamily: 'System'
  },
  headerTextFaded: {
    color: 'grey',
    fontSize: 20,
    fontFamily: 'System'
  },
  top: {
    position: 'absolute',
    height: 150,
    width: 2000

  },

});
