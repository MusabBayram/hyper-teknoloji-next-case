import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../utils/api";

type Product = {
  productID: number;
  productName: string;
  salePrice: number;
  productCategoryID: number; // Added productCategoryID
  productData?: {
    productMainImage?: string;
    productDescription?: string;
  };
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]); // Added state for products
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data); // Save fetched products
        const foundProduct = response.data.find(
          (p: Product) => p.productID === Number(id)
        );
        setProduct(foundProduct || null);
      } catch (err) {
        console.error("Ürün alınamadı:", err);
      }
    };

    if (id) getProducts();
  }, [id]);

  if (!product) return <p className="text-white p-6">Yükleniyor...</p>;

  return (
    <div className="min-h-screen bg-[#111827] text-white py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto bg-[#1f2937] rounded-lg shadow p-6 grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.productData?.productMainImage || "/placeholder.jpg"}
            alt={product.productName}
            className="w-full h-[300px] object-contain rounded mb-6"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
          <p className="text-2xl text-blue-400 mb-2">{product.salePrice} ₺</p>
          <div className="mb-4">
            <span className="text-sm bg-gray-700 px-2 py-1 rounded text-gray-300">
              Kategori: {product.productCategoryID}
            </span>
          </div>
          <div className="text-gray-400 text-sm mb-6 space-y-2">
            {product.productData?.productDescription && (
              <p>{product.productData.productDescription}</p>
            )}
          </div>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded text-lg">
            Sepete Ekle
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 bg-[#1f2937] p-6 rounded-lg text-white">
        <div className="border-b border-gray-600 mb-4 flex space-x-4">
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "description"
                ? "border-b-2 border-blue-500"
                : "hover:text-blue-400"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Ürün Açıklaması
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "technical"
                ? "border-b-2 border-blue-500"
                : "hover:text-blue-400"
            }`}
            onClick={() => setActiveTab("technical")}
          >
            Teknik Detaylar
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "return"
                ? "border-b-2 border-blue-500"
                : "hover:text-blue-400"
            }`}
            onClick={() => setActiveTab("return")}
          >
            İptal & İade Koşulları
          </button>
        </div>

        <div className="text-sm text-gray-300 space-y-4">
          {activeTab === "description" && (
            <div>
              <h3 className="font-semibold text-white">Ürün Açıklaması</h3>
              <p>
                {product.productData?.productDescription ||
                  "Bu ürün için açıklama bulunmamaktadır."}
              </p>
            </div>
          )}
          {activeTab === "technical" && (
            <div>
              <h3 className="font-semibold text-white">Teknik Detaylar</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Kodlar yalnızca 1 kez kullanılabilir.</li>
                <li>Dijital ürünler için sistem gereksinimi düşüktür.</li>
                <li>Ürün anında teslim edilir.</li>
              </ul>
            </div>
          )}
          {activeTab === "return" && (
            <div>
              <h3 className="font-semibold text-white">
                İptal & İade Koşulları
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Teslim edilen kodların tek kullanımlık olması nedeniyle iade
                  kabul edilmemektedir.
                </li>
                <li>Dijital ürünlerde değişim yapılamaz.</li>
                <li>Toplu siparişlerde özel kurallar geçerlidir.</li>
                <li>Daha fazla bilgi için ilgili sayfamızı ziyaret ediniz.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-4 text-white">Benzer Ürünler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {products
            .filter(
              (p: Product) =>
                p.productCategoryID === product.productCategoryID &&
                p.productID !== product.productID
            )
            .slice(0, 4)
            .map((similarProduct) => (
              <div
                key={similarProduct.productID}
                className="bg-[#1f2937] p-4 rounded text-white text-sm text-center"
              >
                <img
                  src={
                    similarProduct.productData?.productMainImage ||
                    "/placeholder.jpg"
                  }
                  className="h-24 object-contain mx-auto mb-2"
                />
                <p>{similarProduct.productName}</p>
                <p className="text-blue-400">{similarProduct.salePrice} ₺</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
