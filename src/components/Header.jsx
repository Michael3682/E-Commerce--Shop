import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6"
import { useCart } from '../context/CartContext'
import SearchBar from './SearchBar'

export default function Header() {
    const { getCartCount } = useCart()
    return (
        <header className="border border-transparent rounded">
            <nav className="flex justify-between">
                <Link to={"/"} className="text-black no-underline">
                    <h1 className="text-4xl font-bold">Cartello</h1>
                </Link>
                <div className="flex items-center gap-10">
                    <SearchBar />
                    <Link to={"/"} className='text-lg font-medium'>Browse</Link>
                    <Link to={"/cart"} className="relative">
                        <FaCartShopping className="text-xl cursor-pointer" />
                        {getCartCount() > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                {getCartCount()}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    )
}