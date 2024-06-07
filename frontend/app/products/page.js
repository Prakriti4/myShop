'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const headers = {
        Authorization: 'Bearer dd18a299c1fde42fdea28cd8dd48472804bf388c19139ac39bed0a863fcf0c36f8b97ad688e99436970bab86a916aadec0abb755ac08707d73d14eb91856cbc22fc92239c7e307690545ff50c972e5990f03bcecb4abba68ba4e8fb5fbe8a23d8c0995726b379c1bbc285ee0ac007d5eb33dd9872a87d378df28be084398abb3'
      };

      try {
        const res = await fetch('http://localhost:1337/api/products?populate=*', {
          headers: headers
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Buy from the list of our products.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {products.data.map((product) => (
              <div key={product.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  {product.attributes.image.data ? (
                    // eslint-disable-next-line react/jsx-no-undef
                    <img className="h-40 rounded w-full object-cover object-center mb-6"  src={
                      product.attributes.image.data
                        ? `http://localhost:1337${product.attributes.image.data.attributes.url}`
                        : 'fallback-image-url.jpg' // Provide a fallback image URL if needed
                    }alt={product.attributes.title} />
                  ) : (
                    <div className="h-40 rounded w-full object-cover object-center mb-6 bg-gray-200 flex items-center justify-center">
                      <span>No Image</span>
                    </div>
                  )}
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.attributes.subtitle}</h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{product.attributes.title}</h2>
                  {/* <div className="hidden bg-red-800 bg-purple-800 bg-green-800 bg-blue-800"></div> */}
                  <button className={'border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none ' + `bg-${product.attributes.color}-800`}></button>
                  <p className="leading-relaxed text-base">{product.attributes.description}</p>
                  <Link href={`/product/${product.attributes.slug}`}><button className={'my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm'}> Buy Now</button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
