import { FaTrash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import Header from "../components/Header"

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart()
    const navigate = useNavigate()

    return (
        <div>
            <Header />
            <div className="mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {cartItems.map(item => {
                            const itemTotal = item.price * (1 - (item.discountPercentage || 0) / 100) * item.quantity
                            return (
                                <div key={item.id} className="flex gap-4 bg-white p-4 rounded border border-[#24242440]">
                                    <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p className="text-sm text-gray-600">${(item.price * (1 - (item.discountPercentage || 0) / 100)).toFixed(2)} each</p>
                                        <div className="flex items-center gap-4 mt-2">
                                            <div className="flex items-center border border-[#24242440] rounded">
                                                <button className="px-3 py-1 border-r border-[#24242440] cursor-pointer" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                    -
                                                </button>
                                                <span className="px-3">{item.quantity}</span>
                                                <button className="px-3 py-1 border-l border-[#24242440] cursor-pointer" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                    +
                                                </button>
                                            </div>
                                            <button className="text-red-500 cursor-pointer" onClick={() => removeFromCart(item.id)}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-semibold">${itemTotal.toFixed(2)}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="mt-6 text-right">
                            <div className="text-lg font-semibold">
                                Total: ${getCartTotal().toFixed(2)}
                            </div>
                            <button className="mt-4 bg-[#242424] text-white px-6 py-2 rounded cursor-pointer hover:bg-[#363636]" onClick={() => navigate('/checkout')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}