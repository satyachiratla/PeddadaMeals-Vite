import Cart from "../components/Cart/Cart";
import Layout from "../containers/Layout";

export default function CartPage() {
  return (
    <Layout>
      <div className="my-8 w-full">
        <h1 className="text-center text-sky-500 font-inter tracking-wider font-bold text-3xl md:text-4xl">
          Cart Items
        </h1>
        <Cart />
      </div>
    </Layout>
  );
}
