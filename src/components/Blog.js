import React from 'react';
import { Get } from 'react-axios';
import {Card} from 'react-bootstrap';

const RSSFeed = "https://medium.com/feed/@YummyCrypto";
const RSSFeed2 = "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@YummyCrypto";



function Blog() {
  return (
    <Get url={RSSFeed} > 
    
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (<div>{response.data}</div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>
  );
}

export default Blog