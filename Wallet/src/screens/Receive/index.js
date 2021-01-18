import React, {Component} from "react";
import {Image, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button,Text,Share} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Input from '../../Components/UI/Input';
import SendButton from '../../Components/UI/SendButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


class Receive extends Component {
  constructor(props) {
    super(props);
  }


  state= {
    publicKey:''
  }

  getPublicKey = async () => {
    try {
      let response = await fetch(
        'http://localhost:'+ this.props.state.params.httpPort + '/public-key',
      );
      let responseJson = await response.json();
      this.setState({publicKey:responseJson.publicKey});
    } catch (error) {
      console.log(error);
    }
  }
  





  componentDidMount(){
    this.getPublicKey();
    
  }
  //HEADER 
  static navigationOptions = {
    header: null,
  };
  onShareIOS = async() =>{
    Share.share({
      message:this.state.publicKey
    })
  }

  render() {
    const navigation = this.props.navigation;
    

    return (
      <View style={{flex:1,backgroundColor:'F8F8F8'}}>
      <View style={{height:'20%'}} />
      <FontAwesome name='stumbleupon' size={80} style={{color:'#8e44ad',alignSelf:'center',padding:30,shadowOffset: { width: 0, height: 0, },shadowColor: '#884BF2',shadowOpacity: 0.5,shadowRadius: 20}} />
      <View style={{margin:20}}>
      <Text style={{fontWeight:'600',padding:10,alignSelf:'center'}} >Votre clé publique est : </Text>
      <TouchableOpacity onPress={()=>{this.onShareIOS()}}>
      <Text style={{fontWeight:'800',padding:10}} >{this.state.publicKey}</Text>
      </TouchableOpacity>
      <Text style={{fontWeight:'600',padding:10,alignSelf:'center'}} >Scannez le QR Code suivant : </Text>
      <Image style={{alignSelf:'center',margin:20,height:200,width:200}} source={{uri:'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='+ this.state.publicKey+'&color=884BF2'}}/>
     
      </View>

        
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

export default connect(mapStateToProps, mapDispatchToProps)(Receive);
