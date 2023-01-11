import React from "react";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import DatePublished from "../published-date";
import renderHTML from "react-render-html";
import Link from "next/link";

const LearnSection = () => {
  const [fetchedBlogs, setFetchedBlogs] = useState();
  useEffect(() => {
    async function fetchData() {
      const GET_POSTS = gql`
        query AllPostsQuery {
          posts(first: 10, where: { categoryName: "_learn-section" }) {
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
      setFetchedBlogs(posts);
    }
    fetchData();
  }, []);

  const learnSectionPostObjects = fetchedBlogs && fetchedBlogs.slice(0, 4);

  return (
    <div>
      <div className="learn-section-title-cont">
        <span className="learn-section-title">Learn Section</span>
      </div>
      <div className="container-fluid">
        <div className="row">
          {learnSectionPostObjects &&
            learnSectionPostObjects.map((item) => {
              return (
                <div className="col-md-3 col-sm-12">
                  <div className="TrendNewsSec-Col-1-cont">
                    <Link href={item.uri}>
                      <img
                        src={item.featuredImage.node.mediaItemUrl}
                        alt={item.title}
                        className="TrendNewsSec-Col-1-img"
                      />
                    </Link>
                    <div className="TrendNewsSec-Col-1-post-details">
                      <span className="TrendNewsSec-Col-1-category-date">
                        Tech News - <DatePublished date={item.date} />
                      </span>
                      <span className="TrendNewsSec-Col-1-title">
                        <Link
                          href={item.uri}
                          className="trendnews-headlsec-title-link"
                        >
                          {item.title}
                        </Link>
                      </span>
                      <span className="TrendNewsSec-Col-1-desc">
                        {renderHTML(item.content)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="TrendNewsSec-Load-More-btn-cont">
        <div className="TrendNewsSec-button-icon-cont">
          <span>
            <button className="TrendNewsSec-Load-More-btn">
              Load More Posts
            </button>
          </span>
          <span>
            <i class="bi bi-arrow-clockwise"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearnSection;
