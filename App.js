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
  Provider as PaperProvider, 
  Card, 
  Title } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8937f2',
    accent: 'yellow',
  },
};
const sports = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Soccer',
    uri: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Basketball',
    uri: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Baseball',
    uri: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tennis',
    uri: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1496&q=80'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Football',
    uri: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Basketball',
    uri: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hockey',
    uri: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cricket',
    uri: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'E-Sports',
    uri: 'https://images.unsplash.com/photo-1548686304-89d188a80029?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Golf',
    uri: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },

];
function Item({ title, uri }) {
  return (
    <TouchableOpacity>
      <Card style={styles.card}> 
      <Card.Cover source={{ uri }} />
        <Card.Content>
            <Title>{title}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const formatData = (data, numColumns) => {
  console.log('formatting data', data, numColumns)
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow  !== 0) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true})
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  }
  return data;
}

const numColumns = 1;

export default function App() {
 
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

        <SafeAreaView style={styles.container}>
          <FlatList
            data={formatData(sports, numColumns)}
            renderItem={({ item }) => <Item title={item.title} uri={item.uri} />}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingRight: 20,
    marginTop: 20
  },
  card: {
    paddingRight:20,
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
