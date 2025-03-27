import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../utils/api";

const keywordMap: { [key: string]: string[] } = {
  Tümü: [],
  Valorant: ["valorant", "vp", "valorant points"],
  Zula: ["zula"],
  "Rise Online": [
    "rise online",
    "arcana",
    "repair hammer",
    "goldbar",
    "gold bar",
  ],
  "League of Legends": ["league of legends", "lol", "riot points", "rp"],
  Metin2: ["metin2", "ejder", "ep", "emerald"],
  Netflix: ["netflix"],
  Twitch: ["twitch"],
  Spotify: ["spotify"],
  "Google Play": ["google play"],
  "Amazon Gift Card": ["amazon"],
  "Mobile Legends": ["mobile legends"],
  "Free Fire": ["free fire"],
  "PUBG Mobile": ["pubg", "uc", "e-pin"],
  "Bigo Live": ["bigo"],
  Roblox: ["roblox"],
  "Brawl Stars": ["brawl stars"],
  "Clash of Clans": ["clash of clans"],
  "Clash Royale": ["clash royale"],
  "Knight Online": ["knight online"],
};

type Product = {
  productID: number;
  productName: string;
  salePrice: number;
  productCategoryID: number;
  productData?: {
    productMainImage?: string;
  };
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü"); // Default: Tümü

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (err) {
        console.error("Ürünler alınamadı:", err);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="bg-[#111827] min-h-screen py-6 px-2 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
      <div className="w-full sm:max-w-[90%] md:max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Ürün Listesi</h1>

        <div className="flex flex-wrap gap-3 mb-6">
          {Object.keys(keywordMap).map((name) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`px-4 py-2 rounded text-sm font-medium ${
                selectedCategory === name
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {products.length > 0 ? (
            products
              .filter((product) =>
                selectedCategory === "Tümü"
                  ? true
                  : keywordMap[selectedCategory]?.some((keyword) =>
                      keyword === "ep"
                        ? product.productName
                            .toLowerCase()
                            .split(/[\s-()]+/)
                            .includes(keyword)
                        : product.productName.toLowerCase().includes(keyword)
                    )
              )
              .map((product) => (
                <ProductCard key={product.productID} product={product} />
              ))
          ) : (
            <p>Ürün bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
}
