import React, { Component } from "react";
import { Image, View, ActionSheetIOS, Picker, Platform, Text, TouchableOpacity, TextInput, StyleSheet,ImageBackground } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Dash = (props) => {
  

    return (
      
        <View style={{height:200,backgroundColor:'white',borderWidth:1,borderColor:'white',borderRadius:19,padding:10,margin:12,shadowOffset: { width: 0, height: 0, },shadowColor: '#D0D0D0',shadowOpacity: 0.4,shadowRadius: 12,}} >
        <ImageBackground source={{uri:'https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png'}}  opacity={0.6} style={{width: '100%', height: '100%'}} >
          <Text style={{alignSelf:'center',fontSize:23,fontWeight:'700',padding:10,marginTop:5}}>Balance</Text>
          <View style={{flexDirection:'row',alignSelf:'center',padding:10}}>
          <Text style={{alignSelf:'center',fontSize:40,fontWeight:'800',marginTop:5}}>{props.Balance}</Text>
          <FontAwesome name='stumbleupon' size={40} style={{color:'#8e44ad',padding:10,shadowOffset: { width: 0, height: 0, },shadowColor: '#884BF2',shadowOpacity: 0.5,shadowRadius: 20}} />
          </View>
          </ImageBackground>
        </View>
      
    )
}
const styles = StyleSheet.create({
    


})

export default Dash;

