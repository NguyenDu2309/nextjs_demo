import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Áo Thun", price: 200000, image: "./img/shirt.jpg" },
  { id: 2, name: "Quần Jeans", price: 500000, image: "./img/jeans.jpg" },
  { id: 3, name: "Giày Thể Thao", price: 1000000, image: "./img/shoes.png" },
  { id: 5, name: "Áo Thun", price: 200000, image: "./img/shirt.jpg" },
  { id: 6, name: "Quần Jeans", price: 500000, image: "./img/jeans.jpg" },
  { id: 7, name: "Giày Thể Thao", price: 1000000, image: "./img/shoes.png" },
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 text-black">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price.toLocaleString()}đ</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
