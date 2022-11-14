import React, {useState} from "react";
import "./register.css";
import {useNavigate} from "react-router-dom"
import Logo from "../../assets/logo.svg";
import Footer from "../../components/footer"
import viewImg from "../../assets/view-trend.png"
import signupImg from "../../assets/amico.svg"


export default function Register() {
  const [isTour, setIsTour] = useState(false)
  const [isAgent, setIsAgent] = useState(false)
    const navigate = useNavigate()
  return (
    <div className='register-page'>
      <header>
        <img src={Logo} alt='tripspal' onClick={()=> navigate("/")} />
      </header>

      <main>
        <h1 className="heading__signup">Sign up for an account</h1>

    {
     !isTour && !isAgent && (
        <div className="user__type">
      <h1 onClick={()=> setIsTour(!isTour)}>Create a tourist account <img src={viewImg} alt="register user"/></h1>
      <h1 onClick={()=> setIsAgent(!isAgent)}>Create a tour agency account  <img src={viewImg} alt="register user"/></h1>
        </div>
     )
    }
    {
      isTour && (
        <div className="tour__form-container">
          <form>
         <div className="input__container">
          <label>Full Name</label>
          <input type= "text" />
         </div>

         <div className="input__container">
          <label>Email Address</label>
          <input type="email" />
         </div>

         <div className="input__container">
          <label>Password</label>
          <input type="password" />
         </div>

         <div className="input__container">
          <label>Confirm Password</label>
          <input type="password" />
         </div>

         <h2 className="tour__agreement">By signing up, you confirm that you've read and accepted our <span>Terms of Service and Privacy Policy.</span></h2>

         <button className="tour__btn" type="submit">Sign-up</button>

         <p className="tour__login ">Already have an account? <span>Log in!</span></p>
          </form>

          <div className="tour__img">
            <img src={signupImg} alt="signup account" />
          </div>
        </div>
      )
    }
    {
      isAgent && (
       <div className="agent__container">
        <form>
          <h1>Tour Agency Details (Step 1)</h1>
          <div className="agent__step1">
        <div className="input__container">
          <label>Name of Tour Agency</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Office Address</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>CAC license number</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Email</label>
          <input type="email"/>
         </div>

         <div className="input__container">
          <label>Password</label>
          <input type="password"/>
         </div>

         <div className="input__container">
          <label>State</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Website</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Phone Number</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Username</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Confirm Password</label>
          <input type="password"/>
         </div>
        </div>

         <h1>Bank Account details for commission payment (Step 2)</h1>

         <div className="input__container">
          <label>Bank name</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>Account number</label>
          <input type="text"/>
         </div>

         <div className="input__container">
          <label>BVN</label>
          <input type="text"/>
         </div>

         <button className="agent__submit" type="submit">Register</button>
        </form>
       </div>
      )
    }

      </main>
      <Footer/>
    </div>
  );
}
