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
    /* 
    const data = [
        { id: 1, title: 'Картофель' },
        { id: 2, title: 'Капуста' },
        { id: 3, title: 'Свекла' },
        { id: 4, title: 'Морковь' },
        { id: 5, title: 'Лук' },
        { id: 6, title: 'Мясо на бульон' },
        { id: 7, title: 'Заправка для борща' },
        { id: 8, title: 'Колбаса' },
    ] */
    let products = data?.map((product) => {
        return { value: product.id, label: product.title };
    });
    console.log(products);

    return (
        <div className="w-full flex flex-col justify-center">
            <Input label="Выберите продукт" />
            <Creatable options={products} value={selectedProduct} onSelectedOption={setSelectedProduct} />
        </div>
    )
}