import { useGetAllProductsQuery } from "@/store/services/products";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import Creatable from "../Creatable";

export default function ProductPanel() {
    const [selectedProduct, setSelectedProduct] = useState();

    const {
        data,
        error,
        isLoading,
    } = useGetAllProductsQuery({
        refetchOnMountOrArgChange: true,
    });
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error</h1>;

    let products = data?.map((product) => {
        return { value: product.id, label: product.title };
    });

    return (
        <div className="w-full flex flex-col justify-center">
            <Input label="Выберите продукт" />
            <Creatable options={products}
                value={selectedProduct}
                onSelectedOption={setSelectedProduct}
            />
        </div>
    )
}