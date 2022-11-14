import React from "react";
import NavBar from "../../components/dashboardNavbar";
import "./dashboard.css";
import schd1 from "../../assets/schedule-t1.png";
import schd2 from "../../assets/schedule-t2.png";
import schd3 from "../../assets/schedule-t3.png";
import schdImpr from "../../assets/schedule-impr.svg";
import promoteImg from "../../assets/promote.svg"

const DashBoard = () => {
  return (
    <div className='dashboard'>
      <NavBar />
      <div className='dashboard__heading'>
        <h1>Hello Wakanow!</h1>
        <p>Let's help you manage your bookings</p>
      </div>

      <button className='create__trip-dashboard'>Create New Trip</button>

      <section className='scheduled__trip-dashboard'>
        <h1> Scheduled Trips</h1>

        <div className='schedule__container-dasbhoard'>
          <div className='schedule__dashboard'>
            <img
              src={schd1}
              alt='schedule'
              className='schedule__dashboard-img'
            />
            <div className='schedule__info-dashboard'>
              <p>The Great Wall of China</p>
              <img src={schdImpr} alt='impressions' />
            </div>
          </div>

          <div className='schedule__dashboard'>
            <img
              src={schd2}
              alt='schedule'
              className='schedule__dashboard-img'
            />
            <div className='schedule__info-dashboard'>
              <p>The Great Wall of China</p>
              <img src={schdImpr} alt='impressions' />
            </div>
          </div>

          <div className='schedule__dashboard'>
            <img
              src={schd3}
              alt='schedule'
              className='schedule__dashboard-img'
            />
            <div className='schedule__info-dashboard'>
              <p>The Great Wall of China</p>
              <img src={schdImpr} alt='impressions' />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div> 
            <div>
                <h1>Promotions</h1>
                <figure>
                    <p><img src={promoteImg} alt="promotions" />Run promotions for new trip</p>
                </figure>
            </div>
            <div>
               <h1>Activity Analysis</h1> 
               
            </div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default DashBoard;
