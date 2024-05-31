
import { Typography } from "@material-tailwind/react";

export default function ShopList({ className }) {
    return (
        <div className={className}>
            <div className="container bg-[url('/dishes/shop-list-bg.webp')] bg-cover rounded-3xl mx-auto max-w-[450px]">
                <div className="w-full h-full backdrop-blur-[2px]">
                    <Typography className="text-3xl font-caveat text-center text-black">
                        Список покупок
                    </Typography>
                </div>
            </div>
        </div>
    )
}