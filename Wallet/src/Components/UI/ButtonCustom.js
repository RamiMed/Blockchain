import React, {Component} from "react";
import {Image, View, ActionSheetIOS, Picker, Platform,Text, TouchableOpacity,StyleSheet,TextInput} from "react-native";

class ButtonCustom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = this.props.navigation;

    return (
        <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.Button}>
                <Text style={{ alignSelf: 'center', color: 'white', fontSize: 14, fontWeight: 'bold' }}>{this.props.Text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor:'#2980b9',
        padding:15,
        paddingTop:12,
        paddingBottom:12,
        borderRadius:11,
        borderWidth:1,
        borderColor: 'transparent',
        marginLeft:10,
        marginRight:10,
        margin: 20,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: '#2980b9',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation:2


    }
    
})
export default ButtonCustom;

