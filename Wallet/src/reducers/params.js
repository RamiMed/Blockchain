

const initialState = {
  httpPort: '',
  balance:0,
  transactions:[]
}

const params = function(state = initialState, action) {
  switch(action.type){
    case "UPDATE_HTTP_PORT":
      return {
        ...state,
        httpPort: action.httpPort
      }
      case "UPDATE_BALANCE":
      return {
        ...state,
        balance: action.balance
      }
      case "UPDATE_TRANSACTIONS":
      return {
        ...state,
        transactions: action.transactions
      }
      

    default: return state;
  }
}

export default params;
