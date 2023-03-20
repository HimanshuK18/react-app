/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    // dropDown ? setDropDown(false) : setDropDown(true)
    setDropDown(!dropDown);
    console.log("this is dropDown", dropDown);
  };
  const arrowPosition = dropDown ? "open" : "closed";
  const descriptionActive = dropDown ? "open" : "";

  return (
    <div className="container">
      <header>
        <div className="gradient_container_top"></div>
        <div className="gradient_container_bottom"></div>
        <section className="header-nav-area">
          <div className="brand_area">
            <div className="brand1">
              <a
                className="nasa_logo"
                href="http://www.nasa.gov"
                target="_blank"
                title="visit nasa.gov"
              >
                NASA
              </a>
            </div>
            <div className="brand2">
              <a
                className="top_logo"
                href="https://science.nasa.gov/"
                target="_blank"
                title="Explore NASA Science"
              >
                NASA Science
              </a>
              <a className="sub_logo" href="/mars-exploration/#" title="Mars">
                Mars Exploration Program
              </a>
            </div>
          </div>
          <div id="nav_container">
            <nav id="navigation">
              <a href="" className="nav-element">
                The Red Planet
              </a>
              <a href="" className="nav-element">
                The Program
              </a>
              <a href="" className="nav-element">
                News & Events
              </a>
              <a href="" className="nav-element">
                Multimedia
              </a>
              <a href="" className="nav-element">
                Missions
              </a>
              <a href="" className="nav-element">
                More
              </a>
            </nav>
            <form className="meganav_search" action="/search/">
              <input
                type="text"
                className="search_field "
                name="q"
                defaultValue=""
                placeholder=""
              />
              <div className="search_submit"></div>
            </form>
          </div>
          <span className="menu-icon"></span>
        </section>

        <div className="slide-container">
          <div className="wrapper">
            <div className="article">
              <h1>
                <a href="#">
                  NASA's Mars 2010 Will Blaze a Trail -- for Humans
                </a>
                <span
                  className={`arrow ${arrowPosition}`}
                  onClick={handleClick}
                ></span>
              </h1>
              <div className={`description ${descriptionActive}`}>
                The next robotic Mars mission will carry technology that will
                help enable astronauts to eventually explore the Red Planet.
              </div>
              <footer>
                <a href="#">More</a>
              </footer>
            </div>
          </div>
        </div>
        <div className="bullets-count">
          <div className="bullet bullet-selected" id="bullet-one"></div>
          <div className="bullet" id="bullet-two"></div>
          <div className="bullet bullet-three"></div>
          <div className="bullet bullet-four"></div>
        </div>

        <section className="dashboard">
          <div className="slide_container">
            <button className="slick-prev"></button>
            <div className="slick-list">
              <div className="slick-track slick-active">
                <article className="slide">
                  <div className="image_and_description_container">
                    <div className="readout">
                      <div className="title">Curiosity</div>
                      <div className="value">2440 SOLS ON MARS</div>
                    </div>
                  </div>
                  <span className="circle_plus"></span>
                </article>
              </div>
              <div className="slick-track">
                <article className="slide">
                  <div className="image_and_description_container">
                    <div className="readout">
                      <div className="title">Oppportunity</div>
                      <div className="value">12 YEARS ON MARS</div>
                    </div>
                  </div>
                  <span className="circle_plus"></span>
                </article>
              </div>
              <div className="slick-track">
                <article className="slide">
                  <div className="image_and_description_container">
                    <div className="readout">
                      <div className="title">INSIGHT</div>
                      <div className="value">320 SOLS ON MARS</div>
                    </div>
                  </div>
                  <span className="circle_plus"></span>
                </article>
              </div>
            </div>
            <button className="slick-next"></button>
          </div>
        </section>
        <div className="nav-prev"></div>
        <div className="nav-next"></div>
        <section className="more_bar">
          <div className="title">MORE</div>
          <div className="arrow_down"></div>
        </section>
      </header>
    </div>
  );
}

export default Header;
