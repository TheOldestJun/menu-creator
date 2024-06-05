import { useGetAllProductsQuery, useAddProductMutation } from "@/store/services/products";
import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import Creatable from "../Creatable";
import { capitalize } from "@/libs/helpers";
import toast from "react-hot-toast";

export default function ProductPanel() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [file, setFile] = useState(null);
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

    const handleCreateProduct = (value) => {
        addProduct(capitalize(value));
        toast.success("Продукт успешно создан");
    }

    return (
        <div className="w-full flex flex-col justify-center">
            <Input
                type="file"
                label="Выберите продукт"
                onChange={(e) => setFile(e.target.files[0])}
            />

            <Creatable options={products}
                value={selectedProducts}
                onSelectedOption={setSelectedProducts}
                onCreateOption={value => handleCreateProduct(value)}
                isMulti={true}
            />
        </div>
    )
}