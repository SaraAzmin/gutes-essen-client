import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../../../assets/home/04.jpg";
import Slider3 from "../../../assets/home/02.jpg";
import Slider2 from "../../../assets/home/banner03.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={Slider2} />
        </div>
        <div>
          <img src={Slider1} />
        </div>
        <div>
          <img src={Slider3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
