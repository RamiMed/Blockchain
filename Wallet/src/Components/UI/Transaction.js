import React, { Component } from "react";
import { Image, View, ActionSheetIOS, Picker, Platform, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const Transaction = (props) => {
  const status = props.status;
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,paddingBottom:15,borderColor:status == 'Sent'? '#884BF250':'#27ae6050',marginTop:8,borderBottomWidth:1}}>
          <View style={{flexDirection:'row'}}>
            <View>
            <FontAwesome name={status == 'Sent'?'angle-double-up':'angle-double-down'} size={28} style={{color:status == 'Sent'? '#884BF2':'#27ae60',paddingRight:10}} />
            </View>
            <View>
              <Text style={{fontSize:13,fontWeight:'800'}}>{status}</Text>
              <Text style={{fontSize:9,fontWeight:'400'}}>{props.time}</Text>
            </View>
          </View>
          <View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:13,fontWeight:'800'}}>{props.amount}</Text>
          <FontAwesome name='stumbleupon' size={20} style={{color:'#8e44ad',alignSelf:'center',paddingLeft:5,shadowOffset: { width: 0, height: 0, },shadowColor: '#884BF2',shadowOpacity: 0.5,shadowRadius: 20}} />
          </View>
            <Text style={{fontSize:9,fontWeight:'400',alignSelf:'center'}}>{props.amount*100} EUR</Text>
          </View>
          </View>
    )
}
const styles = StyleSheet.create({
    


})

export default Transaction;

