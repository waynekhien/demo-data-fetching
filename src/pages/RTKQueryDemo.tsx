import React from 'react';
import { useGetProductsQuery } from '../services/api';
import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const RTKQueryDemo: React.FC = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <LoadingSpinner color="purple-500" text="Loading products with RTK Query..." />;
  }

  if (error) {
    return <ErrorMessage message={'status' in error ? String(error.status) : 'An error occurred'} />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-lg shadow-lg p-8 mb-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-purple-500">RTK Query Demo</h1>
              <p className="text-textSecondary mt-2">Displaying {data?.products.length} of {data?.total} products</p>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.products.map((product) => (
              <ProductCard key={product.id} product={product} color="purple-500" />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RTKQueryDemo;