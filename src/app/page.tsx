import Link from "next/link";
import ProductsSection from "@/components/product/ProductsSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Background pattern component
const BackgroundPattern = () => (
  <div className="absolute inset-0 opacity-50" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }} />
);

// Trust indicator component
const TrustIndicator = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span>{text}</span>
  </div>
);

// Feature card component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  gradientFrom, 
  gradientTo 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  gradientFrom: string; 
  gradientTo: string; 
}) => (
  <div className="group p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl sm:text-2xl font-bold text-[#191919] mb-3 sm:mb-4">{title}</h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-base">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-base">
        <div className="absolute inset-0 bg-gradient-to-br from-base via-section to-base" />
        <BackgroundPattern />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-sm font-medium bg-[#4a6b5a] text-white mb-4 sm:mb-6">
              ✨ Authentic Islamic Fashion
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#191919] mb-4 sm:mb-6 leading-tight">
            Modest Fashion,
            <br />
            <span className="bg-gradient-to-r from-[#E57A44] to-[#69140E] bg-clip-text text-transparent">
              Timeless Elegance
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Discover authentic Islamic clothing that honors tradition while embracing contemporary style. 
            Quality craftsmanship meets cultural values in every piece.
          </p>
          
          <div className="flex justify-center mb-8 sm:mb-12 px-4">
            <Link 
              href="/products" 
              className="bg-[#31493C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-800 transition-all duration-200 button-hover-shadow"
            >
              Shop Collection
            </Link>
          </div>

        </div>
      </section>

      {/* Products Section */}
      <ProductsSection limit={8} showViewAll={true} />

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#191919] mb-4">
              Quality Craftsmanship, Cultural Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece is carefully crafted to honor tradition while embracing contemporary style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard 
              icon={<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>}
              title="Authentic Design"
              description="Each piece is thoughtfully designed to honor Islamic traditions while embracing modern elegance and style."
              gradientFrom="from-blue-500"
              gradientTo="to-blue-600"
            />

            <FeatureCard 
              icon={<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
              title="Quality Craftsmanship"
              description="Premium materials and meticulous attention to detail ensure every garment meets our high standards of quality and comfort."
              gradientFrom="from-green-500"
              gradientTo="to-green-600"
            />

            <FeatureCard 
              icon={<svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>}
              title="Cultural Values"
              description="Every piece reflects our commitment to modesty, respect, and the timeless values that guide our community."
              gradientFrom="from-purple-500"
              gradientTo="to-purple-600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191919] mb-4">
            Discover Your Style
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Explore our collection of authentic Islamic clothing that honors tradition with contemporary elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products" 
              className="bg-[#31493C] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-200 button-hover-shadow"
            >
              Explore Collection
            </Link>
            <Link 
              href="/auth/register" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
