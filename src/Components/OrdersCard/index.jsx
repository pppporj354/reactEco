import { ChevronRightIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
  };
  return (
    <div className="flex justify-between items-center border border-black w-80 p-4 mb-4 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01.02.2023</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
