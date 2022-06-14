import React from 'react';

import BlueBG from '../assets/BG-1.png';

function Footer() {

  return (
    <div className="footer-wrapper">
        <div className="full-socials" style={{ backgroundImage: `url(${BlueBG})` }}>              
                <div className="copyright">
                  <span>© 2021 YUMMY CRYPTO.&nbsp;&nbsp;All rights reserved</span>
                </div>

                <div className='disclaimer-wrapper'>            
              <div className="legal">
                <div>
                  <p><strong>LEGAL DISCLAIMER: </strong>
                      The information provided on YummyCrypto.com does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website’s content as such. The Yummy team does not recommend that any cryptocurrency should be bough, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions. By purchasing Yummy, you agree that you are not purchasing a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token “as is” and is not required to provide any support or services. You should have no expectation of any form from Yummy and its team. Although Yummy is a community driven token for social networking and not a registered digital currency, the team strongly recommends that citizens in areas with government bans on Crypto do not purchase it because the team cannot ensure compliance with your territory’s regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
                  </p>
                  <p><strong>RISK DISCLOSURE: </strong>
                    Please note there are always risks associated with smart-contracts. Please use at your own risk. Yummy is not a registered broker, analyst, or investment advisor. Everything that’s provided on this site is purely for guidance, informational and educational purposes, and fun. All information contained herein should be independently verified and confirmed. We do not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services. Please be aware of the risks involved with any trading done in any financial market. Do not trade with money that you cannot afford to lose.
                  </p>
                </div>
              </div>
            </div>

                <div className="socials-footer">
                  {/* <a href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i class="fab fa-twitter-square"></i></a> */}
                  <a href="https://discord.gg/NEdEp5455r" target="_blank" rel="noreferrer noopener"><i class="fab fa-discord"></i></a>
                  <a href="https://medium.com/@YummyCrypto" target="_blank" rel="noreferrer noopener"><i class="fab fa-medium"></i></a>
                  <a href="https://t.me/yummyfinance" target="_blank" rel="noreferrer noopener"><i class="fab fa-telegram-plane"></i></a>
                  <a href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i class="fab fa-reddit-square"></i></a>
                  <a href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i class="fab fa-facebook-square"></i></a>
                  <a href="https://www.instagram.com/yummycryptoofficial/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram-square"></i></a>
                  <a href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i class="fab fa-youtube-square"></i></a>
                </div>

            
          </div>
    </div>
  );
}

export default Footer;