import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProductList />
      <Footer />
    </div>
  );
}
