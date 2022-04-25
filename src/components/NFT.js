import React from 'react';

import {Image, Button, Container, Carousel} from 'react-bootstrap';

import AccordionFN from './AccordionFN.js';

import CoolDog from '../assets/nft-images/cool.png';
import PartyDog from '../assets/nft-images/party.png';
import PirateDog from '../assets/nft-images/pirate.png';
import WizardDog from '../assets/nft-images/wizard.png';
import BandanaDog from '../assets/nft-images/bandana.png';
import BusinessDog from '../assets/nft-images/business.png';
import ContentDog from '../assets/nft-images/content.png';
import HippoDog from '../assets/nft-images/hippo.png';
import LootFull from '../assets/TradeLootex-dark.svg';


function NFT() {

  return (
    <div className="nft-page-container">
      <h1 className="why-NFT-head">WHY YUMMY NFT?</h1>  
        <div className="NFT-description">
          <h2>Yummy Dogs are 10,000 cute NFTs created from hundreds of possible traits. Each NFT is proveably unique, with traits randomly assigned at mint. Each Yummy Dog grants its owner access to the Yummy ecosystem, including educational content, additional staking rewards, and more!</h2>
          <ul className="nft-reasons-container">
            <li><h4 className="nft-reason">10,000 NFTs Limited Minting</h4></li>
            <li><h4 className="nft-reason">Discounts on Yummy Academy </h4></li>
            <li><h4 className="nft-reason">Yummy Staking Boosts</h4></li>
            <li><h4 className="nft-reason">Tax Free Yummy</h4></li>
          </ul>   
        </div>

           

      <a className="mint-btn-link" href="https://lootex.io/stores/yummy-dog-nft" target="_blank" rel="noreferrer noopener">
        <img alt="LOOTex"src={LootFull}></img>
      </a>

       <Container className="yummy-dog-carousel">
          <Carousel>
            <Carousel.Item>
              <Image className="yummy-dog" src={PartyDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={CoolDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={PirateDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={WizardDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={BandanaDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={BusinessDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={HippoDog}></Image>
            </Carousel.Item>
            <Carousel.Item>
              <Image className="yummy-dog" src={ContentDog}></Image>
            </Carousel.Item>
            </Carousel>
        </Container>

      <div className="FAQ-container">
        <h1>FAQ</h1>
        <AccordionFN></AccordionFN>
      </div>
    </div>
  );
}

export default NFT;