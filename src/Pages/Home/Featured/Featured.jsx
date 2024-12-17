import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mt-8 my-10 m:my-20 ">
        <div className="bg-slate-700 bg-opacity-60">
        <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="md:flex justify-center items-center pb-6 m:pb-20 pt-4 m:pt-12 px-12 m:px-36">
                <div>
                    <img src={featuredImg} className="xs: rounded-md" alt="" />
                </div>
                <div className="md:ml-10">
                    <p className="mb-5 m:font-medium">Aug 20, 2024</p>
                    <p className="uppercase m:mb-5 font-semibold">Where can i get some?</p>
                    <p className="text-sm text-pretty">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline border border-b-4 mt-4 text-white text-sm m:text-lg">Order Now</button>
                </div>
            </div>
        </div> 
        </div>
  );
};

export default Featured;
