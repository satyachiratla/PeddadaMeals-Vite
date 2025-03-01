import { Toaster } from "react-hot-toast";
import Orders from "../components/Orders/Orders";
import Layout from "../containers/Layout";

export default function OrdersPage() {
  return (
    <Layout>
      <div className="my-8 mx-4 md:mx-20">
        <h1 className="text-center text-sky-500 font-inter tracking-wider font-bold text-3xl md:text-4xl">
          Your Orders
        </h1>
        <Toaster />
        <Orders />
      </div>
    </Layout>
  );
}
