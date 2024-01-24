"use client";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import ProductApi from "/app/_utils/ProductApis";
import {ArrowRight} from 'lucide-react'

const ProductSection = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProduct_();
  }, []);

  const getLatestProduct_ = () => {
    ProductApi.getLatestProducts().then((res) => {
      console.log(res.data);
      setProductList(res.data.data);
    });
  };
  return (
    <div id="courses" className="px-10 md:px-20">
      <h2 className="font-bold text-[30px] my-10">
        Brand New
        <span
          className="font-normal text-[14px]
         float-right text-primary flex 
         items-center cursor-pointer hover:text-black"
        >
          View All Collection <ArrowRight className="h-4" />{" "}
        </span>
      </h2>{" "}
      <ProductList productList={productList} />
    </div>
  );
};

export default ProductSection;
