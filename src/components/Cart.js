import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_IMAGE } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatcher = useDispatch();

  const deleteItemsFromCart = (index) => {
    dispatcher(removeItem(index));
  };

  const emptyItemsFromCart = () => {
    dispatcher(clearCart());
  };

  return (
    <div>
      <div className="user-info flex flex-col ml-[30px] my-5 shadow-lg w-[300px]">
        <p className="text-[20px] font-bold px-3 py-3">Logged in</p>
        <p className="text-[20px] px-3 py-3">{loggedInUser}</p>
      </div>

      <div className="flex flex-row items-center">
        <div className="heading text-[20px] font-bold px-3 py-3 ml-[30px]">
          Your Cart
        </div>
        <button
          className="ml-12 px-4 bg-black text-white rounded-lg cursor-pointer"
          onClick={() => emptyItemsFromCart()}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <div className="ml-[30px] my-2 text-lg text-black">
          Cart is empty. Add items to the cart!
        </div>
      )}
      {cartItems.map((item, index) => (
        <div
          data-testid="cartItems"
          className="main-cart-items flex flex-col ml-[30px] my-2 shadow-lg w-[800px]"
          key={item?.card?.info?.id + Math.random()}
        >
          <div className="actual-cart-items flex flex-row justify-between items-center">
            <div className="img-name-price-container flex flex-row items-center">
              <img
                className="px-7 py-5 w-30"
                src={RESTAURANT_MENU_IMAGE + item?.card?.info?.imageId}
              ></img>
              <div className="item-name-and-price">
                <div className="text-lg font-semibold">
                  {item?.card?.info?.name}
                </div>
                <div className="text-sm text-gray-500 mb-0">
                  Price: ₹
                  {item?.card?.info?.finalPrice / 100 ||
                    item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </div>
              </div>
            </div>
            <button
              className="mr-4 px-4 bg-red-400 text-white rounded-lg cursor-pointer"
              onClick={() => deleteItemsFromCart(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
