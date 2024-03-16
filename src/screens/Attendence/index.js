/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Modal } from 'react-native'

import CustomButton from '../../components/CustomButton';
import TextBox from '../../components/TextBox';


function Attendence() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.AttendenceContainer}>
        <Text style={styles.header}>Attendence Log</Text>
        <ScrollView>
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 5,
    flex: 1,
    backgroundColor: '#F5FAFF',
    alignItems: 'center',
  },
  AttendenceContainer:{
    width: 350,
    height:600,
    backgroundColor: '#635c5c',
    elevation: 5,
    borderColor: 'white',
    borderRadius: 50,
    borderStyle:'solid',
    justifyContent:'center',
    alignContent:'center',
    borderWidth: 2,
    marginVertical: 10,
  },
  header:{
    color: 'white',
    fontSize: 20,
    textAlign:'center',
    padding: 5,
    fontWeight:'bold',
  },
});

export default Attendence;