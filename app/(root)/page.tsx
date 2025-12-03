import ProductList from "@/components/shared/product/product-list";
import { fetchLatestProduct } from "@/lib/actions/product.action";

const HomePage = async() => {
  const latestProduct = await fetchLatestProduct();
  console.log('latestProduct',latestProduct)
  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList title="Newest Arrivals" data={latestProduct} />
    </div>
  );
};

export default HomePage;
