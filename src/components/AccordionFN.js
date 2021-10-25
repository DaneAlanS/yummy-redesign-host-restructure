import React from 'react';
import {Accordion} from 'react-bootstrap';

function AccordionFN() {

  return (
  <Accordion  flush>
  
  <Accordion.Item eventKey="0">
    <Accordion.Header>What are Yummy Dogs?</Accordion.Header>
    <Accordion.Body>
      Yummy Dogs are 10,000 cute NFTs with created from hundreds of possible traits. Each NFT is proveably unique, with traits randomly assigned at mint.
    </Accordion.Body>
  </Accordion.Item>

   <Accordion.Item eventKey="1">
    <Accordion.Header>What are the utility of Yummy Dogs?</Accordion.Header>
    <Accordion.Body>
      <p>Each Yummy Dog held gives you discount 10% in Yummy Academy. 10 gets you FREE Academy as long as you hold the NFTs.</p>
      <p>Each Yummy Dog (up to 100) gives you more in the Yummy Staking Pools for a max of 100%. Example: staking pool is yielding 140%. If you have 100 NFTs, yield is 280% instead (or 2x).</p>
      <p>Each Yummy Dog gives you further discount in future Yummy NFT purchases.</p>
      <p>Anyone with 50 Yummy Dog NFTs or more can buy up to $3,000 a month of Yummy Token tax free. At 100 Yummy NFTs that bonus is tripled to $9,000.</p>
      <p>Whoever reaches 1000 NFTs first can burn them to create the Hand of Thanos, a one-of-a-kind NFT that cannot be obtained through any other method. The Hand of Thanos gives you all above benefits PLUS 0.2% of Thanos Growth Fund yield for LIFE.</p>      
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>How will Yummy Dogs be launched?</Accordion.Header>
    <Accordion.Body>
      Join our Telegram or follow us on Twitter for updates. All Yummy Dog minting will be done at http://nft.yummy-crypto.com/
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header>How much does each Yummy Dog cost?</Accordion.Header>
    <Accordion.Body>
      0.2 BNB
    </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="4">
    <Accordion.Header>How many Yummy Dogs can I mint?</Accordion.Header>
    <Accordion.Body>
      You can mint up to 50 per transaction. There is no limit to the number of Yummy Dogs you can own.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header>Can I buy on mobile/use Metamask/TrustWallet?</Accordion.Header>
    <Accordion.Body>
      Yes! The minting process on works with all of them. You can buy on your phone, tablet, or computer. Any device with a valid BSC wallet will work.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header>Are there any special Yummy Dogs?</Accordion.Header>
    <Accordion.Body>
      <p>
      Yes! There are 8 Yummy Team admin NFTs, including our CEO Joe Foot, and COO Adam. Additionally, there are 10 community member NFTs, representing some notable users from our telegram. These 18 NFTs have attributes not found in any of the other NFTs.</p>
      <p>Finally, there is a single Alpha Yummy Dog NFT, the most exciting NFT in the set.</p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="7">
    <Accordion.Header>Tell me more about the Alpha Yummy Dog.</Accordion.Header>
    <Accordion.Body>
      <p>Whoever mints the Alpha Yummy Dog will immediately receive $10,000 in BNB, plus an all expenses paid trip to Las Vegas for the 1st Yummy Conference Event. When they arrive in Las Vegas, they will receive a $5,000 Visa Gift Card.</p>     
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="8">
    <Accordion.Header>Can I win Yummy Dogs in a giveaway?</Accordion.Header>
    <Accordion.Body>
      <p>Yes. We have reserved some Yummy Dog NFTs for giveaways. </p>
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
  );
}

export default AccordionFN;