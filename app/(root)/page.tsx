import ProductList from "@/components/shared/product/product-list";
import { fetchLatestProduct } from "@/lib/actions/product.actions";

const HomePage = async() => {
  const latestProduct = await fetchLatestProduct();
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="Newest Arrivals" data={latestProduct} />
    </div>
  );
};

export default HomePage;
