import React from "react";
const TrendinPostArray = [
  {
    featuredImage: "/assets/wallpaper-one.jpeg",
    postTitle: "Helpful Tips for Working from Home as a Freelancer",
    postDate: "December 4, 2022",
    postCategory: "Tech News",
    postDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ratione natus eius iste, corrupti autem non. Omnis explicabo,",
  },
  {
    featuredImage: "/assets/wallpaper-two.png",
    postTitle: "Helpful Tips for Working from Home as a Freelancer",
    postDate: "December 4, 2022",
    postCategory: "Tech News",
    postDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ratione natus eius iste, corrupti autem non. Omnis explicabo,",
  },
  {
    featuredImage: "/assets/wallpaper-three.jpeg",
    postTitle: "Helpful Tips for Working from Home as a Freelancer",
    postDate: "December 4, 2022",
    postCategory: "Tech News",
    postDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ratione natus eius iste, corrupti autem non. Omnis explicabo,",
  },
  {
    featuredImage: "/assets/wallpaper-four.jpeg",
    postTitle: "Helpful Tips for Working from Home as a Freelancer",
    postDate: "December 4, 2022",
    postCategory: "Tech News",
    postDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ratione natus eius iste, corrupti autem non. Omnis explicabo,",
  },
];

const TrendingNewsSection = () => {
  return (
    <div>
      <div className="TrendNewsSec-title-cont">
        <span className="TrendNewsSec-title">Trending News Section</span>
        <span className="TrendNewsSec-title-hr-line-cont">
          <hr className="TrendNewsSec-title-hr-line"/>
        </span>
      </div>
      <div className="container-fluid">
        <div className="row">
          {TrendinPostArray.map((item) => {
            console.log(item);
            return (
              <div className="col-md-3 col-sm-12">
                <div className="TrendNewsSec-Col-1-cont">
                  <img
                    src={item.featuredImage}
                    alt=""
                    className="TrendNewsSec-Col-1-img"
                  />
                  <div className="TrendNewsSec-Col-1-post-details">
                    <span className="TrendNewsSec-Col-1-category-date">
                      {item.postCategory} | {item.postDate}
                    </span>
                    <span className="TrendNewsSec-Col-1-title">
                      {item.postTitle}
                    </span>
                    <span className="TrendNewsSec-Col-1-desc">
                      {item.postDesc}
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

export default TrendingNewsSection;
