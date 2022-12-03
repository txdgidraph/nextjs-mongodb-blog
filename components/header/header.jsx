import Head from "next/head";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="header-image-cont">
        <div className="header-titles">
          <span className="headerTitleOne">Cybermatta Africa</span>
          <span className="headerTitleTwo">One Stop Tech News Blog</span>
        </div>
        <img
          src="/assets/wallpaper-one.jpeg"
          alt="Cybermatta Header Image"
          className="header-img"
        />
      </div>
      <div className="header-events-cont">
        <div className="header-events-title">
          <span>Upcoming Events</span>
        </div>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 col-md-4 header-event-col-1">
              <div className="header-event-details">
                <span className="header-event-date">5th August - Cybersecurity</span>
                <span className="header-event-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 header-event-col-2">
              <div className="header-event-details">
                <span className="header-event-date">6th Sept - Web Development</span>
                <span className="header-event-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 header-event-col-3">
              <div className="header-event-details">
                <span className="header-event-date">7th August - Crypto Currency</span>
                <span className="header-event-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
