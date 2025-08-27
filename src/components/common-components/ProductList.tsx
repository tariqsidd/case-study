import ProductCard from "@/components/common-components/ProductCard";
import {mapToProductCard} from "@/lib/utils";

// Generic interface that can work with any data structure
interface GenericData {
    [key: string]: Array<any>;
}

interface ProductListProps<T extends GenericData> {
    productData: T;
    id: keyof T;
}

const ProductList = <T extends GenericData>({productData, id}: ProductListProps<T>) => {
    const items = productData[id];
    
    if (!items || !Array.isArray(items)) {
        return <div>No items found</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        index={index}
                        product={mapToProductCard(productData, index, id as string)}
                    />
                )
            })}
        </div>
    )
}

export default ProductList
