import { useGetAllProductsQuery, useAddProductMutation } from "@/store/services/products";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import Creatable from "../Creatable";
import { capitalize } from "@/libs/helpers";

export default function ProductPanel() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    console.log(selectedProducts)
    const [addProduct] = useAddProductMutation();
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
                value={selectedProducts}
                onSelectedOption={setSelectedProducts}
                onCreateOption={(value => addProduct(capitalize(value)))}
                isMulti={true}
            />
        </div>
    )
}