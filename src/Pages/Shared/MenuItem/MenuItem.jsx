const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4 bg-neutral-50 shadow-neutral-200 p-5 rounded-lg shadow-lg">
      <img
        className="w-[100px] rounded-lg"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-lg font-semibold">{name}</h3>
        <p className="text-neutral-600">{recipe}</p>
      </div>
      <p className="text-green-600 text-lg font-medium">${price}</p>
    </div>
  );
};

export default MenuItem;
