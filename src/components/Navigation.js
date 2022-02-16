import React, { useState }  from "react";

import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap';
import Hamburger from 'hamburger-react';



import Logo from '../assets/yummy-full-logo.svg';
import PCS from '../assets/partners/pancakeswap.png';
import Soku from '../assets/partners/soku.png';
import Bitmart from '../assets/partners/bitmart.png';
import Anji from '../assets/partners/anji.jpg';


function Navigation() {
  const [isOpen, setOpen] = useState(false)
  return (
    <Navbar bg="none" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand><a href="/"><Image className="nav-logo"src={Logo} fluid/></a></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" children={<Hamburger toggled={isOpen} toggle={setOpen} />} />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">    
                <NavDropdown title="Documents" id="basic-nav-dropdown">
                <NavDropdown.Item href="/whitepaper">Whitepaper</NavDropdown.Item>
                <NavDropdown.Item  target="_blank" rel="noreferrer noopener" href="https://github.com/Quillhash/Audit_Reports/blob/master/YummyToken%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf">Audit</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Buy Yummy" id="basic-nav-dropdown">
                <div className="nav-exchange">
                  <span>Exchange:</span>
                  <NavDropdown.Item href="https://www.bitmart.com/trade/en?symbol=YUMMY_USDT" target="_blank" rel="noreferrer noopener"><Image src={Bitmart} className="nav-partner-logo"/>Bitmart</NavDropdown.Item>
                </div>
                <div className="nav-swap">
                  <span>Swap:</span>
                  <NavDropdown.Item href="https://pancakeswap.finance/swap?outputCurrency=0xb003c68917bab76812797d1b8056822f48e2e4fe" target="_blank" rel="noreferrer noopener"><Image src={PCS} className="nav-partner-logo"/>Pancakeswap</NavDropdown.Item>
                  <NavDropdown.Item href="https://app.sokuswap.finance/bsc/#/swap?inputCurrency=0xB8c77482e45F1F44dE1745F52C74426C631bDD52?&outputCurrency=0xB003C68917BaB76812797d1b8056822f48E2e4fe"  target="_blank" rel="noreferrer noopener"><Image src={Soku} className="nav-partner-logo"/>Sokuswap</NavDropdown.Item>
                  <NavDropdown.Item href="https://app.anji.eco/swap?token=YUMMY"  target="_blank" rel="noreferrer noopener"><Image src={Anji} className="nav-partner-logo"/>AnjiEco</NavDropdown.Item>
                </div>
                </NavDropdown>

                <Nav.Link href="/NFT">Yummy NFTs</Nav.Link>
                <Nav.Link href="https://yummycryptomerch.com/" target="_blank" rel="noreferrer noopener">Merchandise</Nav.Link>              

                <div className='nav-socials'>
                  <Nav.Link href="https://twitter.com/YummyCrypto" target="_blank" rel="noreferrer noopener"><i className="fab fa-twitter"></i></Nav.Link>
                    <Nav.Link href="https://t.me/yummycoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-telegram"></i></Nav.Link>
                    <Nav.Link href="https://www.reddit.com/r/yummycoin/" target="_blank" rel="noreferrer noopener"><i className="fab fa-reddit"></i></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/OfficialYummyCoin" target="_blank" rel="noreferrer noopener"><i className="fab fa-facebook"></i></Nav.Link>
                    <Nav.Link href="https://www.instagram.com/yummycryptoofficial/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram"></i></Nav.Link>
                    <Nav.Link href="https://www.youtube.com/c/YummyProjectOfficial/" target="_blank" rel="noreferrer noopener"><i className="fab fa-youtube"></i></Nav.Link>
                </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;