import React from 'react';
import {Tabs,Tab} from 'react-bootstrap';

import TrustStep1 from '../assets/gifs/truststep1.gif'
import TrustStep2 from '../assets/gifs/truststep2.gif'
import TrustStep3 from '../assets/gifs/truststep3.gif'
import TrustStep4 from '../assets/gifs/truststep4.gif'
import TrustStep5 from '../assets/gifs/truststep5.gif'
import TrustStep6 from '../assets/gifs/truststep6.gif'

function LearnTrustWallet(){
        return (
            <Tabs defaultActiveKey="Step1" className="trust-wallet-steps mb-3">
                    <Tab eventKey="Step1" title="Step 1">
                    <img alt="Trust Step"className="truststep"src={TrustStep1}></img>
                    <div className="instructions">
                        <h3>DOWNLOAD TRUST WALLET TO YOUR SMART PHONE</h3>
                        <p>This is where your Yummy Coins will be securely stored.</p>
                        <p>Once downloaded, click on “create a new wallet” and follow
                        the set up instructions. Remember to write down your secret recovery
                        phrase on a piece of paper. Since this can be used by anyone to access your wallet,
                        it is very important to keep these phrases secure. </p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step2" title="Step 2">
                    <img alt="Trust Step"className="truststep"src={TrustStep2}></img>
                    <div className="instructions">
                        <h3>GETTING BNB INTO YOUR TRUST WALLET</h3>
                        <p>Next we will need to get BNB into your Trust Wallet, which
                        can be done by either buying directly from Trust Wallet or
                        transferring your existing BNB from another wallet / exchange.</p>
                        <h3>Option A: Purchasing BNB on Trust Wallet</h3>
                        <p>To purchase BNB from your Trust Wallet, click on your BNB wallet and select “BUY” in the top right corner.
                        Enter the amount you want to purchase and click next (you will be redirected to another window to purchase).
                        Once you have completed your purchase BNB will be viewable in your wallet within 2-5 minutes.
                        </p>
                        <h3>Option B: Transferring BNB Into Your Wallet</h3>
                        <p>To transfer from another wallet, you will find your Trust Wallet BNB address by clicking BNB and then clicking the “receive” icon. 
                        On the receive page, you will find your unique Trust Wallet BNB address (it’s the 42 character address that starts with “bnb1”).
                        Copy the address and paste it into the exchange you are sending BNB from. You may have to complete a two-step authentication process by entering a code that will be texted to your mobile device from the wallet you are transferring BNB from.
                        </p>
                    </div>            
                    </Tab>
                    <Tab eventKey="Step3" title="Step 3">
                    <img alt="Trust Step"className="truststep"src={TrustStep3}></img>
                    <div className="instructions">
                        <h3>SWAP BNB FOR BNB SMART CHAIN</h3>
                        <p>
                        Now that you have BNB in your Trust Wallet, we will need to convert it 
                        into what’s called BNB Smart Chain so you can purchase Yummy Coin!
                        </p>
                        <p>
                        On the lower part of your Trust Wallet home page,
                        you will see an icon that says DEX.
                        Click the DEX icon and then locate the button that says swap,
                        directly above this button you will input the amount of BNB you
                        want to convert into BNB Smart Chain.
                        </p>
                        <p>
                        In the top box underneath the “You Pay”, select BNB.
                        In the lower box under “You Get”, select BNB Smart Chain.
                        </p>
                        <p>
                        Now click on the 0 in the top box and select the total amount of BNB
                        you want to swap for BNB Smart Chain. Click “Swap” to complete the transaction.
                            Please note, If you can’t swap all of your BNB for BNB Smart Chain,
                            you may need to decrease the amount of BNB you swap for BNB Smart Chain
                            slightly to cover transaction fees.
                        </p>
                        <p>
                        (Helpful hint — always keep a few dollars worth of BNB Smart Chain
                        in your wallet for transaction fees).
                        </p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step4" title="Step 4">
                    <img alt="Trust Step"className="truststep"src={TrustStep4}></img>
                    <div className="instructions">
                        <h3>ENABLING YOUR BROWSER ON TRUST WALLET</h3>
                        <p>*If you are using an Android smartphone or desktop computer, you can skip this step.</p>
                        <p>
                        Next, we will be enabling browser access in Trust Wallet so that you’ll be able to continue to the next step. 
                        If you are an iPhone user, open Safari and copy and paste trust://browser_enable into the address bar. 
                        Approve the prompt that comes up and then continue to the next step.
                        </p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step5" title="Step 5">
                    <img alt="Trust Step"className="truststep"src={TrustStep5}></img>
                    <div className="instructions">
                        <h3>PURCHASING YUMMY IN THE PANCAKESWAP EXCHANGE</h3>
                        <p>Contract Address: 0xB003C68917BaB76812797d1b8056822f48E2e4fe</p>
                        <p>Now that you’ve enabled browser access, you should now see four icons on the bottom of your Trust Wallet.</p>
                        <p>Click the browser icon (second from the left), search for “PancakeSwap,” and then click PancakeSwap to access the exchange.</p>
                        <p>From within PancakeSwap, click “Connect” in the upper right corner and then “Connect to Trust Wallet” in order to connect PancakeSwap to your Trust Wallet. This will allow you to trade your BNB Smart Chain for Yummy Coin.</p>
                        <p>If you’re not already in it, please select Exchange from the menu icon located at the top left part of the screen.</p>
                        <p>Once connected you will be in the exchange window, we’re going to need to search for and then select the $YUMMY token.</p>
                        <p>Before you actually trade your BNB for Yummy Coin, we’re going to need to adjust your “slippage tolerance” (this allows for a trade to be completed while prices fluctuate). In the upper right corner of the exchange window, click the three little lines to access the slippage tolerance options window.</p>
                        <p>People have had success with a few different amounts depending on the volume of transactions that are going on at a given time, but 12% is the most commonly used (we’d recommend trying 11.1% to start).</p>
                        <p>Click accept, agree to any prompts that come up and then return to the main exchange window.</p>
                        <p>In the upper “from” field, click BNB if it isn’t already selected.</p>
                        <p>In the lower “to” field, you’ll need to click “select a currency” and then search for $YUMMY by pasting in this token contract: 0xB003C68917BaB76812797d1b8056822f48E2e4fe</p>
                        <p>You should see YUMMY in the drop down list:</p>
                        <span>In the upper box, please select the amount of BNB that you want to transfer to YUMMY. If you want to swap all of your BNB for YUMMY, click the MAX button (though we recommend always keeping at least $10 in BNB for future trades).</span>
                        <p>If everything looks correct and you’re comfortable with the amounts, click accept on all of the prompts that come up in order to execute the trade.</p>
                    </div>
                    </Tab>
                    <Tab eventKey="Step6" title="Step 6">
                    <img alt="Trust Step"className="truststep"src={TrustStep6}></img>
                    <div className="instructions">
                        <h3>HAVE YUMMY COIN SHOW UP IN YOUR TRUST WALLET LIST</h3>
                        <p>If your trade(s) have been successful, you’re now officially a Yummy Coin holder!</p>
                        <p>
                        In order to see your total amount of tokens in your wallet, we will now need to add Yummy Coin to the Trust Wallet view window. 
                        Click out to the tokens window and then look for the icon in the very top right corner with two lines and two dots on it.
                        </p>
                        <p>
                        Click that icon and then paste the Yummy Contract ID number in the search bar: 0xB003C68917BaB76812797d1b8056822f48E2e4fe
                        Select the button to the right as green and then return to the main window to see your total token amount.
                        </p>
                        <h2><strong>Welcome to Yummy Coin!</strong></h2>
                    </div>
                    </Tab>
                </Tabs>                
        );
    } 

export default LearnTrustWallet;