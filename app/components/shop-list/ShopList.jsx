
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { add, setChecked, remove, clear } from "@/store/reducers/shopListSlice";
import Image from "next/image";

export default function ShopList({ className }) {
    const dispatch = useDispatch();
    let shopList = useSelector(state => state.shopList.shopList);
    console.log(shopList)
    let shopListItems = shopList.map(item => {
        return (
            <Typography key={item.id}>{item.title}</Typography>
        )
    })
    return (
        <div className={className}>
            <div className="container bg-[url('/dishes/shop-list-bg.webp')] bg-cover rounded-3xl mx-auto max-w-[450px]">
                <div className="w-full h-full backdrop-blur-[2px]" >
                    <Typography className="text-3xl font-caveat text-center text-black">
                        Список покупок
                    </Typography>
                    <div className="flex justify-center mt-4">
                        <Button ripple={false} onClick={() => dispatch(add({ id: 1, title: "Potatoes" }))}>Add item</Button>
                        <div>
                            {shopListItems}
                        </div>
                        <Button ripple={false} onClick={() => dispatch(clear())}>Clear</Button>
                    </div>
                </div >
            </div >
        </div >
    )
}