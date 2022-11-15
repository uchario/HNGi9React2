import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import Modal from '../components/Modal';

import styles from '../App.module.css';

import metabnb from '../assets/metabnb.png';
import home from '../assets/home.png';
import footer_home from '../assets/footer_home.png';
import footer_metabnb from '../assets/footer_metabnb.png';
import facebook from '../assets/facebook_icon.png';
import twitter from '../assets/twitter_icon.png';
import insta_outer from '../assets/insta_outer.png';
import insta_inner from '../assets/insta_inner.png';

let currentYear = new Date().getFullYear();

const Root = () => {
    const [connectWallet, setConnectWallet] = useState(false);

    const connectWalletHandler = () => {
        setConnectWallet(true);
    }

    const removeWalletHandler = () => {
        setConnectWallet(false);
    }

    return (
        <>
            {connectWallet && (
            <Modal
                onConfirm={removeWalletHandler}
            />
            )}
            <nav className={styles.navbar}>
                <div className={`${styles['navbar-image']}`}>
                    <Link to={`/`}><img className={`${styles['home-icon']}`} src={home} alt="home_icon"/></Link>
                    <Link to={`/`}><img className={`${styles['home-text']}`} src={metabnb} alt="metabnb_icon"/></Link>
                </div>
                <div className={`${styles['nav-link']}`}>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`place`}>Place to stay</Link></li>
                        <li><a href=''>NFTs</a></li>
                        <li><a href=''>Community</a></li>
                    </ul>
                </div>
                <div className={`${styles['nav-button']}`}>
                    <button type='button' onClick={connectWalletHandler}>Connect wallet</button>
                </div>
            </nav>

            <div>
                <Outlet/>
            </div>

            <footer className={`${styles.footer}`}>
                <div className={`${styles['footer-content']}`}>
                    <div className={`${styles['footer-icons']}`}>
                        <span>
                            <Link to={`/`}><img className={`${styles['footer-home-icon']}`} src={footer_home} alt='footer_home'/></Link>
                            <Link to={`/`}><img className={`${styles['footer-home-text']}`} src={footer_metabnb} alt='footer_metabnb'/></Link>
                        </span>
                        <span className={`${styles['footer-socials']}`}>
                            <a href=''><img src={facebook} alt='facebook'/></a>
                            <a href=''>
                                <img className={`${styles['insta-outer']}`} src={insta_outer} alt='facebook'/>
                                <img className={`${styles['insta-inner']}`} src={insta_inner} alt='facebook'/>
                            </a>
                            
                            <a href=''><img src={twitter} alt='twitter'/></a>
                        </span>
                    </div>

                    <div className={`${styles['footer-links']}`}>
                        <div>
                        <b>Community</b>
                        <ul>
                            <li><a href=''>NFT</a></li>
                            <li><a href=''>Tokens</a></li>
                            <li><a href=''>Landlords</a></li>
                            <li><a href=''>Discord</a></li>
                        </ul>
                        </div>

                        <div>
                        <b>Places</b>
                        <ul>
                            <li><a href=''>Castle</a></li>
                            <li><a href=''>Farms</a></li>
                            <li><a href=''>Beach</a></li>
                            <li><a href=''>Learn more</a></li>
                        </ul>
                        </div>

                        <div>
                        <b>About us</b>
                        <ul>
                            <li><a href=''>Road map</a></li>
                            <li><a href=''>Creators</a></li>
                            <li><a href=''>Career</a></li>
                            <li><a href=''>Contact us</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                
                <p>&copy; {currentYear} Metabnb</p>
            </footer>
        </>
    );
}

export default Root;