const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow p-2 text-center">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded" />
      {title && <h4 className="mt-2 text-sm font-medium">{title}</h4>}
      {price && <p className="text-xs text-gray-500 mt-1">{price}</p>}
    </div>
  );
};

export default ProductCard;
