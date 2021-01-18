import React, {Component} from "react";
import {Image, Text, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button,Alert} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import Input from '../../Components/UI/Input';
import firebase from 'firebase';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ButtonCustom from '../../Components/UI/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {update_http_port} from '../../actions';
class Login extends Component {
  constructor(props) {
    super(props);
  }
  state={
    email:'',
    password:''
  }

  updatePort = async () =>{
    
    let uid = firebase.auth().currentUser.uid;
    
    await firebase.database().ref('users/'+ uid).once('value', async (snapchot)=>{
      
      await this.props.update_http_port(snapchot.val().httpPort)
      
    });
      
      
  }

  componentDidMount() {
    


    
    firebase.auth().onAuthStateChanged(user => {
      try{
        if (user != null) {
          this.updatePort();
          this.props.navigation.navigate('Home');


        }    
      }
      catch(error){
        console.log(error.toString(error))
      }})
    
    }
    //HEADER 
    static navigationOptions = {
      header: null,
    };

    AuthUser =()=>{
      try {
        firebase.auth().signInWithEmailAndPassword(this.state.email + '@test.com', this.state.password).then(()=>{this.props.navigation.navigate('Home');}).catch(((error)=>{Alert.alert(error.message)}))
      } catch (error) {
            Alert.alert(error.toString(error));
          }
    }

  render() {
    const navigation = this.props.navigation;

    

    return (
      <View style={{flex:1,backgroundColor:'#F8F8F8'}}>
      <KeyboardAwareScrollView enableOnAndroid={true} enableAutoAutomaticScroll={true} keyboardOpeningTime={0}>
      <View style={{height:'20%'}} />
        <FontAwesome name='stumbleupon' size={80} style={{color:'#8e44ad',alignSelf:'center',padding:30,shadowOffset: { width: 0, height: 0, },shadowColor: '#884BF2',shadowOpacity: 0.5,shadowRadius: 20}} />
        <Input value={this.state.email} onChangeText={(email)=>{this.setState({email:email})}} placeholder='Email' />
        <Input secureTextEntry={true} value={this.state.password}  onChangeText={(password)=>{this.setState({password:password})}} placeholder='Password' />
        <ButtonCustom onPress={()=>{this.AuthUser()}} Text='Login'/>
        <Button onPress={()=>{navigation.navigate('SignUp')}} title='Create an account'/>
        <View style={{height:100,padding:100}} />
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
      update_http_port: (httpPort) => dispatch(update_http_port(httpPort)),
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
