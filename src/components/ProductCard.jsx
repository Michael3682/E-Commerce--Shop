import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export default function ProductCard({ product }) {
    const {
        thumbnail,
        title,
        price,
        discountPercentage,
        rating,
    } = product

    const discount = price * (discountPercentage / 100)
    const finalPrice = (price - discount).toFixed(2)

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

        const stars = []

        for (let i = 0; i < fullStars; i++) {
            stars.push(<IoStar key={`full-${i}`} className="text-yellow-400" />)
        }

        if (hasHalfStar) {
            stars.push(<IoStarHalf key="half" className="text-yellow-500" />)
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<IoStarOutline key={`empty-${i}`} className="text-gray-300" />)
        }

        return stars
    }

    return (
        <div className="w-auto flex flex-col items-center bg-[#ffffff] rounded text-black border border-[#24242440] relative">
            <div className="w-[150px]">
                <img src={thumbnail} alt={title} />
                <p className="absolute top-0 right-0 bg-red-300 p-1 px-3 text-xs font-medium rounded rounded-tl-none rounded-br-none">-{Math.round(discountPercentage)}%</p>
            </div>
            <div className="p-3 flex flex-col justify-between gap-3 grow w-full border-t border-black/10">
                <p className="font-semibold">{title}</p>
                <div className="flex flex-row items-center gap-2">
                    <div className="flex">
                        {renderStars(rating)}
                    </div>
                    <p className="text-sm">{rating}</p>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm line-through opacity-50">${price}</p>
                        <p className="text-sm font-medium">${finalPrice}</p>
                    </div>
                    <button className="bg-[#242424] p-1 px-2 rounded cursor-pointer text-[#ffffff] text-sm">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
