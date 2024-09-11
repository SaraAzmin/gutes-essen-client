import { useEffect, useState } from "react";
import SectionTitle from "../../../Pages/Shared/SectionTitle/SectionTitle.jsx";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="mx-40 mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="flex flex-col">
      <div className="grid md:grid-cols-2 gap-16">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="center btn btn-outline text-black border-black border-b-4 mt-10 text-lg px-10 mx-auto">View Full Menu</button>
      </div>
    </div>
  );
};

export default PopularMenu;
