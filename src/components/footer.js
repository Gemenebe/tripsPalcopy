import React from "react";
import youtube from "../assets/youtube.svg";
import ig from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
import appStore from "../assets/app-store.svg";
import appStore1 from "../assets/app-store1.svg";
import "./footer.css"

const Footer =()=>{
    return(
       <div>
        <footer>
        <ul className='footer__list'>
          <h2>About Tripspal</h2>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Safety</li>
          <li>Regions</li>
          <li>FAQ</li>
        </ul>

        <ul className='footer__list'>
          <h2>Explore</h2>
          <li>Gallery</li>
          <li>Book a Demo</li>
          <li>Careers</li>
        </ul>

        <ul className='footer__list'>
          <h2>Resources</h2>
          <li>Insights and Guides</li>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Sign in</li>
        </ul>

        <ul className='footer__list'>
          <h2>Tripspal partners</h2>
          <li>Buildlab</li>
          <li>Trella</li>
          <li>Gaani</li>
          <li>Strider</li>
          <li>Gem star</li>
        </ul>

        <ul id='socials'>
          <li>
            <img src={youtube} alt='social media' />
          </li>
          <li>
            <img src={twitter} alt='social media' />
          </li>
          <li>
            <img src={ig} alt='social media' />
          </li>
          <li>
            <img src={tiktok} alt='social media' />
          </li>
        </ul>
      </footer>
      <div className='footer__extend'>
        <p>&copy;2022 Tripspal. All right reserved</p>
        <p>Terms and Conditions</p>
        <div>
          <img src={appStore} alt='playstore' />
          <img src={appStore1} alt='playstore' />
        </div>
      </div>
       </div>
    )
}

export default Footer