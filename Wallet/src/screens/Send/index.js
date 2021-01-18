import React, {Component} from "react";
import {Image, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Input from '../../Components/UI/Input';
import SendButton from '../../Components/UI/SendButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { BarCodeScanner, Permissions } from 'expo';


class Send extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
  }
  state = {
    recipient:'',
    amount:''
  }
  //HEADER 
  static navigationOptions = {
    header: null,
  };
  Transact = async () => {
    const rawResponse = await fetch('http://localhost:'+ this.props.state.params.httpPort + '/transact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({recipient: this.state.recipient, amount: parseInt(this.state.amount)})
    });
    const content = await rawResponse.json();

    await console.log(this.state.recipient);
    await console.log(this.state.amount);
    
  };

  






  render() {
    const navigation = this.props.navigation;

    return (
      <View style={{flex:1,backgroundColor:'F8F8F8'}}>
      
      <KeyboardAwareScrollView enableOnAndroid={true} enableAutoAutomaticScroll={true} keyboardOpeningTime={0}>
      <View style={{height:'30%'}}/>
      <FontAwesome name='stumbleupon' size={80} style={{color:'#8e44ad',alignSelf:'center',padding:30,shadowOffset: { width: 0, height: 0, },shadowColor: '#884BF2',shadowOpacity: 0.5,shadowRadius: 20}} />
      <Input onChangeText={(recipient) =>{this.setState({recipient:recipient})}} value={this.state.recipient} placeholder='Send to ' /> 
      <Input keyboardType='numeric' onChangeText={(amount) =>{this.setState({amount:amount})}} value={this.state.amount} placeholder='Amount'/> 
      <SendButton onPress={()=>{this.Transact()}} title='Send' />
      </KeyboardAwareScrollView>
      

      
        
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      state:state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
