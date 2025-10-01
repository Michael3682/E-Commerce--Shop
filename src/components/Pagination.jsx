export default function Pagination({ page, setPage, totalPages }) {
    return (
        <div className="flex justify-center items-center mt-4 gap-3">
            <button className="px-3 py-1 rounded text-sm bg-[#ffffff] text-[#242424] border border-[#24242440] cursor-pointer" onClick={() => setPage(1)} disabled={page === 1}>
                First
            </button>
            <button className="px-3 py-1 rounded text-sm bg-[#ffffff] text-[#242424] border border-[#24242440] cursor-pointer" onClick={() => setPage(page - 1)} disabled={page === 1}>
                Prev
            </button>
            <span className="text-sm">Page {page} of {totalPages}</span>
            <button className="px-3 py-1 rounded text-sm bg-[#ffffff] text-[#242424] border border-[#24242440] cursor-pointer" onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                Next</button>
            <button className="px-3 py-1 rounded text-sm bg-[#ffffff] text-[#242424] border border-[#24242440] cursor-pointer" onClick={() => setPage(totalPages)} disabled={page === totalPages}>
                Last
            </button>
        </div>
    )
}
