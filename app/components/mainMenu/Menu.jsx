import { useGetCategoriesQuery } from "@/store/services/categories"
import { Typography } from "@material-tailwind/react"
import Link from "next/link"

export default function Menu() {
    const { data, isLoading, error } = useGetCategoriesQuery()
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>Error</h1>
    const categories = data.map(category => {
        return (
            <Typography
                className={`mr-4 cursor-pointer py-1.5 text-5xl font-caveat text-gray-400`}
                key={category.id}
            >
                <Link href={`/menu/${category.url}`}>{category.title}</Link>
            </Typography>
        )
    })
    return (
        <div className="text-white z-0 fixed top-[20%] left-[5%]">
            {categories}
        </div>
    )
}