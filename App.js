/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet, useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Logo from './src/components/Logo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Attendence from './src/screens/Attendence';
import Weight from './src/screens/WeightTracker';
import Traning from './src/screens/Training';


const App = () => {
  const [logo, setLogo] = useState(true);
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    setTimeout(() => {
      setLogo(false)
    }, 7000)
  }, []);
  return (
    <NavigationContainer>
        {logo && <Logo />}
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: '#FF2400',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        />
        <Stack.Screen name="Attendence" component={Attendence} />
        <Stack.Screen name="Weight" component={Weight} options={{
           headerStyle:{
            backgroundColor: '#249db0',
          }
        }}/>
        <Stack.Screen name="Training" component={Traning} options={{
           headerStyle:{
            backgroundColor: '#635c5c',
          }}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({

});

export default App;
