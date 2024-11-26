import { XMarkIcon } from "@heroicons/react/16/solid"
import PropTypes from "prop-types"

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXmarkIcon
  if (handleDelete) {
    renderXmarkIcon = (
      <XMarkIcon
        className="h-6 w-6 text-black cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    )
  }

  OrderCard.propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
  }
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
            onError={(e) =>
              (e.target.src = `https://picsum.photos/200/300?random=${id}`)
            }
          />
        </figure>
        <p className="text-sm font-light ">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {renderXmarkIcon}
      </div>
    </div>
  )
}

export default OrderCard
