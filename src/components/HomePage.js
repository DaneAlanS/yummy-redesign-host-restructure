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
        <h1 className="fluid-type">Delivering <span style={{color:"#F47E14"}}>Value</span> Through <span style={{color:"#F47E14"}}>Algorithms.</span></h1>
        <h3 className="yummy-desc">Yummy Crypto is a project that launched with a clear vision to deliver value to holders via <span style={{color:"#F47E14"}}>Growth Fund</span> while providing contributions to help solve some of the world's most pressing issues.</h3>
        <div className="video-wrapper">
          <iframe width="850" height="487" src="https://www.youtube.com/embed/ekfwTjTuI4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="contract-address">Contract Address: <span>0xB003C68917BaB76812797d1b8056822f48E2e4fe</span></div>          
        </div>
        <div className="home-button-wrapper">
          <Button className="home-top-button"href="https://www.staking.yummy-crypto.com/" target="_blank" rel="noreferrer noopener">Stake Your Yummy!</Button>
          <Button href="https://apeboard.finance/dashboard/0x50573352064DfC51abee7Bccb6113642abe80908?chain=BSC" target="_blank" rel="noreferrer noopener">Check Out Our Growth Fund!</Button>
          <Button href="https://www.binance.charity/project/old/binance-lunch-for-children" target="_blank" rel="noreferrer noopener">Check Our Donation Records!</Button>
          <Button href="/howtobuy">Need Help Buying Yummy?</Button>
          <Button  href="https://www.dextools.io/app/bsc/pair-explorer/0x09ae75e7884f347103dc0f586331611da8b7b824" target="_blank" rel="noreferrer noopener">View The Price Graph!</Button>
        </div>
      </div>


      <div className="divider">
        <Image className="transparent-logo"src={TransparentLogo}></Image>
        <div className="divider-text-wrapper" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
          <h3>Within our short history, we've already donated over $1.1M, and 55% of the total token supply has been burned as a method to return value to our holders. And that's just the start of it!</h3>
          <h3>We recently introduced our <span style={{color:"#93295B"}}>Growth Fund</span> to further maximize Yummy holders' returns through daily buybacks and burns. In addition, we have secured partnerships with prominent industry players such as Bare Knuckle FC to further advance our social exposure within the crypto space and have much more in the works!</h3>
        </div>
        <div className="milestones-wrapper" >
          <div className="milestone" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
            <h3>$1,125,000</h3>
            <h3 className="milestone-title">AMOUNT DONATED</h3>
            <h5>Total of our (blockchain verified) donations to Binance Lunch For Children</h5>
          </div>
          <div className="milestone" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
            <h3>$1,600,000</h3>
            <h3 className="milestone-title">GROWTH FUND</h3>
            <h5>The Growth Fund is a vital part of the V2 Ecosystem that burns Yummy daily.</h5>
          </div>
          <div className="milestone" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
            <h3>$3,000</h3>
            <h3 className="milestone-title">DAILY REWARDS</h3>
            <h5>The Growth Fund buys and burns 3-4 Billion Yummy weekly.</h5>
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