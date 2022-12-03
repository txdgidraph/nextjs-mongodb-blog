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
          <i className=" topIcons bi bi-facebook"></i>
          <i className=" topIcons bi bi-twitter"></i>
          <i className=" topIcons bi bi-instagram"></i>
          <i className=" topIcons bi bi-google"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link href="/#" className="topMenuLink">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link href="/about-us" className="topMenuLink">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link href="contact-us" className="topMenuLink">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link href="write" className="topMenuLink">
                WRITE
              </Link>
            </li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img src="assets/user-one.jpeg" alt="" className="topProfilePic" />
          <i className="topSearchIcon bi bi-search"></i>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
