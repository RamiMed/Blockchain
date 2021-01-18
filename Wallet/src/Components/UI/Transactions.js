import React, { Component } from "react";
import { Image, View, ActionSheetIOS, Picker, Platform, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Transaction from './Transaction';
import moment from 'moment';
import _ from 'lodash';
const Transactions = (props) => {
    const transactions = props.transactions;
    
    Height =  200 + _.size(transactions) * 100;
    

    return (
        <View style={{height: props.transactions ? Height :300 ,backgroundColor:'white',borderWidth:1,borderColor:'white',borderRadius:19,padding:10,margin:12,shadowOffset: { width: 0, height: 0, },shadowColor: '#D0D0D0',shadowOpacity: 0.4,shadowRadius: 12}} >
        
        {
          
          _.size(transactions) > 0 ? 
          transactions.map(transaction=>(
            <Transaction key={Math.floor(Math.random() * 1000000)} status={transaction.type} time={moment(new Date( transaction.timestamp)).fromNow()} amount={transaction.amount}/>
            
          ))
          :
          
            <Text style={{alignSelf:'center',fontWeight:'700',justifyContent:'center',fontSize:10}} >Votre historique de transactions est vide... </Text>
          
            
          
        }
          
        
        
        </View>
    )
}
const styles = StyleSheet.create({
    


})

export default Transactions;

