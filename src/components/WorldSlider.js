import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../images/horsebg.png";
import banner2 from "../images/horsebg-girl.png";
import "./WorldSlider.css";
import SocialSideMenu from "./SocialSideMenu";

function WorldSlider() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative  ">
      <Slider {...settings}>
        <div>
          <img className="w-full h-screen" src={banner1} alt="" />
        </div>
        <div>
          <img className="w-full h-screen" src={banner2} alt="" />
        </div>
        <div>
          <img className="w-full h-screen" src={banner1} alt="" />
        </div>
        <div>
          <img className="w-full h-screen" src={banner2} alt="" />
        </div>
        <div>
          <img className="w-full h-screen" src={banner1} alt="" />
        </div>
        <div>
          <img className="w-full h-screen" src={banner2} alt="" />
        </div>
      </Slider>

      <SocialSideMenu />
    </div>
  );
}

export default WorldSlider;
