import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border-dark py-12 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-[#191919] mb-4">Pueblo Mercado</h3>
            <p className="text-gray-600">
              Modest Fashion, Timeless Elegance. Discover authentic Islamic clothing that honors tradition while embracing contemporary style.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#191919] mb-4">Collection</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/products" className="hover:text-[#191919]">Collection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#191919] mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-[#191919]">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#191919] mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/contact" className="hover:text-[#191919]">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border-dark mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 Pueblo Mercado. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

