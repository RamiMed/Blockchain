import React, {Component} from "react";
import {Image, Text, View, ActionSheetIOS, Picker, Platform, TouchableOpacity, Button, ScrollView,RefreshControl} from "react-native";
import styles from "./style";
import { connect } from 'react-redux';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Transactions from '../../Components/UI/Transactions';
import SendButton from '../../Components/UI/SendButton';
import Dash from '../../Components/UI/Dash';
import firebase from 'firebase';
import {update_balance,update_transactions} from '../../actions/'
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state={
    balance:0,
    Transactions:[],
    refreshing: false,
  }

  componentDidMount(){
    this.getBalance();
    this.getTransactions();
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.refreshData().then(() => {
      this.setState({refreshing: false});
    });
  }
  componentWillMount() {
    
  }

  refreshData = async () => {
    await this.getBalance();
    await this.getTransactions();
  }

   getBalance = async () => {
    try {
      let response = await fetch(
        'http://localhost:'+ this.props.state.params.httpPort + '/balance',
      );
      let responseJson = await response.json();
      this.props.update_balance(responseJson.balance);
      
      //console.log(responseJson)
      
    } catch (error) {
      console.log(error);
    }
  }
  getTransactions = async () => {
    try {
      let response = await fetch(
        'http://localhost:'+ this.props.state.params.httpPort + '/my-transactions',
      );
      let responseJson = await response.json();

      //await this.setState({Transactions:responseJson.Transactions});
      await this.props.update_transactions(responseJson.Transactions);
      await console.log(this.props.state.params.transactions);
      
      

    } catch (error) {
      console.log(error);
    }
  }

  //HEADER 
  static navigationOptions = {
    header: null,
  };

  render() {
    const navigation = this.props.navigation;
    const transactions = this.props.state.params.transactions;
    

    return (
      <View style={{flex:1,backgroundColor:'#F8F8F8'}}>

      <View style={{height:'5%'}} /> 
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontWeight:'800',fontSize:25,padding:17,color:'#884BF2'}} >Wallet</Text>
        <TouchableOpacity onPress={()=>{firebase.auth().signOut().then(()=>{navigation.navigate('Login')})}}>
        <Text style={{fontWeight:'400',fontSize:17,padding:17,color:'#884BF2'}} >Sign Out</Text>
        </TouchableOpacity>

      </View>
      
        <Dash Balance={this.props.state.params.balance}/>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <SendButton title='Send' onPress={()=>{navigation.navigate('Send')}} />
        <SendButton title='Receive' onPress={()=>{navigation.navigate('Receive')}} />
        </View>
        
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <Transactions transactions={transactions}/>
        
        


        
          <View style={{height:50}} />  
        </ScrollView>

        



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
      update_balance: (balance) => dispatch(update_balance(balance)),
      update_transactions: (transactions) => dispatch(update_transactions(transactions)),
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
