export default function Pagination({ page, setPage, totalPages }) {
    return (
        <div className="flex justify-center mt-4 gap-2">
            <button
                className="px-3 py-1 border rounded"
                onClick={() => setPage(1)}
                disabled={page === 1}
            >First</button>
            <button
                className="px-3 py-1 border rounded"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >Prev</button>
            <span>Page {page} of {totalPages}</span>
            <button
                className="px-3 py-1 border rounded"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >Next</button>
            <button
                className="px-3 py-1 border rounded"
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
            >Last</button>
        </div>
    );
}
