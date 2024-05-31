import { useGetCategoriesQuery } from "@/store/services/categories"
import { Typography } from "@material-tailwind/react"
import Link from "next/link"

export default function Menu() {
    const { data, isLoading, error } = useGetCategoriesQuery()
    if (isLoading) return (
        <div className="fixed top-[20%]">
            <Typography className="text-5xl font-caveat text-gray-400">Загрузка...</Typography>
        </div>
    )
    if (error) return (
        <div className="fixed top-[20%]">
            <Typography className="text-5xl font-caveat text-gray-400">{`Ошибка сервера: ${error.message}`}</Typography>
        </div>
    )
    const categories = data.map(category => {
        return (
            <Typography
                className={` cursor-pointer py-1.5 text-5xl font-caveat text-gray-400`}
                key={category.id}
            >
                <Link href={`/menu/${category.url}`}>{category.title}</Link>
            </Typography>
        )
    })
    return (
        <div className="fixed top-[20%]">
            {categories}
        </div>
    )
}