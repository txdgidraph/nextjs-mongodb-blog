import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Grid } from "@material-ui/core";

const dummyFiles = [
  {
    imageName: "/assets/wallpaper-one.jpeg",
    title: "Best single-board computers for AI and deep learning",
  },
  {
    imageName: "/assets/wallpaper-one.jpeg",
    title: "Setting up a Nextcloud server on DietPi",
  },
  {
    imageName: "/assets/wallpaper-one.jpeg",
    title: "Best single-board computers for AI and deep learning",
  },
  {
    imageName: "/assets/wallpaper-one.jpeg",
    title: "Setting up a Nextcloud server on DietPi",
  },
];

const SideBar = ({ relatedPost }) => {
  console.log(relatedPost);
  return (
    <div style={{ backgroundColor: "#FDFAFA", margin: "4em 1em 1em 1em" }}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Head>
      <div className="recent-posts-title">RELATED POSTS</div>
      <Grid container spacing={2} style={{ padding: "0em 2em 0em 2em" }}>
        {relatedPost.map((item, index) => {
          console.log(item);
          return (
            <Grid item xs={6} sm={6} md={6} key={index}>
              <img
                src={item.featuredImage.node.mediaItemUrl}
                alt={item.featuredImage.title}
                style={{ width: "100%", height: "auto" }}
              />
              <p>{item.title}</p>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SideBar;
