import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductsList";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
