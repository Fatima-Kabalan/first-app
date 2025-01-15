"use client"

import { useParams } from "next/navigation"

export default function Products(){
    const params = useParams();
    const { productId } = params;
  
    return (
      <div>
        <div className="mt-16 p-4">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <p>Details for product ID: {productId}</p>
        </div>
      </div>
    );
}