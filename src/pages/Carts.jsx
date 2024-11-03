import NotFound from "./NotFound";
import { useExtendedCart } from "../data/use-react-cart";

function Carts() {
    const {
        isEmpty,
        cartItems,
        cartTotals,
        emptyCart,
        updateCartItemQuantity,
        removeItemFromCart,
    } = useExtendedCart();

    // Render NotFound component if the cart is empty
    if (isEmpty && cartItems.length === 0 ) return <NotFound />;

    return (
        <div className="max-w-6xl mx-auto p-5">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart ({cartItems.length} items)</h2>
            <div className="bg-white shadow-md rounded-lg mb-6">
                <div className="grid grid-cols-1 gap-4 p-4">
                    {cartItems.map((item, idx) => (
                        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm" key={idx}>
                            <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                            <div className="flex flex-col flex-grow mx-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600">Price: ${(item.price * item.quantity).toFixed(2)}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full text-white hover:bg-red-700 transition">-</button>
                                <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center bg-green-600 rounded-full text-white hover:bg-green-700 transition">+</button>
                                <button onClick={() => removeItemFromCart(item.id)} className="bg-teal-600 hover:bg-teal-700 p-2 rounded-md text-sm text-white">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-200 rounded-b-md">
                    <h3 className="text-xl font-bold">Total: ${(cartTotals).toFixed(2)}</h3>
                    <button onClick={emptyCart} className="bg-red-600 hover:bg-red-700 p-2 rounded-md text-sm text-white">Empty Cart</button>
                </div>
            </div>

        </div>
    );
}

export default Carts;