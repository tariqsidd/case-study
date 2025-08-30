import ProductCard from "@/components/common-components/ProductCard";
import {cardMapper} from "@/lib/utils";
import {ProductData} from "@/components/RecommendedActivities";
import {BlogData} from "@/components/BlogFeedPreview";
import {EventData} from "@/components/RecommendedEvents";

type DataKey = keyof ProductData | keyof BlogData | keyof EventData;
interface ProductListProps {
    productData: ProductData | BlogData | EventData;
    id: DataKey
}

const ProductList = ({productData, id}: ProductListProps) => {
    // Use a type guard to safely access the property
    const getItems = (data: ProductData | BlogData | EventData, key: DataKey) => {
        if (key in data) {
            return (data as any)[key]; // Use assertion only after checking key existence
        }
        return undefined;
    };

    const items = getItems(productData, id);

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
                        product={cardMapper(id, product)}
                    />
                )
            })}
        </div>
    )
}

export default ProductList
