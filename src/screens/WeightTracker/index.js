/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Modal } from 'react-native'
import CustomButton from '../../components/CustomButton';
import TextBox from '../../components/TextBox';
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';

const STORAGE_KEY = 'user';

function Weight() {
  const [modalVisible, setModalVisible] = useState(false);
  const [weight, setWeight] = useState('');
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        const parsedData = JSON.parse(data);
        setUserData(parsedData);
      }
    } catch (error) {
      console.error('Error getting user data from AsyncStorage:', error);
    }
  };
const clearAll = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setUserData([])
  } catch(e) {
    // clear error
  }
}
  useEffect(() => {
    getData();
    }, []);

  const handleChange = (text) => {
    setWeight(text);
  };

  const storeUser = async () => {
    try {
      const data = {
        Weight: weight,
        Dt: new Date().toISOString(),
        id: userData?.length === 0 ? 1 : userData?.length+1,
      };
      const updatedData = Array.isArray(userData) ? [...userData, data] : [data];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
      setUserData(updatedData);
      getData();
      setModalVisible(false);
    } catch (error) {
      console.error('Error storing user data in AsyncStorage:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.addBtn}>
      <CustomButton btnClr="black" title="Add Weight" onPress={()=>setModalVisible(true)} />
      </View>
      <Modal
      visible={modalVisible}
      animationType="slide"
      >
    <View style={styles.addContainer}>
        <View style={styles.textBox}>
          <Text style={styles.headerText}>Track Your Progress on this Weight Tracker</Text>
        <TextBox
        placeholder="Weight" onChangeText={(text)=>handleChange(text)} value={weight}/>
        </View>
        <View style={styles.buttonContainer}>
        <CustomButton  btnClr="black" title="Close" onPress={()=>setModalVisible(false)}  />
        <CustomButton  btnClr="black" title="Add" onPress={storeUser} />
        </View>
      </View>
      </Modal>
      <View style={styles.WeightContainer}>
        <Text style={styles.header}>Weight Log</Text>
        <CustomButton btnClr="black" title="Clear Log" onPress={()=>clearAll()} />
        <ScrollView>
          {userData && userData.map((i)=>{
            return  <View style={styles.WeightBall} key={i.id}>
            <View style={styles.WeightTag}>
            <Text style={styles.Weightkg}>{i.Weight} kg</Text>
            </View>
            <Text style={styles.WeighttagLine}>{i.Dt && moment(i.Dt).format("DD, MMM, YYYY")}</Text>
            </View>

          })}
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
  WeightContainer:{
    width: 350,
    height:600,
    backgroundColor: '#249db0',
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
  WeightTag: {
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
  Weightkg:{
    color: 'white',
    fontSize: 14,
  },
  WeighttagLine:{
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 5,
  },
  addContainer: {
    padding: 5,
    margin:5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#249db0',
  },
  textBox:{
    width: '70%',
  },
  buttonContainer:{
    flexDirection:'row',
  },
  addBtn:{
    alignSelf:'center',
  },
  WeightBall:{
    padding:5,
  },
})
export default Weight;