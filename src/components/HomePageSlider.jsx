import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

export default function HomePageSlider() {

  const [featuredCoupons, setFeaturedCoupons] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/featured')
    .then((res)=>{
      const data = res.data
      setFeaturedCoupons(data)
    })
    .catch((error)=>{
      console.log('error : ' + error)
    })
    console.log(featuredCoupons)
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-[80%] m-auto">
      <div className="my-10">
        <Slider {...settings}>
          {featuredCoupons.map((featuredCoupon , index) => (
            <a href={featuredCoupon.storeUrl} key={index}>
              <img src={featuredCoupon.bannerImageUrl} alt="ads" className="h-80 w-full object-cover" />
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}
