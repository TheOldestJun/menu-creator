import { useGetAllProductsQuery } from "@/store/services/products";
import CreatableSelect from "react-select/creatable";

export default function ProductPanel() {
    const {
        data: products,
        error,
        isLoading,
    } = useGetAllProductsQuery({
        refetchOnMountOrArgChange: true,
        skip: false,
    });
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error</h1>;
    console.log(products);
    const handleChange = (newValue) => {
        console.log(newValue);
    };
    return (
        <div className="w-full flex justify-center">
            <CreatableSelect
                isClearable
                isMulti
                onChange={handleChange}
                options={products}
            />
        </div>
    )
}