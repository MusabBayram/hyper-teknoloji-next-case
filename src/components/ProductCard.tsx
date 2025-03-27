import Link from "next/link";

type ProductProps = {
  product: {
    productID: number;
    productName: string;
    salePrice: number;
    productCategoryID: number; // Added productCategoryID
    productData?: {
      productMainImage?: string;
      productDescription?: string;
    };
  };
};

export default function ProductCard({ product }: ProductProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-[#1f2937] shadow hover:shadow-lg transition-all flex flex-col items-center w-full sm:min-w-[180px] sm:max-w-[220px]">
      <img
        src={product.productData?.productMainImage || "/placeholder.jpg"}
        alt={product.productName}
        className="w-full h-[160px] object-contain rounded"
      />
      <div className="text-center">
        <h2 className="text-lg font-bold mt-2 text-white">
          {product.productName}
        </h2>
        <p className="text-gray-300">{product.salePrice} ₺</p>
        <div className="text-gray-400 text-sm mb-6 space-y-2">
          {product.productData?.productDescription && (
            <p>{product.productData.productDescription}</p>
          )}
        </div>
        <Link href={`/product/${product.productID}`}>
          <button className="mt-2 px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
            Detay
          </button>
        </Link>
      </div>
    </div>
  );
}
