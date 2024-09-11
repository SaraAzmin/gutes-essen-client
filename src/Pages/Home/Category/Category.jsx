import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slidee from "../../../assets/home/slidee.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpeg";
import SectionTitle from "../../../Pages/Shared/SectionTitle/SectionTitle.jsx";

const Category = () => {
  return (
    <div className="mx-20">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img className="rounded-xl" src={slide1} alt="" />
            <h3 className="text-4xl uppercase text-center text-black -pb-11">
              Salad
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center flex flex-col justify-center items-center">
            <img className="rounded-xl" src={slidee} alt="" />
            <h3 className="text-4xl uppercase text-center text-black -pb-11">
              Burger
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center flex flex-col justify-center items-center">
            <img className="rounded-xl" src={slide2} alt="" />
            <h3 className="text-4xl uppercase text-center text-black -pb-11">
              Pizza
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center flex flex-col justify-center items-center">
            <img className="rounded-xl" src={slide3} alt="" />
            <h3 className="text-4xl uppercase text-center text-black -pb-11">
              Soup
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center flex flex-col justify-center items-center">
            <img className="rounded-xl" src={slide4} alt="" />
            <h3 className="text-4xl uppercase text-center text-black -pb-11">
              Desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="text-center flex flex-col justify-center items-center">
            <img className="rounded-xl" src={slide5} alt="" />
            <h3 className="text-4xl uppercase text-center text-black -pb-11">
              Meals
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
