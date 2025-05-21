import Navbar from './componant/Navbar/Navbar.jsx';
import ProductGrid from './componant/ProductGrid.jsx';
import frame65 from './assets/Frame 65.png';
import frame66 from './assets/Frame 66.png';


function App() {
  

  const popularProducts = [
  { image: frame65, title: 'Mug with Quote' },
  { image: frame66, title: 'Custom T-shirt' },
  { image: frame66, title: 'Gift Box' },
  { image: frame66, title: 'Calendar' },
  { image: frame66, title: 'Blue Polo' },
  { image: frame66, title: 'Photo Print' },
  { image: frame66, title: 'Pen Drive' },
];

const bottles = [
  { image: frame66, price: '₹149.00' },
  { image: frame66, price: '₹199.00' },
  { image: frame66, price: '₹249.00' },
  { image: frame66, price: '₹179.00' },
];

const mugs = [
  { image: frame66, price: '₹129.00' },
  { image: frame66, price: '₹159.00' },
  { image: frame66, price: '₹189.00' },
  { image: frame66, price: '₹199.00' },
];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <img src="Frame 93.png" alt="frame" />
      <img className="py-5 bg-white w-full" src="banner1 1.png" alt="banner" />

      <div className="max-w-6xl mx-auto p-4">
        <ProductGrid title="Popular Products" products={popularProducts} />
        <h2 className="text-xl font-semibold text-center text-purple-800 mb-4">Drinkwares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductGrid title="Bottles" products={bottles} />
          <ProductGrid title="Mugs" products={mugs} />
        </div>
      </div>
    </div>
  );
}

export default App;
