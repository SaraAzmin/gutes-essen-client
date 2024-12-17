const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4 bg-neutral-50 shadow-neutral-200 xs: p-2 lg:p-5 rounded-lg shadow-lg">
      <img
        className="w-20 h-20 mx-auto my-auto lg:w-[100px] rounded-lg"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xs lg:text-lg font-semibold">{name}</h3>
        <p className="text-neutral-600 xs: text-xs">{recipe}</p>
      </div>
      <p className="text-green-600 text-sm lg:text-lg font-medium">${price}</p>
    </div>
  );
};

export default MenuItem;
