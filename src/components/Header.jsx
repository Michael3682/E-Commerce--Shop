import { FaMagnifyingGlass, FaCartShopping } from "react-icons/fa6";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>Cartello</h1>
                <div className="nav-buttons-container">
                    <div className="search-bar--container">
                        <input className="search-bar" type="text" />
                        <FaMagnifyingGlass />
                    </div>
                    <FaCartShopping />
                </div>
            </nav>
        </header>
    )
}