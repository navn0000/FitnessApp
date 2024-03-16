/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native"

const TextBox = ({
    placeholder,
    onChangeText,
    inputMode,
    keyboardType,
    value,
    label
}) => {
    return (
        <SafeAreaView>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.textBox}
            placeholder={placeholder}
            onChangeText={onChangeText}
            autoComplete="off"
            autoCorrect={false}
            inputMode={inputMode}
            keyboardType={keyboardType}
            placeholderTextColor='white'
            value={value}
            maxLength={3}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textBox:{
        borderBlockColor:'white',
        height: 40,
        width: '100%',
        borderWidth: 2,
        borderRadius: 12,
        padding: 5,
    },
    label: {
        fontSize: 14,
        padding: 5,
    }
});

export default TextBox