/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import SwitchToggle from "react-native-switch-toggle";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOG_KEY = 'time_log';

const Shift = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    let res = await AsyncStorage.getItem(LOG_KEY);
    console.log(res)
    res && setUserData(res)
  }
  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }
  useEffect(() => {
    getData();
  }, [])


  // const toggleSwitch = async () => {
  //   setIsEnabled(previousState => !previousState);
  //   try {
  //     let timelog = { start: null, end: null };
  //     if (isEnabled) {
  //       timelog.start = new Date().toISOString();
  //     } else {
  //       timelog.end = new Date().toISOString();
  //     }
  //     console.log(timelog)
  //     if(timelog.start !== "" && timelog.end !== ""){
  //       const data = {
  //         Stime: timelog.start,
  //         Etime: timelog.end,
  //         id: userData?.length === 0 ? 0 : userData?.length + 1,
  //       };
  //         const updatedData = Array.isArray(userData) ? [...userData, data] : [data];
  //         await AsyncStorage.setItem(LOG_KEY, JSON.stringify(updatedData));
  //         console.log(userData, "us")
  //     }
      
  //   } catch (error) {
  //     console.error('Error setting time in AsyncStorage:', error);
  //   }
  // }

  const toggleSwitch = async () => {
    setIsEnabled((previousState) => !previousState);
  
    try {
      let timelog = await AsyncStorage.getItem(LOG_KEY);
      timelog = timelog ? JSON.parse(timelog) : [];
  
      if (!isEnabled) {
        // Start time
        const start = new Date().toISOString();
        console.log("Start Time:", start);
  
        // Add a new log entry with the start time
        timelog.push({ Stime: start, Etime: null, id: timelog.length + 1 });
      } else {
        // End time
        const index = timelog.length - 1;
        if (index >= 0 && timelog[index].Etime === null) {
          timelog[index].Etime = new Date().toISOString();
          console.log("End Time:", timelog[index].Etime);
  
          // Append the latest timelog entry to userData
          const updatedData = Array.isArray(userData) ? [...userData, timelog[index]] : [timelog[index]];
          await AsyncStorage.setItem(LOG_KEY, JSON.stringify(updatedData));
        }
      }
  
      console.log(userData, "Logs");
    } catch (error) {
      console.error('Error setting time in AsyncStorage:', error);
    }
  };
  

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.leftText}>Wrap Up</Text>
          <Text style={styles.rightText}>Get Fit</Text>
        </View>
        <SwitchToggle
          switchOn={isEnabled}
          onPress={toggleSwitch}
          type={1}
          circleColorOn="#FF2400"
          containerStyle={{
            marginTop: 16,
            width: 200,
            height: 48,
            borderRadius: 25,
            padding: 5,
          }}
          circleStyle={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'red'
          }}
        />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftText: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 40,
  },
  rightText: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 40,
  }
});
export default Shift