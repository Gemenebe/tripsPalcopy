import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import {useNavigate} from "react-router-dom"
import HeroImg1 from "../../assets/landing-hero.svg";
import b1 from "../../assets/section2-one.png";
import b2 from "../../assets/section-2-two.png";
import b3 from "../../assets/section2-three.png";
import b4 from "../../assets/section2-four.png";
import openbar from "../../assets/open-bar.svg";
import closebar from "../../assets/close-bar.svg";
import partner1 from "../../assets/partner1.svg";
import partner2 from "../../assets/partner2.svg";
import partner3 from "../../assets/partner3.svg";
import testimonial from "../../assets/testimonial.svg";
import trending1 from "../../assets/trending1.png";
import trending2 from "../../assets/trending2.png";
import deji from "../../assets/deji.png";
import gem from "../../assets/gem.png";
import viewTrend from "../../assets/view-trend.png";
import { NavLink } from "react-router-dom";
import "./landing.css";
import Footer from "../../components/footer";

const LandingPage = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);

  const changeMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='landing-page'>
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
        <div className='btn__container'>
          <button>Sign In</button>
          <button id='sign-up' onClick={()=> navigate("/register")}>Sign Up</button>
        </div>
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
          <div className='btn__container-mobile'>
            <button>Sign In</button>
            <button id='sign-up' onClick={()=> navigate("/register")}>Sign Up</button>
          </div>
        </div>
      )}
      <main>
        <section className='first__section'>
          <div className='first__hero'>
            <img src={HeroImg1} alt='hero img' />
            <p>The experience is real, lets get you started today.</p>
            <button>Explore &rarr;</button>
          </div>

          <div className='second__hero'>
            <img src='' alt='hero-img' />
          </div>
        </section>

        <section className='second__section'>
          <div className='two'>
            <div className='card2'>
              <img src={b1} alt='a place' />
              <h3>South Africa</h3>
              <p>Sharing love with friends and family</p>
            </div>

            <div className='card2'>
              <img src={b2} alt='a place' />
              <h3>Mexico</h3>
              <p>The serenity from nature</p>
            </div>
          </div>

          <div className='two'>
            <div className='card2'>
              <img src={b3} alt='a place' />
              <h3>Tanzania</h3>
              <p>Stories to tell after your trips</p>
            </div>

            <div className='card2'>
              <img src={b4} alt='a place' />
              <h3>Ghana</h3>
              <p>The perfect view of your trip</p>
            </div>
          </div>
        </section>

        <section className='partners'>
          <h1>Partners</h1>
          <div>
            <img src={partner1} alt='our partners' />
            <img src={partner2} alt='our partners' />
            <img src={partner3} alt='our partners' />
          </div>
        </section>

        <section className='testimonial'>
          <h1>What people are saying</h1>
          <div className='adams'>
            <img src={testimonial} alt='testimonial' />
            <div className='testimony'>
              <p>
                ‘For the first time i planned a vacation with a team that
                brought out the best in my vaction.’{" "}
              </p>
              <h2>Adams Sarah</h2>
            </div>
          </div>
        </section>

        <section className='trending'>
          <h1 className='trending__title'>Trending</h1>

          <div className='all-trends'>
            <div className='trend__container'>
              <img
                src={trending1}
                alt='trending trips'
                className='trend__img'
              />
              <p className='trend__country'>Ghana</p>
              <h2 className='trend__title'>
                What happened the last time we were 'jollying' in the city of
                Accra{" "}
                <span>
                  <img src={viewTrend} alt='view more' />
                </span>
              </h2>
              <p className='trend__info'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className='trend__writer'>
                <img src={deji} alt='poster' />
                <div>
                  <p>Deji Omaja</p>
                  <p id='trend__date'>12 Nov, 2022</p>
                </div>
              </div>
            </div>

            <div className='trend__container'>
              <img
                src={trending2}
                alt='trending trips'
                className='trend__img'
              />
              <p className='trend__country'>Mauritius</p>
              <h2 className='trend__title'>
                The experience was mind-blowing having to enjoy nature in
                Mauritius
                <span>
                  <img src={viewTrend} alt='view more' />
                </span>
              </h2>
              <p className='trend__info'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className='trend__writer'>
                <img src={gem} alt='poster' />
                <div>
                  <p>Gem Enebe</p>
                  <p id='trend__date'>13 Nov, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    <Footer/>  
    </div>
  );
};

export default LandingPage;
