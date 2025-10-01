import { FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function CheckoutSuccessModal() {
    const navigate = useNavigate()
    const { clearCart } = useCart()

    const handleContinueShopping = () => {
        clearCart()
        navigate('/')
    }

    return (
        <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                <div className="flex flex-col items-center text-center">
                    <FaCheckCircle className="text-green-500 text-5xl mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Order Placed Successfully!</h2>
                    <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
                    <p className="text-gray-600 mb-6">Your order details have been sent to your email.</p>
                    <button onClick={handleContinueShopping} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}