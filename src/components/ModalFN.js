import React,{useState} from 'react';

import {Button, Modal, Image} from 'react-bootstrap';

import TrustWalletLogo from '../assets/trustwallet.svg'
import MetaMaskLogo from '../assets/metamask-fox.svg'
import WalletConnectLogo from '../assets/walletconnect-logo.svg'

function ModalFN(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className="connect-wallet"  onClick={handleShow}>Connect Wallet</Button>

      <Modal show={show} onHide={handleClose} {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="wallet-logo-container">
            <div className="logo-container">              
              <Image className="connect-wallet-logo"src={WalletConnectLogo}></Image>
              <span>WalletConnect</span>
            </div>
            <div className="logo-container">   
              <Image className="connect-wallet-logo"src={TrustWalletLogo}></Image>
              <span>Trust Wallet</span>
            </div>
            <div className="logo-container">   
              <Image className="connect-wallet-logo"src={MetaMaskLogo}></Image>
              <span>Metamask</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          Haven’t got a crypto wallet yet?
          <Button variant="primary" onClick={handleClose}>
            Learn How to Connect
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFN