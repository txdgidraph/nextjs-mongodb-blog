import Head from "next/head";
import Link from "next/link";
import React from "react";

export const TopBar = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Head>
      <div className="top">
        <div className="topLeft">
          <Link href="/">
            <img
              src="/assets/cybermatta-logo.png"
              alt=""
              className="site-logo"
            />
          </Link>
        </div>
        <div className="topCenter">
          <ul className="topList">
            {/* <li className="topListItem">
              <Link href="/" className="topMenuLink">
                HOME
              </Link>
            </li> */}
            <li className="topListItem">
              <Link href="/tech-news" className="topMenuLink">
                TECH NEWS
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/events" className="topMenuLink">
                EVENTS
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/startups" className="topMenuLink">
                STARTUPS
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/how-to" className="topMenuLink">
                HOW TO's
              </Link>
            </li>
            
            <li className="topListItem">
              <Link href="/gadgets-appliances" className="topMenuLink">
                GADGETS & APPLIANCES
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/gadgets-appliances" className="topMenuLink">
                LEARN
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/gadgets-appliances" className="topMenuLink">
                SHOP
              </Link>
            </li>
          </ul>
        </div>
        <div className="topRight">
          {/* <Link href="/settings">
            <img src="assets/user-one.jpeg" alt="" className="topProfilePic" />
          </Link> */}
          <i className="topSearchIcon bi bi-search"></i>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
