import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Example from "./components/Category";

function debounce(func, delay) {
  let timer;
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...arg)
    }, delay);
  }
}

export default function ClothingStore() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const searchProducts = async (query, selectedCategory) => {
    const { data } = await axios.get(`${import.meta.env.VITE_URL}/api/products`, {
      params: { search: query, category: selectedCategory }
    })
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setProducts(data.products);
      })
    } else {
      // setProducts(data.products);
    }
  }

  const debounceSearch = useCallback(debounce(searchProducts, 600), [])

  useEffect(() => {
    debounceSearch(search, category)
  }, [search, category, debounceSearch])



  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Clothing Store</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for clothes..."
          className="w-full max-w-lg p-2 border rounded"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex justify-center">
        <select onChange={(e) => setCategory(e.target.value)} className="w-full max-w-lg p-2 border rounded">
          <option value="">All Categories</option>
          <option value="shirts">Shirts</option>
          <option value="pants">Pants</option>
          <option value="jackets">Jackets</option>
          <option value="dresses">Dresses</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div style={{ viewTransitionName: `product-${index}` }} key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <div className="w-full h-48 bg-gray-300">
              <img className="w-full h-full" src={item.image} alt="" />
            </div>
            <h2 className="text-xl font-semibold mt-2">{item.clothName}</h2>
            <p className="text-white uppercase bg-black w-fit px-3 rounded-full ">{item.category}</p>
            <p className="text-gray-800 font-bold">${item.price}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
