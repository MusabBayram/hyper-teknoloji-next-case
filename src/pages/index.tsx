import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}
