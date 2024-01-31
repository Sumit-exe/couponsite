import React from "react";
import Navbar from "../components/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePageSlider from "../components/HomePageSlider";
import TopCoupons from "../components/TopCoupons";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div >
        <section className="relative bg-Blue pb-8">
          <Navbar />
          <HomePageSlider />
        </section>
        <section className="my-10">
          <TopCoupons/>
        </section>
        <section className="my-20">
          {/* <Projects /> */}
        </section>
        <section className="my-20">
          {/* <Skills /> */}
        </section>
        <section className="my-20">
          {/* <Contact /> */}
        </section>
      </div>
        <section className="mt-20">
          <Footer />
        </section>
    </div>
  );
}
