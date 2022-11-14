import React, { useState} from "react";
import "./activity.css";
import Footer from "../../components/footer"
import Logo from "../../assets/logo.svg"
import { NavLink} from "react-router-dom";
import openbar from "../../assets/open-bar.svg"
import closebar from "../../assets/close-bar.svg"
import yt from "../../assets/youtube-activity.png"
import gem from "../../assets/gem.png"
import jany from "../../assets/jany.png"
import mark from "../../assets/mark.png"
import deji from "../../assets/deji.png"
import michaelDavies from "../../assets/michael-davis.png"
import heart from "../../assets/heart.png"
import comment from "../../assets/send-2.png"
import thirdIcon from "../../assets/message-text.png"
import sabrineKola from "../../assets/sabrine-kola.png";
import zainabKlasu from "../../assets/zainab-klasu.png"



const Activity =()=>{
const [isOpen, setOpen] = useState(false)
const changeMenu = () => {
    setOpen(!isOpen);
  };
    return (
        <div className="activity-page">
            <header>
        <div className='logo__container'>
          <img src={Logo} alt='hero' />
        </div>
        <ul className='links__container'>
          <li>
            <NavLink to='/'>About us</NavLink>
          </li>
          <li>
            <NavLink to='/explore'>Explore</NavLink>
          </li>
          <li>
            <NavLink to='/'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/'>Contact us</NavLink>
          </li>
          <li>
            <NavLink to='/'>FAQ</NavLink>
          </li>
        </ul>
        
        <div className='mobile-nav'>
          <img
            src={isOpen ? closebar : openbar}
            alt='mobile navigation'
            onClick={changeMenu}
          />
        </div>
      </header>
      {isOpen && (
        <div className='mobile-nav__menu'>
          <ul className='links__container-mobile'>
            <li>
              <NavLink to='/'>About us</NavLink>
            </li>
            <li>
              <NavLink to='/'>Explore</NavLink>
            </li>
            <li>
              <NavLink to='/'>Blog</NavLink>
            </li>
            <li>
              <NavLink to='/'>Contact us</NavLink>
            </li>
            <li>
              <NavLink to='/'>FAQ</NavLink>
            </li>
          </ul>

        </div>
      )}

            <main className="activity__main">
            <section className="activity__hero">
            <img alt="" src={yt}/>
            </section>

            <section className="activity__usernames">
                <div className="username__container">
                    <img alt="" src={gem} />
                    <p>Janeny</p>
                </div>

                <div className="username__container">
                    <img alt="" src={jany} />
                    <p>Gem</p>
                </div>

                <div className="username__container">
                    <img alt="" src={mark} />
                    <p>Mark</p>
                </div>

                <div className="username__container">
                    <img alt="" src={deji} />
                    <p>Deji</p>
                </div>
            </section>
            
            <section>
                <div className="individual__post">
                 <div className="poster__info">
                    <img alt="" src={jany}/>
                    <h1>Michael Davies</h1>
                </div>
                <img alt="" src={michaelDavies} className="post__picture"/>   
                <div className="activity__icons">
                  <img alt="" src={heart}/>
                  <img alt="" src={thirdIcon}/>
                  <img alt="" src={comment}/>
                </div>

                <div>
                  <h3>
                    <p>4320 likes</p>
                    <p className="activity__title">Tripspal events</p>
                    <p className="activity__caption">South Africa fun fair trip. Out for a vacation you all!</p>
                    <p className="view__comments">view comments</p>
                  </h3>
                </div>
                </div>

                <div className="individual__post">
                 <div className="poster__info">
                    <img alt="" src={mark}/>
                    <h1>Sabrine Kola</h1>
                </div>
                <img alt="" src={sabrineKola} className="post__picture"/>   
                <div className="activity__icons">
                  <img alt="" src={heart}/>
                  <img alt="" src={thirdIcon}/>
                  <img alt="" src={comment}/>
                </div>

                <div>
                  <h3>
                    <p>4320 likes</p>
                    <p className="activity__title">Tripspal events</p>
                    <p className="activity__caption">South Africa fun fair trip. Out for a vacation you all!</p>
                    <p className="view__comments">view comments</p>
                  </h3>
                </div>
                </div>

                                <div className="individual__post">
                 <div className="poster__info">
                    <img alt="" src={gem}/>
                    <h1>Zainab Klasu</h1>
                </div>
                <img alt="" src={zainabKlasu} className="post__picture"/>   
                <div className="activity__icons">
                  <img alt="" src={heart}/>
                  <img alt="" src={thirdIcon}/>
                  <img alt="" src={comment}/>
                </div>

                <div>
                  <h3>
                    <p>4320 likes</p>
                    <p className="activity__title">Tripspal events</p>
                    <p className="activity__caption">South Africa fun fair trip. Out for a vacation you all!</p>
                    <p className="view__comments">view comments</p>
                  </h3>
                </div>
                </div>    

            </section>

            </main>

            <Footer/>

        </div>
    )
}
export default Activity
