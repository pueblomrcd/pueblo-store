'use client';

import Header from '@/components/layout/Header';
import Link from 'next/link';
import { ArrowLeft, Building2, Users, Truck, Shield } from 'lucide-react';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base">
      <Header />

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-6 sm:mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-[#191919] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#191919] mb-4">About Pueblo Mercado</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Discover authentic Islamic clothing that honors tradition while embracing contemporary style. 
            Quality craftsmanship meets cultural values in every piece.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
            At Pueblo Mercado, we believe in creating authentic Islamic clothing that honors tradition 
            while embracing contemporary style. Every piece reflects our commitment to modesty, respect, 
            and the timeless values that guide our community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-section rounded-lg shadow-sm border border-gray-200 p-6">
            <Building2 className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-[#191919] mb-2">Authentic Design</h3>
            <p className="text-gray-600">
              Each piece is thoughtfully designed to honor Islamic traditions while embracing modern elegance.
            </p>
          </div>

          <div className="bg-section rounded-lg shadow-sm border border-gray-200 p-6">
            <Users className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-[#191919] mb-2">Quality Craftsmanship</h3>
            <p className="text-gray-600">
              Premium materials and meticulous attention to detail ensure every garment meets our high standards.
            </p>
          </div>

          <div className="bg-section rounded-lg shadow-sm border border-gray-200 p-6">
            <Truck className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-[#191919] mb-2">Cultural Values</h3>
            <p className="text-gray-600">
              Every piece reflects our commitment to modesty, respect, and timeless values.
            </p>
          </div>

          <div className="bg-section rounded-lg shadow-sm border border-gray-200 p-6">
            <Shield className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-[#191919] mb-2">Timeless Elegance</h3>
            <p className="text-gray-600">
              Discover clothing that combines traditional modesty with contemporary style and sophistication.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-section rounded-lg shadow-sm border border-gray-200 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#191919] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our collection of authentic Islamic clothing that honors tradition with contemporary elegance. 
            Start shopping today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-[#31493C] text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 button-hover-shadow font-medium"
            >
              Browse Collection
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-section transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
