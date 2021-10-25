import React from 'react';

import NFTCard from './NFTCard.js';
import AccordionFN from './AccordionFN.js';
import ModalFN from './ModalFN.js';

import CoolDog from '../assets/nft-images/cool.png';
import PartyDog from '../assets/nft-images/party.png';
import PirateDog from '../assets/nft-images/pirate.png';
import WizardDog from '../assets/nft-images/wizard.png';


function NFT() {

  return (
    <div className="nft-page-container">
      <ModalFN centered></ModalFN>
      <div className="nft-header-container">
        <h1>WHY YUMMY NFT?</h1>
        <div className="NFT-description"><p>Yummy Dogs are 10,000 cute NFTs with created from hundreds of possible traits. Each NFT is proveably unique, with traits randomly assigned at mint. Each Yummy Dog grants its owner access to the Yummy ecosystem, including educational content, additional staking rewards, and more!</p></div>        
        <div className="nft-reasons-container">
          <h2 className="nft-reason--15deg">10,000 NFTs Limited Minting</h2>
          <h2 className="nft-reason-5deg">Discounts on Yummy Academy </h2>
          <h2 className="nft-reason-10deg">Yummy Staking Boosts</h2>
          <h2 className="nft-reason--10deg">Tax Free Yummy</h2>
          <h2 className="nft-reason--5deg">Growth Fund Yield for life</h2>
        </div>
      </div>
      <div className="nft-container">
        <NFTCard title="Party Dog" text="Let's PARTY!" image={PartyDog}></NFTCard>
        <NFTCard title="Nice Shades, Dog!" text="Life is good with shades." image={CoolDog}></NFTCard>
        <NFTCard title="Captain Jack Dog" text="But you have heard of me?" image={PirateDog}></NFTCard>
        <NFTCard title="Magic Boxer" text="He knows a spell or two to KO." image={WizardDog}></NFTCard>
      </div>

      <div className="FAQ-container">
        <h1>FAQ</h1>
        <AccordionFN></AccordionFN>
      </div>
    </div>
  );
}

export default NFT;