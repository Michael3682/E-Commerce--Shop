import { Link } from 'react-router-dom'
import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";

export default function Header({ search, setSearch }) {
    return (
        <header className="border border-transparent rounded">
            <nav className="flex justify-between">
                <h1 className="text-4xl font-bold">Cartello</h1>
                <div className="flex items-center gap-5">
                    <div className="flex justify-center items-center gap-2 bg-[#ffffff] p-2 px-3 rounded-[50px] border border-[#24242440]">
                        <input
                            className="outline-none text-black text-xs text-gray-800"
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search products..."
                        />
                        <FaMagnifyingGlass className="text-gray-800 text-m" />
                    </div>
                    <Link to={"/cart"}>
                        <FaCartShopping className="text-xl cursor-pointer" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}