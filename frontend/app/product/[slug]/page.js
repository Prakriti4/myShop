'use client';
 
import React from 'react';
import { useParams } from 'next/navigation';

const ProductPage = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      Slug is {slug}
    </div>
  );
};

export default ProductPage;
