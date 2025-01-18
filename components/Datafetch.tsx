import React from 'react'
// import { client } from '../../sanity-migration/sanityClient';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';



const Datafetch = async () => {
    const query = await client.fetch(
      `*[_type == "product"]{
       _id,
        name,
        price,
        category,
        inventory,
        color,
        status,
        description,
        "imageUrl": image.asset-> url
      }`
    );
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
        {query.map((product: any) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <Image
              src={urlFor(product.imageUrl).url()}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
            <p className="text-xl text-blue-600 font-bold">${product.price}</p>
            <p className="text-sm text-gray-500">
              Discount: {product.discountPercentage}%
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Datafetch;  