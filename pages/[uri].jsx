import Head from "next/head";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import SideBar from "../components/sidebar";

export default function SlugPage({ post, TREND_NEWS_posts }) {
  return (
    <div>
      <Head>
        <title>{post && post.title}</title>
        <link rel="icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content={post.customMetaDescription.metaDescription}
        />
        <title>{post.title}</title>
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href={post.uri} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.customMetaDescription.metaDescription}
        />
        <meta property="og:url" content={post.uri} />
        <meta property="og:site_name" content="Cybermatta" />
        <meta property="article:section" content="Technology" />
        <meta
          property="og:image"
          content={post.featuredImage.node.mediaItemUrl}
        />
        <meta
          property="og:image:secure_url"
          content={post.featuredImage.node.mediaItemUrl}
        />
        <meta property="og:image:width" content="1708" />
        <meta property="og:image:height" content="1401" />
        <meta property="og:image:alt" content={post.title} />
        <meta
          property="og:image:type"
          content={post.featuredImage.node.mimeType}
        />
      </Head>

      <main>
        <div className="container uri-header">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className="uri-featuredImageCont">
                <div className="uri-post-title">
                  <h1>{post.title}</h1>
                </div>
                <div className="post-info-detail-cont">
                  <span>
                    <img
                      src="/assets/tonny-gidraph.jpeg"
                      alt=""
                      className="uri-userpost-img"
                    />
                  </span>
                  <span>
                    ✍️ &nbsp;&nbsp;
                    {`${post.author.node.firstName} ${post.author.node.lastName}`}{" "}
                    | 🗓️ &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <img
                  src={post.featuredImage.node.mediaItemUrl}
                  alt=""
                  className="uri-featuredImage"
                />
              </div>
              <div className="post-article-content">
                <article
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></article>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <SideBar relatedPost={TREND_NEWS_posts} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const GET_POST = gql`
      query GetPostByURI($id: ID!) {
        post(id: $id, idType: URI) {
          title
          content
          date
          uri
          author {
            node {
              firstName
              lastName
            }
          }
          featuredImage {
            node {
              mediaItemUrl
              fileSize
              mediaType
              mimeType
              sizes
            }
          }
          categories {
            nodes {
              name
            }
          }
          customMetaDescription {
            metaDescription
          }
        }
      }
    `;
    const response = await client.query({
      query: GET_POST,
      variables: {
        id: params.uri,
      },
    });
    const post = response?.data?.post;
    const categories = post?.categories?.nodes
      ?.map((node) => node.name)
      .filter((name) => !name.startsWith("_"));
    const category = categories[0];

    const GET_TREND_NEWS_SEC_POSTS = gql`
    query AllPostsQuery ($postCategory: String) {
      posts(first: 50, where: { categoryName: $postCategory }) {
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
    const TREND_NEWS_response = await client.query({
      query: GET_TREND_NEWS_SEC_POSTS,
      variables: {
        postCategory:category,
      },
    });
    const TREND_NEWS_posts = TREND_NEWS_response?.data?.posts?.nodes;
    return {
      props: {
        post,
        TREND_NEWS_posts,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
