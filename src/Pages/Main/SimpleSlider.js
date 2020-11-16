import React, { Component } from 'react';
import Slider from 'react-slick';
import './SimpleSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      pauseOnHover: true,
      arrows: true,
    };
    return (
      <div className="SimpleSlider">
        <Slider {...settings}>
          <div>
            <button type="button" class="slick-prev"></button>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_5_1605486840.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_230170_1605494410.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_4_1605486840.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_5_1605491817.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_10_1605488560.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_4_1605488178.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_2_1605493555.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_4_1605488178.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_5_1605489734.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_6_1605491817.jpg"
              alt="사진"
            />
          </div>
          <div>
            <img
              className="sliderImg"
              src="https://image.brandi.me/home/banner/bannerImage_4_1605488178.jpg"
              alt="사진"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
