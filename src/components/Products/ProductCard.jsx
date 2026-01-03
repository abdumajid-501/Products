import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/productsSlice";

function ProductCard({ product }) {
  const { image, title, description, price } = product;
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <li className="card bg-accent shadow-sm border-none">
      <figure className="bg-base-200 py-3">
        <img
          className="w-full h-[150px] object-contain"
          src={image}
          alt={title}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 200
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl">$ {price}</span>
          <button onClick={addCart} className="btn btn-primary">
            Add <IoMdCart size={18} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
