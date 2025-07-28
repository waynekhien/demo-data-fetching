import React from 'react';
import useSWR from 'swr';
import type { ProductsResponse } from '../types';
import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const SWRDemo: React.FC = () => {
  const { data, error, isLoading } = useSWR<ProductsResponse>(
    'https://dummyjson.com/products',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 5000,
    }
  );

  if (isLoading) {
    return <LoadingSpinner color="accent" text="Loading products with SWR..." />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-lg shadow-lg p-8 mb-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-accent">SWR Demo</h1>
              <p className="text-textSecondary mt-2">Displaying {data?.products.length} of {data?.total} products</p>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.products.map((product) => (
              <ProductCard key={product.id} product={product} color="accent" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SWRDemo;
