import React, { useEffect, useState } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-md transition-all duration-300 ${
        isSticky ? "bg-[#2E3544]/90 py-2" : "bg-[#1E232F] py-4"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto w-full px-4 gap-2">
        <div className="flex items-center justify-between w-full">
          <img src="/logo.webp" alt="Logo" className="h-8 md:h-6" />
          {!isSticky && (
            <div className="flex md:hidden items-center space-x-4 text-sm font-medium text-white">
              <a href="#" className="hover:underline">
                GİRİŞ YAP
              </a>
              <div className="relative">
                <img src="/icons/cart-icon.png" alt="Cart" className="h-5" />
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
                  0
                </span>
              </div>
            </div>
          )}
        </div>

        {!isSticky && (
          <div className="w-full md:flex-grow max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Ürün, kategori veya ilan ara"
              className="w-full px-4 py-2 rounded-md bg-[#181C23] text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        )}

        {isSticky && (
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <a href="#" className="hover:underline px-2">
              Siparişlerim
            </a>
            <a href="#" className="hover:underline px-2">
              Hesabım
            </a>
            <a href="#" className="hover:underline px-2">
              Yayıncılar
            </a>
            <a href="#" className="hover:underline px-2">
              İlan Ekle
            </a>
            <a href="#" className="hover:underline text-red-500 px-2">
              Bakiye Yükle
            </a>
            <a href="#" className="hover:underline px-2">
              Türkçe / TL
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
