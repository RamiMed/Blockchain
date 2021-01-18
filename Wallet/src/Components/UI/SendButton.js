import React from 'react';
import { View,StyleSheet,Alert,Text,TouchableOpacity,TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const SendButton = (props)=> {
    return (

        <TouchableOpacity onPress={props.onPress}>
        <View style={{backgroundColor:props.title == 'Send'? '#884BF2':'#27ae60',borderRadius:9,padding:10,margin:10,shadowOffset: { width: 0, height: 0, },shadowColor: props.title == 'Send'? '#884BF2':'#27ae60',shadowOpacity: 0.4,shadowRadius: 12,}} >
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',padding:33,paddingTop:1,paddingBottom:1}}>
                <FontAwesome name={props.title == 'Send'?'angle-double-up':'angle-double-down'} size={30} style={{color:'white',paddingRight:10}} />
                <Text style={{fontWeight:'800',fontSize:16,color:'white'}}>{props.title}</Text>
            </View>
        </View>
        </TouchableOpacity>
      
        


        )}




const styles = StyleSheet.create({
    
  })
  export default SendButton;