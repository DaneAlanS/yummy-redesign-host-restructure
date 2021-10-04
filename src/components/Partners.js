import React from "react";




import BKFCLogo from '../assets/partners/BareKnuckle.png';
import CoinGecko from '../assets/partners/CoinGecko.png';
import BitmartLogo from '../assets/partners/bitmart.png';
import CoinBase from '../assets/partners/coinbase.png';
import CoinHunt from '../assets/partners/coinhunt.png';
import CoinMarket from '../assets/partners/coinmarketcap.png';
import BSCscan from '../assets/partners/bscscan.png';
import Bcharity from '../assets/partners/Bcharity.png';
import Foundation from '../assets/partners/21foundation.png';
import Sorai from '../assets/partners/sorai.png';
import MDAppeal from '../assets/partners/mdappeal.jpg';
import SpaceGang from '../assets/partners/spacegang.png';
import Soku from '../assets/partners/soku.png';
import DreamField from '../assets/partners/dreamfield_logo.png';
import Slam from '../assets/partners/slam.png'
import PCS from '../assets/partners/pancakeswap.png';

function Partners() {


  return (
    <div className="partner-grid-wrapper">
          <span>Check Out Our Partners!</span>
          <div className="partner-grid">
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.bareknuckle.tv/" data-aos="fade-up"  data-aos-delay="500" data-aos-duration="1000">
              <img alt="BKFC"src={BKFCLogo}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.sokuswap.org/" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Soku Swap"src={Soku}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://pancakeswap.finance/swap" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Pancake Swap"src={PCS}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.dreamfield.co/" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000"> 
              <img alt="DreamField"src={DreamField}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://slamtoken.com/" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Slam Token"src={Slam}></img>
            </a>            
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.bitmart.com/en" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Bitmart Exchange"src={BitmartLogo}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.binance.charity/" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Binance Charity"src={Bcharity}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://marinadalglishappeal.org/" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="MDAppeal"src={MDAppeal}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://oursorai.com/" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Sorai"src={Sorai}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://21foundation.com/" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
              <img alt="21 foundation"src={Foundation}></img>
            </a>            
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://spacegang.club/" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
              <img alt="SpaceGang"src={SpaceGang}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.coinbase.com/" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Coinbase Exchange"src={CoinBase}></img>
            </a>
            <a className="logo-container square" target="_blank" rel="noreferrer noopener" href="https://coinhunt.cc/" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">
              <img alt="CoinHunt"src={CoinHunt}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://coinmarketcap.com/" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Coinmarketcap"src={CoinMarket}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://www.coingecko.com/en" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="Coin Gecko"src={CoinGecko}></img>
            </a>
            <a className="logo-container" target="_blank" rel="noreferrer noopener" href="https://bscscan.com/" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <img alt="BSCscan"src={BSCscan}></img>
            </a>
                                    
          </div>
    </div>
  );
}

export default Partners;