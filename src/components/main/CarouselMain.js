import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OllehMainBanner, StyledH1 } from "./CarouseMainStyle";

const CarouselMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // 이미지가 변경되는 시간 간격, 2000ms = 2초
    cssEase: "linear", // 이미지가 부드럽게 이동하게 설정 (선택 사항)
  };

  return (
    <Slider {...settings}>
      <OllehMainBanner
        src={require("../../HomeStyleImg/ollehbeforelike.png")}
        alt="../"
      />
      <OllehMainBanner
        src={require("../../HomeStyleImg/ollehlike.png")}
        alt="../"
      />
      <StyledH1>만든이</StyledH1>
      <StyledH1>조찬영</StyledH1>
      <StyledH1>조동혁</StyledH1>
      <StyledH1>이나래</StyledH1>
      <StyledH1>박지영</StyledH1>
      <StyledH1>박규현</StyledH1>
      <StyledH1>강다예</StyledH1>
      <StyledH1>짝짝짝짝</StyledH1>
    </Slider>
  );
};

export default CarouselMain;
