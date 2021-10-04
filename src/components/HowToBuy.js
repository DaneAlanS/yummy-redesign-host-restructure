import React, { useState}  from "react";
import LearnTrustWallet from "./LearnTrustWallet.js"
import LearnMetaWallet from "./LearnMetaWallet.js"

import {Container,Row, Col, Button} from 'react-bootstrap';



function HowToBuy() {
  const [isTrustWallet, setIsTrustWallet] = useState(true);

return (

    <Container className="how-to-buy-wrapper">
      <Row className="row-wrapper">
        <Col className="col-wrapper"> 
          <Row className="learning-phrase">
            <h1>HOW TO BUY YUMMY</h1>
            <span>Step-by-step instructions for purchasing Yummy Coin with Trust Wallet or MetaMask.</span>
          </Row>

        <Row className="how-to-video-wrapper">
          <Row className="glass-video-wrapper">      
                <iframe width="700" height="360" src="https://www.youtube.com/embed/bZup7IK7qrM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </Row>
        </Row>

          <Row>
            <Col className="button-wrapper">
                <Button className="wallet-button" onClick={() => setIsTrustWallet(true)}>GET STARTED WITH TRUST WALLET</Button>
            </Col>
            <Col className="button-wrapper">
                <Button className="wallet-button"  onClick={() => setIsTrustWallet(false)}>GET STARTED WITH METAMASK</Button>
            </Col>
          </Row>
          {isTrustWallet && <LearnTrustWallet></LearnTrustWallet>}
          {!isTrustWallet && <LearnMetaWallet></LearnMetaWallet>}
        </Col>        
      </Row>
    </Container>
  );
}

export default HowToBuy;