import Image from "next/image";

export default function Back({ className, children }) {
    return (
        <>
            <div>
                <div className={className}>
                    <Image
                        src="/dishes/shop-list.webp"
                        alt="shopping list background image"
                        width="450"
                        height="640"
                    />
                    {children}
                </div>
            </div>

        </>


    )
}