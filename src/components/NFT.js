import React from 'react';

import NFTCard from './NFTCard.js';

import LogoSquare from '../assets/LogoSquare.png';

import BandanaDog from '../assets/nft-images/bandana.png';
import BusinessDog from '../assets/nft-images/business.png';
import ContentDog from '../assets/nft-images/content.png';
import CoolDog from '../assets/nft-images/cool.png';
import HippoDog from '../assets/nft-images/hippo.png';
import PartyDog from '../assets/nft-images/party.png';
import HatDog from '../assets/nft-images/niceHat.png';
import PirateDog from '../assets/nft-images/pirate.png';
import ShadesDog from '../assets/nft-images/shades.png';
import WizardDog from '../assets/nft-images/wizard.png';


function NFT() {

  return (
    <div className="nft-page-container">
      <div className="nft-header-container">
        {/* <img src={LogoSquare}></img> */}
        <h1>WHY YUMMY NFT?</h1>
        <div className="nft-reasons-container">
          <h2 className="nft-reason--20deg">10,000 NFTs Limited Minting</h2>
          <h2 className="nft-reason-20deg">Discounts on Yummy Academy </h2>
          <h2 className="nft-reason-10deg">Yummy Staking Boosts</h2>
          <h2 className="nft-reason--10deg">Tax Free Yummy</h2>
          <h2 className="nft-reason-10deg">Giveaways</h2>
          <h2 className="nft-reason--10deg">Growth Fund Yield for life</h2>
        </div>
        <h1>THE MORE YOU COLLECT, THE MORE YOU GET!</h1>
      </div>
      <div className="nft-container">
        <NFTCard title="Bandana Dog w/ a bowtie" text="Wtf is this outfit? 😂" image={BandanaDog}></NFTCard>
        <NFTCard title="Business Dog" text="Sell me this pizza." image={BusinessDog}></NFTCard>
        <NFTCard title="Chill Boy" text="Rudy stole his favorite preworkout." image={ContentDog}></NFTCard>
        <NFTCard title="Party Dog" text="Let's PARTY!" image={PartyDog}></NFTCard>
        <NFTCard title="Hippo Dog" text="IDK." image={HippoDog}></NFTCard>
        <NFTCard title="Nice Shades, Dog!" text="Life is good with shades." image={CoolDog}></NFTCard>
        <NFTCard title="Hat Dog" text="Nice Hat." image={HatDog}></NFTCard>
        <NFTCard title="Captain Jack Dog" text="But you have heard of me?" image={PirateDog}></NFTCard>
        <NFTCard title="Chill Dog" text="Chill af" image={ShadesDog}></NFTCard>
        <NFTCard title="Magic Boxer" text="He knows a spell or two." image={WizardDog}></NFTCard>
      </div>
    </div>
  );
}

export default NFT;