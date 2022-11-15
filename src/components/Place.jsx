import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, } from '@fortawesome/free-solid-svg-icons';

import styles from './Place.module.css';

import image5 from '../assets/image_5.png';
import image6 from '../assets/image_6.png';
import image7 from '../assets/image_7.png';
import image8 from '../assets/image_8.png';
import image9 from '../assets/image_9.png';
import image10 from '../assets/image_10.png';
import image11 from '../assets/image_11.png';
import image12 from '../assets/image_12.png';
import image16 from '../assets/image_16.png';
import image17 from '../assets/image_17.png';
import image18 from '../assets/image_18.png';
import image19 from '../assets/image_19.png';
import image20 from '../assets/image_20.png';
import image21 from '../assets/image_21.png';
import image22 from '../assets/image_22.png';
import image23 from '../assets/image_23.png';
import star from '../assets/star.png';

const Place = () => {
    return (
        <div>
            <header className={`${styles.header}`}>
                <span>Restaurant</span>
                <span>Cottage</span>
                <span>Castle</span>
                <span>fantasy city</span>
                <span>beach</span>
                <span>Carbins</span>
                <span>Off-grid</span>
                <span>Farm</span>
                <button>
                    <span>Location</span>
                    <FontAwesomeIcon icon={faSliders}/>
                </button>
            </header>

            <section className={`${styles['image-array']}`}>
                <div>
                    <img src={image9} alt='image_9'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image10} alt='image_10'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image11} alt='image_11'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image12} alt='image_12'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image5} alt='image5'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image6} alt='image_6'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image7} alt='image_7'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image8} alt='image_8'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image16} alt='image_16'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image17} alt='image_17'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image18} alt='image_18'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image19} alt='image_19'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image20} alt='image_20'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image21} alt='image_21'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image22} alt='image_22'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>

                <div>
                    <img src={image23} alt='image_23'/>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>Desert king</span>
                        <b>IMBT per night</b>
                    </div>
                    <div className={`${styles['image-top-subtext']}`}>
                        <span>2345km away</span>
                        <span>available for 2weeks stay</span>
                    </div>
                    <div className={`${styles.star}`}>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                        <img src={star} alt='star'/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Place;