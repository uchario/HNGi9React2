import ReactDom from 'react-dom';

import styles from './Modal.module.css';

import wallet_1 from '../assets/wallet_1.png';
import wallet_2 from '../assets/wallet_2.png';
import right_arrow from '../assets/right_arrow.png';

const Backdrop = (props) => {
    return (
        <div
            className={styles.backdrop} 
            onClick={props.onConfirm}
        />
    );
}

const ModalOverlay = (props) => {
    return (
        <div className={`${styles.modal}`}>
            <header>
                <h2>Connect Wallet</h2>
                <button onClick={props.onConfirm}>X</button>
            </header>
            <br/>
            <hr/>
            <p>Choose your preferred wallet:</p>
            <div className={`${styles.wallets}`}>
                <div className={`${styles['each-wallet']}`}>
                    <div className={`${styles['image-text']}`}>
                        <img src={wallet_1} alt='wallet_1'/>
                        <b>Metamask</b>
                    </div>
                    <div>
                        <img src={right_arrow} alt='right_arrow'/>
                    </div>
                </div>
                <div className={`${styles['each-wallet']}`}>
                    <div className={`${styles['image-text']}`}>
                        <img src={wallet_2} alt='wallet_2'/>
                        <b>WalletConnect</b>
                    </div>
                    <div>
                        <img src={right_arrow} alt='right_arrow'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>, 
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(
                <ModalOverlay
                    onConfirm={props.onConfirm}
                />, 
                document.getElementById('overlay-root')
            )}
        </>
    )
}

export default Modal;