import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">NeverGiveUp-Shop</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Sản Phẩm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Liên Hệ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
