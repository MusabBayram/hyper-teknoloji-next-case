import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../utils/api";

type Product = {
  productID: number;
  productName: string;
  salePrice: number;
  productData?: {
    productMainImage?: string;
  };
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
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
