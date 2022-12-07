import React from "react";

const JustInSection = () => {
  return (
    <div>
      <div className="container-fluid just-in-top-cont">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="justin-column-1-top">
              <div className="justin-column-1-post-details">
                <span className="justin-column-1-top-title">
                  Give Your Space a Parisian - Inspired Makeover
                </span>
                <span className="justin-column-1-top-details">
                  27th August | Tech News | Tonny Gidraph
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="justin-column-2-top">
              <div className="justin-column-2-top-img-cont">
                <img
                  src="/assets/wallpaper-one.jpeg"
                  alt=""
                  className="justin-column-2-img"
                />
                <div className="justin-column-2-post-details-cont">
                  <div className="justin-column-2-category">Tech News</div>
                  <div className="justin-column-2-title">
                    Helpful Tips for Working from Home as a Freelancer
                  </div>
                  <div className="justin-column-2-post-details">
                    27th August | Tech News | Tonny Gidraph
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* JustInBootom Section */}
      <div className="container-fluid JustInBootom-cont">
        <div className="row">
          <div className="col-sm-4 JustInBootom-col-1">
            <div className="JustInBottom-col-1-cont">
              <img
                src="/assets/wallpaper-two.png"
                alt=""
                className="JustInBottom-col-1-img"
              />
              <div className="JustInBottom-col-1-post-details">
                <div className="JustInBottom-column-1-category">Tech News</div>
                <div className="JustInBottom-column-1-title">
                  Helpful Tips for Working from Home as a Freelancer
                </div>
                <div className="JustInBottom-column-1-post-details">
                  27th August | Tech News | Tonny Gidraph
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 JustInBootom-col-2">
            <div className="JustInBottom-col-2-cont">
              <img
                src="/assets/wallpaper-three.jpeg"
                alt=""
                className="JustInBottom-col-2-img"
              />
              <div className="JustInBottom-col-2-post-details">
                <div className="JustInBottom-column-2-category">Tech News</div>
                <div className="JustInBottom-column-2-title">
                  Helpful Tips for Working from Home as a Freelancer
                </div>
                <div className="JustInBottom-column-2-post-details">
                  27th August | Tech News | Tonny Gidraph
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 JustInBootom-col-3">
            <div className="JustInBottom-col-3-cont">
              <img
                src="/assets/wallpaper-four.jpeg"
                alt=""
                className="JustInBottom-col-3-img"
              />
              <div className="JustInBottom-col-3-post-details">
                <div className="JustInBottom-column-3-category">Tech News</div>
                <div className="JustInBottom-column-3-title">
                  Helpful Tips for Working from Home as a Freelancer
                </div>
                <div className="JustInBottom-column-3-post-details">
                  27th August | Tech News | Tonny Gidraph
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustInSection;
