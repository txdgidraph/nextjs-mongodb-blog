import Head from "next/head";
import TopBar from "../components/TopBar/TopBar";
import Header from "../components/header/header";
import Posts from "../components/posts";
import SideBar from "../components/sidebar";
import JustInSection from "../components/just-in-posts-section";
import LearnSection from "../components/learn-section";
import TrendingNews from "../components/trending-news-section/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Lora:ital,wght@1,400;1,500;1,600;1,700&family=Roboto:wght@300&family=Varela&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <TopBar /> */}
      {/* <Header /> */}
      <JustInSection />
      <TrendingNews />
       <LearnSection />

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <Posts />
          </div>
          <div className="col-sm-12 col-md-3">
            <SideBar />
          </div>
        </div>
      </div> */}
    </div>
  );
}
