import { Grid } from "@material-ui/core";
import React from "react";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import DatePublished from "../published-date";
import PostCategory from "../return-post-category";

const TechBytesObjects = [
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
  {
    featuredImage: "https://technext.ng/wp-content/uploads/2022/12/SBFCZ.png",
    featuredTitle: "8 Individuals who defined the Global Tech Space in 2022",
    byteDate: "December 21, 2022",
  },
];

const trendNewsTopSection = (postsObjects) => {
  return (
    <div>
      <div className="justin-sec-title-cont">
        <span className="justin-sec-title-title">Trending News Section</span>
      </div>
      <Grid container spacing={2}>
        {postsObjects &&
          postsObjects.map((item, index) => {
            return (
              <Grid item sm={12} md={6} key={index}>
                <div className="trendnews-topsec-postdetails-cont">
                  <img
                    src={item.featuredImage.node.mediaItemUrl}
                    alt=""
                    className="trendnews-topsec-featuredimage"
                  />
                  <div className="trendnews-topsec-post-info">
                    <span className="trendnews-topsec-date-cate">
                      <DatePublished date={item.date} /> |{" "}
                      <PostCategory categoryObject={item.categories.nodes} />
                    </span>
                    <span className="trendnews-topsec-title">{item.title}</span>
                    <span className="trendnews-topsec-desc">{item.desc}</span>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

const trendNewsHeadlineSection = (postsObjects) => {
  return (
    <div style={{ marginTop: "1em" }}>
      <Grid container spacing={2}>
        {postsObjects &&
          postsObjects.map((item, index) => {
            return (
              <Grid item xs={12} sm={12} md={6} key={index}>
                <div>
                  <div className="trendnews-headlsec-postdetails">
                    <div className="trendnews-headlsec-img-cont">
                      <img
                        src={item.featuredImage.node.mediaItemUrl}
                        alt=""
                        className="trendnews-headlsec-img"
                      />
                    </div>
                    <div className="trendnews-headlsec-postinfo-cont">
                      <span className="trendnews-headlsec-date-cate">
                        <DatePublished date={item.date} /> |{" "}
                        <PostCategory categoryObject={item.categories.nodes} />
                      </span>
                      <span className="trendnews-headlsec-title">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

const TrendingNews = () => {
  const [trendNewsfetchedBlogs, setTrendNewsFetchedBlogs] = useState();
  const [justInfetchedBlogs, setJustINFetchedBlogs] = useState();
  useEffect(() => {
    async function trend_news_fetchData() {
      const GET_POSTS = gql`
        query AllPostsQuery {
          posts(first: 50, where: { categoryName: "_trend-news-section" }) {
            nodes {
              title
              content
              date
              uri
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      `;
      const response = await client.query({
        query: GET_POSTS,
      });
      const posts = response?.data?.posts?.nodes;
      setTrendNewsFetchedBlogs(posts);
    }

    async function just_in_fetchData() {
      const GET_POSTS = gql`
        query AllPostsQuery {
          posts(first: 6) {
            nodes {
              title
              uri
              categories {
                nodes {
                  name
                }
              }
            }
          }
        }
      `;
      const response = await client.query({
        query: GET_POSTS,
      });
      const posts = response?.data?.posts?.nodes;
      setJustINFetchedBlogs(posts);
    }

    just_in_fetchData();
    trend_news_fetchData();
  }, []);

  const justInPostsLinksArr =
    justInfetchedBlogs &&
    justInfetchedBlogs.reduce((acc, currVal) => {
      acc.push(currVal.uri);
      return acc;
    }, []);

  const trendNewsBlogs_NotInJustInSection =
    trendNewsfetchedBlogs &&
    trendNewsfetchedBlogs.reduce((acc, currVal) => {
      if (!justInPostsLinksArr.includes(currVal.uri)) {
        acc.push(currVal);
      }
      return acc;
    }, []);

  const trendNewsTopSectionObjects =
    trendNewsBlogs_NotInJustInSection &&
    trendNewsBlogs_NotInJustInSection.slice(0, 2);
  const trendNewsHeadlineSectionObjects =
    trendNewsBlogs_NotInJustInSection &&
    trendNewsBlogs_NotInJustInSection.slice(2, 8);

  return (
    <div>
      <div className="fullTrendNews-Container">
        {trendNewsfetchedBlogs && (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} md={8}>
              {trendNewsTopSection(trendNewsTopSectionObjects)}
              {trendNewsHeadlineSection(trendNewsHeadlineSectionObjects)}
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <div className="justin-sec-title-cont">
                <span className="justin-sec-title-title">Tech Bytes</span>
              </div>
              <Grid container>
                {TechBytesObjects.map((item, index) => {
                  return (
                    <Grid item xs={12} sm={12} md={12} key={index}>
                      <div className="trendnews-byteContainer">
                        <div>
                          <img
                            src={item.featuredImage}
                            alt=""
                            className="trendnews-byteImage"
                          />
                        </div>
                        <div className="trendnews-byteDetails-cont">
                          <span className="trendnews-byteTitle">
                            {item.featuredTitle}
                          </span>
                          <span className="trendnews-byteDate">
                            {item.byteDate}
                          </span>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        )}
      </div>
    </div>
  );
};
export default TrendingNews;
