import Image from 'next/image'
import ReadMore from "@/components/common-components/ReadMore";
interface Product {
    image?: {
        versionPath?: string | null;
    };
    title?: string;
    retailPrice?: number | null;
    description?: string;
}

interface ProductCardProps {
    product: Product;
    index: number;
}
const ProductCard = ({ product, index }: ProductCardProps) => {
    const { image, title, retailPrice, description } = product;
    const imageUrl = image?.versionPath ? `https://demo.dotcms.com${image.versionPath}`: null

    return (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title || 'Product image'}
                        width={800}  // Required - original image width
                        height={400} // Required - original image height
                        className="w-full h-64 object-cover"
                        // Optional but recommended props:
                        priority={false} // Use true for above-the-fold images
                        sizes="(max-width: 768px) 100vw, 800px" // Responsive sizing
                    />
                ) : (
                    <div className="w-full h-64 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No Image Available</span>
                    </div>
                )}
                <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            New
          </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-1">
                    {title || `Product ${index + 1}`}
                </h3>
                {retailPrice && (
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                        ${retailPrice}
                    </div>
                )}
                <ReadMore description={description || ''} />
            </div>
        </div>
    );
};
export default ProductCard
