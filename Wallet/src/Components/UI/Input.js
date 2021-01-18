import React, { Component } from "react";
import { Image, View, ActionSheetIOS, Picker, Platform, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const Input = (props) => {

    return (
        <View style={styles.Input}>
            
            <TextInput secureTextEntry={props.secureTextEntry} keyboardType={props.keyboardType} onChangeText={props.onChangeText} value={props.value} style={styles.TextInput} placeholder={props.placeholder} />
        </View>
    )
}
const styles = StyleSheet.create({
    Input: {
        borderColor: 'black',
        
        marginLeft:20,
        marginRight: 20,
        margin:20,
        backgroundColor:'white',
        shadowOffset: { width: 8, height: 8, },
        shadowColor: '#884BF2',
        shadowOpacity: 0.2,
        shadowRadius: 15,
        borderRadius:11,
        borderWidth:1,
        borderColor: '#884BF210',
        justifyContent:'center'

    },
    TextInput: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop: 11,
        paddingBottom: 11,
        padding:20

    }


})

export default Input;

