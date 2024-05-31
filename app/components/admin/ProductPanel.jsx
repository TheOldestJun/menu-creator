import { useGetAllProductsQuery } from "@/store/services/products";
import CreatableSelect from "react-select/creatable";
import { useState } from "react";

export default function ProductPanel() {
    /*     const {
            data,
            error,
            isLoading,
        } = useGetAllProductsQuery({
            refetchOnMountOrArgChange: true,
            skip: false,
        });
        if (isLoading) return <h1>Loading...</h1>;
        if (error) return <h1>Error</h1>; */
    const data = [
        { id: 1, title: 'Картофель' },
        { id: 2, title: 'Капуста' },
        { id: 3, title: 'Свекла' },
        { id: 4, title: 'Морковь' },
        { id: 5, title: 'Лук' },
        { id: 6, title: 'Мясо на бульон' },
        { id: 7, title: 'Заправка для борща' },
        { id: 8, title: 'Колбаса' },
    ]
    let products = data.map((product) => {
        return { value: product.id, label: product.title };
    });
    console.log(products);
    const [isItemsLoading, setIsItemsLoading] = useState(false);
    const [options, setOptions] = useState(products);
    const [value, setValue] = useState();

    const handleCreate = (inputValue) => {
        setIsItemsLoading(true);
        setTimeout(() => {
            const newOption = createOption(inputValue);
            setIsItemsLoading(false);
            setOptions((prev) => [...prev, newOption]);
            setValue(newOption);
        }, 1000);
    };
    return (
        <div className="w-full flex justify-center">
            <CreatableSelect
                isClearable
                isDisabled={isItemsLoading}
                isLoading={isItemsLoading}
                onChange={(newValue) => setValue(newValue)}
                onCreateOption={handleCreate}
                options={options}
                value={value}
            />
        </div>
    )
}