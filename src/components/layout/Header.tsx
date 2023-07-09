import React from "react";
import Image from "next/image";
import logo from "/public/logo.webp";
import { ShoppingCart } from "lucide-react";
const Header = () => {
  return (
    <nav className="flex px-8 py-4 justify-between">
      <ul className="flex gap-10">
        <li>
          <Image src={logo} alt="logo" />
        </li>
        <li>Female</li>
        <li>Male</li>
        <li>Kids</li>
        <li>All Products</li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
