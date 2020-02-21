import React from 'react';
import { SafeAreaView, Image, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    homeTeam: 'Philadelphia Eagles',
    awayTeam: 'New York Giants',
    homeTeamUri: 'https://images-na.ssl-images-amazon.com/images/I/7188JelZCfL._AC_SL1500_.jpg',
    awayTeamUri: 'https://images.fun.com/products/51406/1-1/nfl-new-york-giants-logo-foam-sign.jpg',
    date: '9/8',
    time: '8:00pm'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    homeTeam: 'Detroit Lions',
    awayTeam: 'Kansas City Cheifs',
    homeTeamUri: 'https://images.homedepot-static.com/productImages/94c018d8-0231-4d33-89e8-939d1c90b287/svn/blue-applied-icon-wall-decals-nfop1103-64_1000.jpg',
    awayTeamUri: 'https://rfathead-res.cloudinary.com/image/upload/q_auto,f_auto/c_pad,h_3000/g_north,c_crop,h_3000,w_3000/c_pad,h_3000,w_3000/room/applied_icon/pool_images/NFL/AI-NFPO1603_Kansas_City_Chiefs_Logo_Giant_Officially_Licensed_Pool_Graphic_prod-all.jpg',
    date: '9/8',
    time: '8:00pm'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    homeTeam: 'New York Jets',
    awayTeam: 'Buffalo Bills',
    homeTeamUri: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/1200px-New_York_Jets_logo.svg.png',
    awayTeamUri: 'https://images-na.ssl-images-amazon.com/images/I/71IuIW7SPpL._AC_SL1500_.jpg',
    date: '9/8',
    time: '8:00pm'
  },
];

function Item({ homeTeam, time, date, awayTeam, homeTeamUri, awayTeamUri }) {
  return (
    <TouchableOpacity>
      <Card style={styles.card}>
        <Image source={{uri:homeTeamUri}} style={{height:30, width:30}}/>
        <Text style={[styles.title, styles.teams]}>{homeTeam}</Text>
        <Image source={{uri:awayTeamUri}} style={{height:30, width:30, paddingBottom:20}}/>
        <Text style={[styles.title, styles.teams]}>{awayTeam}</Text>
        <View style={{marginTop: -30}}>
          <Text style={[styles.title, styles.time]}>{time}</Text>
          <Text style={[styles.title, styles.date]}>{date}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

export default function GameView() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item date={item.date} time={item.time} awayTeam={item.awayTeam} homeTeam={item.homeTeam} homeTeamUri={item.homeTeamUri} awayTeamUri={item.awayTeamUri} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  date: {
    marginLeft: 250,
    fontSize: 10,
    fontFamily: 'System'
  },
  teams: {
    marginLeft:100,
    marginTop: -30,
    fontFamily: 'System',
  },
  time: {
    marginLeft: 250,
    fontSize: 10,
    fontFamily: 'System'

  },
  card: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height:100,
  },
  title: {
    fontSize: 15,
  },
});
