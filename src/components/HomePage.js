import React, {useEffect} from "react";
import {Button, Image} from 'react-bootstrap';

import Partners from './Partners.js';

import TransparentLogo from '../assets/YummyLogoTransparent.svg';
import Wave from '../assets/wave.svg';
import Sprout from '../assets/sprout.png';

import Aos from "aos";
import "aos/dist/aos.css";

function HomePage() {
    useEffect(()=>{
        Aos.init({
            once:true
        });
    },[])

  return (
    <div className="home-page-wrapper">
      <div className="landing-wrapper">
        <h1 className="fluid-type">Together We're <span style={{color:"#F47E14"}}>Changing Lives</span> Across The Globe.</h1>
        <h3>Yummy Crypto is a project launched on May 1st with a clear vision to deliver value to holders via <span style={{color:"#F47E14"}}>Growth Fund</span> while providing contributions to help solve some of the world's most pressing issues.</h3>
         <Button className="nft-button" href="/NFT">NEW Yummy NFTs!</Button>
        <div className="video-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/suY1heK1MA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="contract-address">Contract Address: <span>0xB003C68917BaB76812797d1b8056822f48E2e4fe</span></div>
        </div>
        <div className="landing-buttons-wrapper">
          <div className="buy-button-wrapper">
            <div className="landing-button-grid">          
              <Button href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener">Buy On Bitmart</Button>
              <Button href="https://pancakeswap.finance/swap?outputCurrency=0xb003c68917bab76812797d1b8056822f48e2e4fe" target="_blank" rel="noreferrer noopener" >Buy On Pancakeswap</Button>
              <Button href="https://app.sokuswap.finance/bsc/#/swap?inputCurrency=0xB8c77482e45F1F44dE1745F52C74426C631bDD52?&outputCurrency=0xB003C68917BaB76812797d1b8056822f48E2e4fe"  target="_blank" rel="noreferrer noopener">Buy On Soku</Button>
              <Button className="price-graph"href="https://poocoin.app/tokens/0xb003c68917bab76812797d1b8056822f48e2e4fe"  target="_blank" rel="noreferrer noopener">View Price Graph</Button>
            </div>
          </div>
          <div className="buy-button-wrapper">            
            <div className="landing-button-grid">          
              <Button href="/howtobuy">How To Buy Yummy</Button>
              <Button href="https://apeboard.finance/dashboard/0x50573352064DfC51abee7Bccb6113642abe80908?chain=BSC"  target="_blank" rel="noreferrer noopener">Check Growth Fund Balance</Button>
              <Button href="https://www.binance.charity/binance-lunch-for-children"  target="_blank" rel="noreferrer noopener">Check Donation Records</Button>     
              <Button href="https://yummyupgrade.com/" target="_blank" rel="noreferrer noopener">Upgrade From Yummy V1 To V2</Button>
            </div>
          </div>
        </div>
      </div>


      <div className="divider">
        <Image className="transparent-logo"src={TransparentLogo}></Image>
        <div className="divider-text-wrapper" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          <h3>Within our short history, we've already donated over $1.1M, and 35% of the total token supply has been burned as a method to return value to our holders. And that's just the start of it!</h3>
          <h3>We recently introduced our <span style={{color:"#93295B"}}>Growth Fund</span> to further maximize Yummy holders' returns through daily buybacks and burns. In addition, we have secured partnerships with prominent industry players such as Bare Knuckle FC to further advance our social exposure within the crypto space and have much more in the works!</h3>
        </div>
        <div className="milestones-wrapper" >
          <div className="milestone" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
            <h3>$1,125,000</h3>
            <h3 className="milestone-title">AMOUNT DONATED</h3>
            <h5>Total of our (blockchain verified) donations to Binance Lunch For Children</h5>
          </div>
          <div className="milestone" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
            <h3>$1,150,000</h3>
            <h3 className="milestone-title">GROWTH FUND</h3>
            <h5>The Growth Fund is a vital part of the V2 Ecosystem that burns Yummy daily.</h5>
          </div>
          <div className="milestone" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
            <h3>75,000+</h3>
            <h3 className="milestone-title">HOLDERS </h3>
            <h5>75,000 holders who have decided to join us in our mission to make the World a better place.</h5>
          </div>       
        </div> 
      </div>
      <Image src={Wave} className="wave"></Image>
     
      <div className="text-sprout-wrapper">
          <div className="sprout-text">
            <h4>Our leadership team is thoroughly passionate about the long term growth of Yummy. We work hard to have a positive impact in the World while also maximizing the returns to our Token Holders through exceptional tokenomics.</h4>
            <h4>We are placing an emphasis on complete transparency, sustainable strategic growth decisions and innovative marketing campaigns that will ensure Yummy will reach its maximum potential.</h4>
            <h4>In addition to daily updates throughout our social channels, our leadership is very frequently available on the Yummy Coin Telegram for you to ask questions, give feedback or provide ideas. All are welcome to our Telegram/Discord channels, even non-Yummy holders.</h4>
          </div>
          <Image src={Sprout} className="sprout-image"></Image>
      </div>
      <Partners/>
    </div>
  );
}

export default HomePage;