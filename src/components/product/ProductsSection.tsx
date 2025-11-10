'use client';

import { useState, useEffect, useRef } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import EmptyState from '@/components/ui/EmptyState';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  isActive: boolean;
}

interface ProductsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function ProductsSection({ limit = 8, showViewAll = true }: ProductsSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/products?limit=${limit}`);
        const data = await response.json();
        
        if (data.success) {
          setProducts(data.data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [limit]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Auto-play carousel
  useEffect(() => {
    if (products.length > 1) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [products.length]);

  if (loading) {
    return (
      <section className="py-12 sm:py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] mb-4">
              Featured Collection
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Discover our authentic Islamic clothing collection
            </p>
          </div>
          <div className="relative">
            <div id="featuredCarousel" className="carousel slide mb-6">
              <div className="carousel-inner">
                {[...Array(Math.min(limit, 8))].map((_, index) => (
                  <div 
                    key={index} 
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <div className="bg-white rounded-xl border border-[#191919] animate-pulse">
                      <div className="aspect-square bg-gray-200 rounded-t-xl"></div>
                      <div className="p-3 sm:p-4 space-y-3">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 sm:py-16 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorMessage 
            message={error}
            onRetry={() => window.location.reload()}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] mb-4">
            Featured Collection
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our authentic Islamic clothing that honors tradition while embracing contemporary style. 
            Quality craftsmanship meets cultural values in every piece.
          </p>
        </div>

        {products.length > 0 ? (
          <>
            <div className="relative">
              <div id="featuredCarousel" className="carousel slide mb-6 border border-[#191919] rounded-xl overflow-hidden" ref={carouselRef}>
                {/* Carousel Indicators */}
                {products.length > 1 && (
                  <div className="carousel-indicators">
                    {products.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`cursor-pointer ${activeIndex === index ? 'active' : ''}`}
                        aria-label={`Slide ${index + 1}`}
                        aria-current={activeIndex === index}
                      />
                    ))}
                  </div>
                )}

                {/* Carousel Inner */}
                <div className="carousel-inner">
                  {products.map((product, index) => (
                    <div
                      key={product._id}
                      className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
                    >
                      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
                        <Image
                          src={product.images[0] || '/placeholder.png'}
                          alt={product.name}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 flex items-center">
                          <div className="carousel-caption text-start max-w-2xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                              {product.name}
                            </h1>
                            <p className="text-base sm:text-lg text-white opacity-90 mb-6 drop-shadow-md">
                              {product.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                              <Link
                                href={`/products/${product._id}`}
                                className="bg-[#31493C] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 button-hover-shadow font-medium text-center"
                              >
                                View Product
                              </Link>
                              <Link
                                href="/products"
                                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors text-center"
                              >
                                Browse Collection
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                {products.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      type="button"
                      onClick={goToPrevious}
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    </button>
                    <button
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
                      type="button"
                      onClick={goToNext}
                      aria-label="Next"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {showViewAll && (
              <div className="text-center mt-8 sm:mt-12">
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  View All Items
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </>
        ) : (
          <EmptyState
            title="No products available"
            description="Check back later for new products."
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            }
          />
        )}
      </div>
    </section>
  );
} 