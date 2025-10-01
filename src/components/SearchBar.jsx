import { FaMagnifyingGlass } from "react-icons/fa6"
import { useSearch } from '../context/SearchContext'

export default function SearchBar() {
    const { searchQuery, setSearchQuery } = useSearch()

    return (
        <div className="flex justify-center items-center gap-2 bg-[#ffffff] p-2 px-3 rounded-[50px] border border-[#24242440]">
            <input
                className="outline-none text-black text-xs text-gray-800"
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products..."
            />
            <FaMagnifyingGlass className="text-gray-800 text-m" />
        </div>
    )
}