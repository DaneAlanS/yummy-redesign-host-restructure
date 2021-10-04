import React from 'react';
import { Get } from 'react-axios';

const API_URL ="https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0xb003c68917bab76812797d1b8056822f48e2e4fe&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=D3BTMKB4RKTC3YNQDZUI8CX7J9B4M48SNA"

function Circulation() {
  return (
    <div>
      <Get url={API_URL}>
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (<div style={{fontSize:"100px"}}>{1000000000000-(response.data.result/1000000000)}</div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
    </div>
  );
}

export default Circulation