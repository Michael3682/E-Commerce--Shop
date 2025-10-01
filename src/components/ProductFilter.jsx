export default function ProductFilter({ categories, selectedCategory, setSelectedCategory, sort, setSort }) {
    return (
        <div className="py-5 px-10 flex flex-col gap-15 bg-[#ffffff] rounded border border-[#24242440]">
            <div className="flex flex-col gap-5">
                <h1 className="text-lg font-bold text-[#242424]">Categories</h1>
                <hr className="border-t border-[#24242440]" />
                <select
                    className="outline-none bg-[#ffffff] text-black text-sm rounded p-1 capitalize border border-[#24242440]"
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-lg font-bold text-[#242424]">Sort By</h1>
                <hr className="border-t border-[#24242440]" />
                <select
                    className="outline-none bg-[#ffffff] text-black text-sm rounded p-1 capitalize border border-[#24242440]"
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value="default">Default</option>
                    <option value="price-desc">High to Low</option>
                    <option value="price-asc">Low to High</option>
                    <option value="rate-desc">Highest Rated</option>
                    <option value="rate-asc">Lowest Rated</option>
                    <option value="title-asc">Title A-Z</option>
                    <option value="title-desc">Title Z-A</option>
                </select>
            </div>
        </div>
    )
}