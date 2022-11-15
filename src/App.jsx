import styles from './App.module.css';

import image1 from './assets/image_1.png';
import image2 from './assets/image_2.png';
import image3 from './assets/image_3.png';
import image4 from './assets/image_4.png';
import image5 from './assets/image_5.png';
import image6 from './assets/image_6.png';
import image7 from './assets/image_7.png';
import image8 from './assets/image_8.png';
import image9 from './assets/image_9.png';
import image10 from './assets/image_10.png';
import image11 from './assets/image_11.png';
import image12 from './assets/image_12.png';
import image13 from './assets/image_13.png';
import image14 from './assets/image_14.png';
import image15 from './assets/image_15.png';
import metabnb_tiny from './assets/metabnb-tiny.png';
import opensea_tiny from './assets/opensea_tiny.png';
import metamask_tiny from './assets/metamask_tiny.png'
import metamask_text from './assets/metamask_text.png';

import star from './assets/star.png';

function App() {

  return (
    <div className={styles.main}>
      
      <section className={`${styles['top-section']}`}>
        <div className={`${styles['left-area']}`}>
          <h1>Rent a <span>place</span> away from <span>home</span> in the <span>metaverse</span></h1>
          <div>
            <p>We provide you access to luxury and affordable houses</p>
            <p>in the metaverse, get a change to turn your</p>
            <p>imagination to reality at your comfort zone</p>
          </div>
          
          <div className={styles.search}>
            <input type='search' placeholder='Search for location'/>
            <button type='button'>Search</button>
          </div>
          
        </div>
        
        <div className={`${styles['floating-images']}`}>
          <img className={`${styles['floating-img-1']}`} src={image1} alt='image_1'/>
          <img className={`${styles['floating-img-2']}`} src={image2} alt='image_2'/>
          <img className={`${styles['floating-img-3']}`} src={image3} alt='image_3'/>
          <img className={`${styles['floating-img-4']}`} src={image4} alt='image_4'/>
        </div>
      </section>

      <section className={`${styles['middle-belt']}`}>
        <div>
          <img src={metabnb_tiny} alt='metabnb_tiny'/>
          <span>MBToken</span>
        </div>
        <div className={`${styles['metamask']}}`}>
          <img src={metamask_tiny}/>
          <img src={metamask_text} alt='metamask_text'/>
        </div>
        <div className={`${styles['open-sea']}`}>
          <img src={opensea_tiny} alt='opensea_tiny'/>
          <span>OpenSea</span>
        </div>
      </section>

      <div className={`${styles.inspiration}`}>
        <h1>Inspiration for your next adventure</h1>
      </div>
      

      <section className={`${styles['image-array']}`}>
          <div>
            <img src={image5} alt='image_5'/>
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
            <img src={image9} alt='image9'/>
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
      </section>

      <section className={`${styles['metabnb-nft']}`}>
        <div>
          <div className={`${styles['left-metabnb-nft']}`}>
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers get amazing<br/>
              gift cards which are traded as NFTs. These NFTs give our customers access
              to loads of our exclusive services.
            </p>
            <div>
              <button type='button'>Learn more</button>
            </div>
          </div>
          <div className={`${styles['metabnb-images']}`}>
            <img className={`${styles['metabnb-img-1']}`} src={image13} alt='image_13'/>
            <img className={`${styles['metabnb-img-2']}`} src={image14} alt='image_14'/>
            <img className={`${styles['metabnb-img-3']}`} src={image15} alt='image_15'/>
          </div>
        </div>
      </section>

    </div>
    
  )
}

export default App;
