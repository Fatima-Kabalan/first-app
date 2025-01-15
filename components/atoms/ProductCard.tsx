import Link from "next/link"

type ProductCardProps = {
    productTitle: string,
    buttonTitle: string,
    id:string
}

export default function ProductCard({productTitle, buttonTitle, id}: ProductCardProps){
    return(
        <div className="flex flex-col gap-2 border p-4 overflow-hidden shadow-lg rounded">
            <h1 className="text-xl font-bold">{productTitle}</h1>
            <p>Check the details</p>
            <Link className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors duration-200" href={`/categories/${id}`}>
                Details about it
            </Link>
        </div>
    )
}