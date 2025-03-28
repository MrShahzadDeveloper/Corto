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
    loading: boolean;
}

// Create Context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider Component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProducts = async (query: string) => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data = await response.json();
            setProducts(data.products); // Extract the products array
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        } 
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom Hook to Use Context
export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
};
