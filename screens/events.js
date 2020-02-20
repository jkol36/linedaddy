import React from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    FlatList,
    TouchableOpacity,
   } from 'react-native'
import { Card, Title } from 'react-native-paper';

import { formatData } from '../helpers';

const events = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'NBA FINALS 2019',
      uri: 'https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Wimbledon 2019',
      uri: 'https://images.unsplash.com/photo-1544298621-a28c00544483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
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
const numColumns = 1;
const Sports = props => {
    return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={formatData(events, numColumns)}
        renderItem={({ item }) => <Item title={item.title} uri={item.uri} />}
        keyExtractor={item => item.id}
        numColumns={3}
        />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
       paddingRight:20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        marginTop: 20
      },
})
export default Sports;