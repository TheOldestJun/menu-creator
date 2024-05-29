import Image from "next/image";

export default function Plate({ className, children }) {
    return (
        <>
            <div>
                <div className={className}>
                    <Image
                        src="/dishes/menu.webp"
                        alt="plate background image"
                        width="450"
                        height="640"
                    />
                    {children}

                </div>
            </div>

        </>


    )
}