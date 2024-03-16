/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Modal } from 'react-native'

import CustomButton from '../../components/CustomButton';
import TextBox from '../../components/TextBox';


function Traning() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addBtn}>
      <CustomButton btnClr="black" title="Add Chart" onPress={()=>setModalVisible(true)} />
      </View>
      <Modal
      visible={modalVisible}
      animationType="slide"
      >
      <View style={styles.addContainer}>
        <Text style={styles.headerText}>Get Stronger, Get Fit: Your Personal Workout Chart</Text>
        <View style={styles.textBox}>
        <TextBox placeholder="Day"/>
        <TextBox placeholder="body part"/>
        <TextBox placeholder="work out 1"/>
        <TextBox placeholder="work out 2"/>
        <TextBox placeholder="work out 3"/>
        <TextBox placeholder="work out 4"/>
        </View>
        <View style={styles.buttonContainer}>
        <CustomButton  btnClr="black" title="Close" onPress={()=>setModalVisible(false)}  />
        <CustomButton btnClr="black" title="Add" onPress={()=>console.log("in")} />
        </View>


      </View>
      </Modal>
      <View style={styles.TrainingContainer}>
        <Text style={styles.header}>Training Log</Text>
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
  TrainingContainer:{
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
  headerText:{
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    padding: 5,
    color: 'white'
  },
  TrainingTag: {
    width:70,
    height:70,
    borderColor: 'white',
    borderRadius: 70 / 2,
    borderStyle:'solid',
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',
  },
  Trainingkg:{
    color: 'white',
    fontSize: 14,
  },
  TrainingtagLine:{
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
  },
  addContainer: {
    padding: 5,
    flex: 1,
    backgroundColor: '#635c5c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox:{
    width: '70%',
    padding: 0,
  },
  buttonContainer:{
    flexDirection:'row',
  },
  addBtn:{
    alignSelf:'center',
  },
  TrainingBall:{
    padding:5,
  },
})
export default Traning;