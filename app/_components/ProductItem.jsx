import React from "react";
import { List } from "lucide-react";
import Link from "next/link";
function ProductItem({ product }) {
  return (
    <div className="p-1 border-primary rounded-lg hover:border hover:shadow-md hover:cursor-pointer">
      <Link href={`/product-details/${product?.id}`}>
        <img
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="banner-card"
          width={400}
          height={350}
          className="rounded-t-lg h-[170px] object-cover"
        />
        <div className="flex items-center justify-between p-3 rounded-b-lg bg-gray-50">
          <div className="">
            <h2 className="text-[22px] font-medium line-clamp-1">
              {product?.attributes?.title}
            </h2>
            <h2 className="text-[18px] text-gray-400 flex  gap-1 items-center line-clamp-1">
              <List className="w-5 h-5" /> {product?.attributes?.category}
            </h2>
          </div>
          <h2 className="text-[22px] ">{product?.attributes?.price}</h2>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
