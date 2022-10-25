import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import sound from '../assets/ghost.mp3';
import bell from '../assets/bell.wav';
import witch from '../assets/witch.wav';

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const Index = () => {

  function play() {
    new Audio(sound).play()
  }
  function play1() {
    new Audio(bell).play()
  }
  function play2() {
    new Audio(witch).play()
  }

  return (
    <section className="home container" id="home">
      <div className="swiper home-swiper">
        <div className="swiper-wrapper">
          <Swiper
            spaceBetween={30}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            navigation={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            style={{
              "--swiper-navigation-size": "25px",
            }}
          >
            <SwiperSlide>
              <div className="home__content grid">
                <div className="home__group">
                  <img src="./img/home1-img.png" alt="" className="home__img" />
                  <div className="home__indicator"></div>
                  <div className="home__details-img">
                    <h4 className="home__details-title">Happy Halloween</h4>
                    <span className="home__details-subtitle">
                      The living Pumpkin
                    </span>
                  </div>
                </div>
                <div className="home__data">
                  <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
                  <h1 className="home__title">
                    UOOOO <br />
                    TRICK OR
                    <br /> TREAT
                  </h1>
                  <p className="home__description">
                    This Halloween purchase any halloween products at very high
                    discounts
                  </p>
                  <div className="home__buttons">
                    <button className="button" onClick={play}>
                      Play Music
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__content grid">
                <div className="home__group">
                  <img src="./img/home2-img.png" alt="" className="home__img" />
                  <div className="home__indicator"></div>
                  <div className="home__details-img">
                    <h4 className="home__details-title">Happy Halloween</h4>
                    <span className="home__details-subtitle">
                      The living Pumpkin
                    </span>
                  </div>
                </div>
                <div className="home__data">
                  <h3 className="home__subtitle">#2 Top Best Duo</h3>
                  <h1 className="home__title">
                    BRING BACK <br />
                    MY COTTON
                    <br /> CANDY
                  </h1>
                  <p className="home__description">
                    This Halloween purchase any halloween products at very high
                    discounts
                  </p>
                  <div className="home__buttons">
                    <button className="button" onClick={play1}>
                      Play Music
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home__content grid">
                <div className="home__group">
                  <img src="./img/home3-img.png" alt="" className="home__img" />
                  <div className="home__indicator"></div>
                  <div className="home__details-img">
                    <h4 className="home__details-title">Captain Sem</h4>
                    <span className="home__details-subtitle">
                      Veteran Spooky Ghost
                    </span>
                  </div>
                </div>
                <div className="home__data">
                  <h3 className="home__subtitle">#3 Top Scariest Ghost</h3>
                  <h1 className="home__title">
                    RESPAWN <br />
                    THE SPOOKY
                    <br /> SKULL
                  </h1>
                  <p className="home__description">
                    In search for cute little puppy, captain Sem has come back.
                  </p>
                  <div className="home__buttons">
                    <button className="button" onClick={play2}>
                      Play Music
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Index;
