import React from 'react';

import {Image} from 'react-bootstrap';

import AccordionFN from './AccordionFN.js';
import ModalFN from './ModalFN.js';

import CoolDog from '../assets/nft-images/cool.png';
import PartyDog from '../assets/nft-images/party.png';
import PirateDog from '../assets/nft-images/pirate.png';
import WizardDog from '../assets/nft-images/wizard.png';
import BandanaDog from '../assets/nft-images/bandana.png';
import BusinessDog from '../assets/nft-images/business.png';
import ContentDog from '../assets/nft-images/content.png';
import HippoDog from '../assets/nft-images/hippo.png';


function NFT() {

  return (
    <div className="nft-page-container">
      <ModalFN centered></ModalFN>
      <div className="nft-header-container">
        <h1>WHY YUMMY NFT?</h1>
        <div className="NFT-description"><p>Yummy Dogs are 10,000 cute NFTs with created from hundreds of possible traits. Each NFT is proveably unique, with traits randomly assigned at mint. Each Yummy Dog grants its owner access to the Yummy ecosystem, including educational content, additional staking rewards, and more!</p></div>        
        <ul className="nft-reasons-container">
          <li><h2 className="nft-reason">10,000 NFTs Limited Minting</h2></li>
          <li><h2 className="nft-reason">Discounts on Yummy Academy </h2></li>
          <li><h2 className="nft-reason">Yummy Staking Boosts</h2></li>
          <li><h2 className="nft-reason">Tax Free Yummy</h2></li>
          <li><h2 className="nft-reason">Growth Fund Yield for life</h2></li>
        </ul>
      </div>

      <h1>Yummy Dog Gallery</h1>
      <div className="nft-container">        
        <Image className="yummy-dog" src={PartyDog}></Image>
        <Image className="yummy-dog" src={CoolDog}></Image>
        <Image className="yummy-dog" src={PirateDog}></Image>
        <Image className="yummy-dog" src={WizardDog}></Image>
        <Image className="yummy-dog" src={BandanaDog}></Image>
        <Image className="yummy-dog" src={BusinessDog}></Image>
        <Image className="yummy-dog" src={HippoDog}></Image>
        <Image className="yummy-dog" src={ContentDog}></Image>
      </div>

      <div className="FAQ-container">
        <h1>FAQ</h1>
        <AccordionFN></AccordionFN>
      </div>
    </div>
  );
}

export default NFT;