"use client";
import React, { useEffect, useState, useContext } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [opencart, setOpenCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);

  const { user } = useUser();

  useEffect(() => {
    user && getCartItems();
  }, [user]);

  const getCartItems = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log("response from cart items", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };

  return (
    !loggedIn && (
      <header className="bg-white ">
        <div className="mx-auto max-w-screen-xxl px-4 sm:px-6 lg:px-8 shadow-md ">
          <div className="flex h-16 items-center justify-between ">
            <div className="md:flex md:items-center md:gap-12">
              <img src="/logo.svg" alt="logo" width={50} height={50} />
            </div>

            <div className="hidden md:block ">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-base"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-base"
                      href="/"
                    >
                      Explore
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-base"
                      href="/"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-base"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-base"
                      href="/"
                    >
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 text-base"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  {" "}
                  <a
                    className="rounded-md  bg-primary px-5 py-2.5 text-sm font-medium hover:bg-[#F5C3B9] text-white shadow"
                    href="/sign-in"
                  >
                    Login
                  </a>
                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                      href="/"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <h2 className="flex gap-1 cursor-pointer">
                    <ShoppingCart onClick={() => setOpenCart(!opencart)} />(
                    {cart?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {opencart && <Cart />}
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
