/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import {Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import dimensions from '../../theme/dimensions';
import CustomButton from '../../components/CustomButton';
import Shift from '../../components/Shift';

function HomeScreen({ navigation }) {
  const getEngagement = () => {
    navigation.navigate('Attendence');
  };
 
  return (<SafeAreaView style={styles.homeOuter}>
    <Shift />
    <View style={styles.History}>
      <ScrollView >
        <Text style={styles.HistoryHeader}>Recent Engagement</Text>
        <Text style={styles.HistoryContent}>You last trained on: September 10, 2023</Text>
        <Text style={styles.HistoryContent}>Keep pushing your limits</Text>
        <CustomButton title="History" onPress={getEngagement} btnClr="black" />
      </ScrollView>
    </View>
    <View style={styles.container}>
      <View style={[styles.view1, styles.Box]}>
        <Pressable onPress={()=>navigation.navigate('Weight')}>
        <Text style={styles.weightTracker}>Weight Log</Text>
        </Pressable>
      </View>
      <View style={[styles.view2, styles.Box]}>
        <Pressable onPress={()=>navigation.navigate('Training')}>
        <Text style={styles.weightTracker}>Training Agenda</Text>
        </Pressable>
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeOuter: {
    backgroundColor: '#F5FAFF',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 20,
  },
  History: {
    backgroundColor: 'white',
    width: dimensions.deviceWidth - 92,
    height: 200,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    margin: 16,
    elevation: 5,
  },
  HistoryHeader: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  HistoryContent: {
    textAlign: 'center',
    padding: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  Box: {
    padding: 10,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderColor:'#FF2400',
    borderWidth: 2,
    borderStyle:'solid',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  view1: {
    backgroundColor: '#1B1212',
  },
  view2: {
    backgroundColor: '#1B1212',
  },
  weightTracker:{
    color: 'white',
    fontWeight:'bold',
  },
});
export default HomeScreen;