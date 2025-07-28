import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, color }) => (
  <div key={product.id} className="bg-surface border border-gray-200/80 rounded-xl p-5 hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-w-1 aspect-h-1 mb-4 overflow-hidden rounded-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="font-bold text-xl text-textPrimary mb-2 truncate">{product.title}</h3>
    <div className="flex justify-between items-center mb-3">
      <span className={`text-3xl font-bold text-${color}`}>${product.price}</span>
    </div>
  </div>
);

export default ProductCard;