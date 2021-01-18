export function update_http_port(httpPort){
  return {type: "UPDATE_HTTP_PORT",httpPort:httpPort}
}
export function update_balance(balance){
  return {type: "UPDATE_BALANCE",balance:balance}
}
export function update_transactions(transactions){
  return {type: "UPDATE_TRANSACTIONS",transactions:transactions}
}
