import { useGetAllProductsQuery, useAddProductMutation } from "@/store/services/products";
import { useState } from "react";
import { Input } from "@material-tailwind/react";
import Creatable from "../Creatable";

const getProductData = () => {
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
    return products
}

export default function ProductPanel() {
    const [selectedProduct, setSelectedProduct] = useState();

    const [addProduct] = useAddProductMutation();
    /*  const {
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
      }); */
    const products = getProductData();

    const handleAddProduct = (item) => {
        console.log(item)
        addProduct(item);
    };

    return (
        <div className="w-full flex flex-col justify-center">
            <Input label="Выберите продукт" />
            <Creatable options={products}
                value={selectedProduct}
                onSelectedOption={setSelectedProduct}
                onCreateOption={(item) => handleAddProduct(item)}
            />
        </div>
    )
}