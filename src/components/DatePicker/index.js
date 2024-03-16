/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateSelector = ({
    onDateChange,
    minimumDate,
    maximumDate,
}) => {
const [date, setDate] = useState(new Date());
   return (
        <View>
         <DatePicker
          date={date} 
          onDateChange={setDate}
          minimumDate={new Date()}
        //   maximumDate={new Date()}
          dividerHeight={5}
          textColor='red'
          style={styles.datepicker}
          />
         </View> 
    );
};

const styles = StyleSheet.create({
    datepicker: {
        marginVertical: 20,
        marginHorizontal: 30,
        width: 300,
        height: 200,
    }
})

export default DateSelector;