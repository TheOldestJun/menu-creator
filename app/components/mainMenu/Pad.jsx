import Image from "next/image";
import Menu from "./Menu";

export default function Pad({ className }) {
    return (
        <>
            <div className={className}>
                <Image
                    src="/dishes/menu.webp"
                    alt="plate background image"
                    width="450"
                    height="640"
                    className="rounded-3xl"
                />
                <Menu />
            </div>
        </>


    )
}