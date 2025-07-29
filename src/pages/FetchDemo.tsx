import React, { useState, useEffect } from 'react';
import type { Product, ProductsResponse } from '../types';
import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const FetchDemo: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      const data: ProductsResponse = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner color="primary" text="Loading products..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={fetchProducts} />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-surface rounded-lg shadow-lg p-8 mb-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary">Fetch API Demo</h1>
              <p className="text-textSecondary mt-2">Displaying {products.length} of {total} products</p>
            </div>
            {/* <button
              onClick={fetchProducts}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105 shadow-lg font-semibold"
            >
              Refresh
            </button> */}
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} color="primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetchDemo;
