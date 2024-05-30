import Image from "next/image";

export default function Plate({ className, children }) {
    return (
        <>
            <div className={`${className} flex items-center justify-center bg-[url('/dishes/menu.webp')]`}>{/* 
                <Image
                    src="/dishes/menu.webp"
                    alt="plate background image"
                    width="450"
                    height="640"
                /> */}
                {children}
            </div>
        </>


    )
}