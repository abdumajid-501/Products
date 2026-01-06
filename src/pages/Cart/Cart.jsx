import { useSelector, useDispatch } from "react-redux";
import {
  increase,
  decrease,
  removeFromCart,
} from "../../features/productsSlice";

function Cart() {
  const cartProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  if (cartProducts.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-500 text-xl">
        Savatcha bo‘sh 🛒
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Savatcha</h1>

      <div className="space-y-4">
        {cartProducts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 sm:items-center border rounded-lg p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain self-center sm:self-auto"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-lg break-words">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 break-words">
                {item.description}
              </p>
              <p className="mt-2 font-semibold text-green-600">
                ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decrease(item.id))}
                className="px-2 py-1 border rounded"
              >
                -
              </button>

              <span className="font-semibold">{item.amount}</span>

              <button
                onClick={() => dispatch(increase(item.id))}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-700 sm:ml-4"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 border-t pt-4">
        <h2 className="text-xl font-semibold">
          Jami: ${totalPrice.toFixed(2)}
        </h2>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Buyurtma berish
        </button>
      </div>
    </div>
  );
}

export default Cart;
