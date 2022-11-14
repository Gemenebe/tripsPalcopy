import React from "react";
import "./explore.css"
import Footer from "../../components/footer"
import logo from "../../assets/logo.svg"
import dele from "../../assets/gem.png"
import event1 from "../../assets/event1.png"
import event2 from "../../assets/event2.png"
import event3 from "../../assets/event3.png"
import event4 from "../../assets/event4.png"
import notifyImg from "../../assets/notify.svg"
import bookmark from "../../assets/bookmark.png"
import rating from "../../assets/rating.svg"
import explore1 from "../../assets/explore1.png"
import explore2 from "../../assets/explore2.png"
import explore3 from "../../assets/explore3.png"
import explore4 from "../../assets/explore4.png"
import explore5 from "../../assets/explore5.png"
import explore6 from "../../assets/explore6.png"
import explore7 from "../../assets/explore7.png"
import explore8 from "../../assets/explore8.png"

const Explore = ()=>{
    return(
        <div className="explore-page">
            <header>
            <img src={logo} alt="logo" className="explore__logo" />
            <input type="text" placeholder="Search for a Location"/>
            <img src={dele} alt="text" className="explore__dele"/>
            </header>

            <main>
            <section className="event__section">
                <h1>Upcoming Events</h1>
                <div className="event__container">
                    <figure className="explore__event">
                        <img src={event1} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Alpha Beach</h1>
                                    <p>30th Sept 2022</p>
                                    <p className="event__category">Beach</p>
                                </div>
                                <img src={notifyImg} alt=""/>
                            </div>
                            <button>Buy Ticket</button>
                        </figcaption>
                    </figure>

                    <figure className="explore__event">
                        <img src={event2} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Nike Art Gallery</h1>
                                    <p>28th Oct 2022</p>
                                    <p className="event__category">Art and culture</p>
                                </div>
                                <img src={notifyImg} alt=""/>
                            </div>
                            <button>Buy Ticket</button>
                        </figcaption>
                    </figure>

                    <figure className="explore__event">
                        <img src={event3} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Bowers Tower</h1>
                                    <p>1st Nov 2022</p>
                                    <p className="event__category">Historical Landmark</p>
                                </div>
                                <img src={notifyImg} alt=""/>
                            </div>
                            <button>Buy Ticket</button>
                        </figcaption>
                    </figure>

                    <figure className="explore__event">
                        <img src={event4} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Lower Zambezi</h1>
                                    <p>10th Nov 2022</p>
                                    <p className="event__category">Beach</p>
                                </div>
                                <img src={notifyImg} alt=""/>
                            </div>
                            <button>Buy Ticket</button>
                        </figcaption>
                    </figure>
                </div>
            </section>
          
          

            <section className="event__section">
                <h1>Explore</h1>
                <div className="event__container">
                   
                    <figure className="explore__event">
                        <img src={explore1} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Kilimanjaro</h1>
                                    <p>Game Reserve</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>

                    <figure className="explore__event">
                        <img src={explore2} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Kruger National Park</h1>
                                    <p>Game Reserve</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>


                    <figure className="explore__event">
                        <img src={explore3} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Girraffe Center</h1>
                                    <p>Rescue center for giraffes</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>


                    <figure className="explore__event">
                        <img src={explore4} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Obudu Cattle Ranch</h1>
                                    <p>Mountain and resort</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>


                    <figure className="explore__event">
                        <img src={explore5} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Zuma Rock</h1>
                                    <p>Unique rock with a face</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>


                    <figure className="explore__event">
                        <img src={explore6} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Elegushi Royal Beach</h1>
                                    <p>Beach with resort hotels</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>


                    <figure className="explore__event">
                        <img src={explore7} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Fregate</h1>
                                    <p>Lush island with private resort</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>


                    <figure className="explore__event">
                        <img src={explore8} alt="" className="event__img"/>
                        <figcaption>
                            <div className="event__info">
                                <div>
                                    <h1>Changu Island</h1>
                                    <p>Isle with giant tortoises</p>
                                    <p className="event__category">(5.0) <img src={rating} alt=""/></p>
                                </div>
                                <img className="bookmark__explore" src={bookmark} alt=""/>
                            </div>
                            <div className="explore-btn_-container">

                            <button id="save-trip__btn">SAVE FOR A TRIP</button>
                            <button id="add-list__btn">ADD TO BUCKET LIST</button>
                            </div>
                        </figcaption>
                    </figure>





                </div>
            </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Explore