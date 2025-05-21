import ProductCard from './ProductCard';

const ProductGrid = ({ title, products }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-center text-purple-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
