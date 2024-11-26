import { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className='font-medium text-xl'>My orders</h1>
      </div>
      {context.order.map((order, index) => 
      (
        <Link to={`/my-orders/${index}`} key={index}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      )
      )}
    </Layout>
  );
}

export default MyOrders;
