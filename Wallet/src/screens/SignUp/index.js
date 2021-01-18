import React, {Component} from "react";
import {Image, Text, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button,Alert} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Input from '../../Components/UI/Input';
import firebase from 'firebase';
import ButtonCustom from '../../Components/UI/ButtonCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  state={
    name:'',
    email:'',
    password:'',
    repassword:'',
    nbUsers:  0,
    defaultPort:3001,
  }

  async componentDidMount(){
    await firebase.database().ref('users/').once('value', (snapchot)=>{this.setState({nbUsers:_.size(snapchot.val())})});

  }
  //HEADER 
  static navigationOptions = {
    header: null,
  };
  checkPassword=()=>{
    if (this.state.password == this.state.repassword ){
      return true
    }
  }
  SignUp = async () =>{
    if(this.checkPassword()){

      

      await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email+'@test.com', this.state.password)
      .then(async () => { 
        firebase.auth().signInWithEmailAndPassword(this.state.email + '@test.com', this.state.password).then(async ()=>{
          await firebase.auth().onAuthStateChanged(async (user) => {
            try{
              if (user != null) {
                
                console.log(user)
                
                await firebase.database().ref('users/'+user.uid ).set(
                  {httpPort: this.state.defaultPort + this.state.nbUsers}
                ); await this.props.navigation.navigate('Login')
              }    
            }
            catch(error){
              console.log(error.toString(error))
            }})


        }).catch(((error)=>{Alert.alert(error.message)}))

       
        
        })
      .catch(error => Alert.alert(error.toString(error)))

    }}

  render() {
    const navigation = this.props.navigation;
    

    return (
      <View style={{flex:1,backgroundColor:'#F8F8F8'}}>
      
      <KeyboardAwareScrollView enableOnAndroid={true} enableAutoAutomaticScroll={true} keyboardOpeningTime={0}>
      <View style={{height:'15%'}} />
        <FontAwesome name='stumbleupon' size={80} style={{color:'#8e44ad',alignSelf:'center',padding:30,shadowOffset: { width: 0, height: 0, },shadowColor: '#884BF2',shadowOpacity: 0.5,shadowRadius: 20}} />
        <Input value={this.state.name} onChangeText={(name)=>{this.setState({name:name})}} placeholder='Full Name' />
        <Input value={this.state.email} onChangeText={(email)=>{this.setState({email:email})}} placeholder='Email' />
        <Input value={this.state.password} secureTextEntry={true} onChangeText={(password)=>{this.setState({password:password})}} placeholder='Password' />
        <Input value={this.state.repassword} secureTextEntry={true} onChangeText={(repassword)=>{this.setState({repassword:repassword})}} placeholder='Password Verification'/>
        <ButtonCustom onPress={()=>{this.SignUp()}} Text='Sign Up'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
