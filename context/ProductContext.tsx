import { createContext, useContext, useState, ReactNode } from "react";

// Define Product Type
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    rating: number,
    shippingInformation: string,
    warrantyInformation: string,
    discountPercentage: number
}

// Define Context Type
interface ProductContextType {
    products: Product[];
    fetchProducts: (query: string) => void;
    fetchAllProducts: () => void;
    loading: boolean;
}

 
const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProducts = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data = await response.json();
            setProducts(data.products); 
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        } 
    };

    const fetchAllProducts = async() =>{
        setLoading(true)
        try{
            const productResponse = await fetch(`https://dummyjson.com/products`)
            const productsData = await productResponse.json()
            setProducts(productsData.products)
            setLoading(false)
        }catch (err) {
            console.error(err);
            setLoading(false);
        } 
    }

    return (
        <ProductContext.Provider value={{ products, fetchProducts, loading, fetchAllProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};
