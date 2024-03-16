/* eslint-disable prettier/prettier */
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const CustomButton = ({
    title,
    onPress,
    btnClr = 'blue',
}) => {
  return (<Pressable onPress={onPress} style={[styles.button, {backgroundColor:btnClr}]}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>);
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        margin: 10,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})
export default CustomButton;