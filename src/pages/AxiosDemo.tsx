import React, { useState, useEffect } from 'react';
import axios from 'axios';
import type { Product, ProductsResponse } from '../types';
import ProductCard from '../components/common/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';

const AxiosDemo: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get<ProductsResponse>('https://dummyjson.com/products');
      setProducts(response.data.products);
      setTotal(response.data.total);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner color="secondary" text="Loading products with Axios..." />;
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
              <h1 className="text-4xl font-bold text-secondary">Axios Demo</h1>
              <p className="text-textSecondary mt-2">Displaying {products.length} of {total} products</p>
            </div>
            {/* <button
              onClick={fetchProducts}
              className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-transform transform hover:scale-105 shadow-lg font-semibold"
            >
              Refresh
            </button> */}
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} color="secondary" />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AxiosDemo;
