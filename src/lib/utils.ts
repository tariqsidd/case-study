import {ProductData} from "@/components/RecommendedActivities";
import {BlogData} from "@/components/BlogFeedPreview";
import {EventData} from "@/components/RecommendedEvents";

export interface MappedProduct {
    image: {
        versionPath: string | null
    }
    title: string
    retailPrice: number | null
    description: string
}

// Generic interface that can work with any data structure
interface GenericData {
    [key: string]: Array<any>;
}

// Generic key mapper function
export const mapToProductCard = (data: GenericData, index: number, id: string): MappedProduct => {
    const items = data[id];
    if (!items || !Array.isArray(items) || !items[index]) {
        return {
            image: { versionPath: null },
            title: `Item ${index + 1}`,
            retailPrice: null,
            description: ''
        };
    }

    const item = items[index];

    // Handle different data structures based on the id
    if (id === 'ProductCollection') {
        return {
            image: {
                versionPath: item.image?.versionPath || null
            },
            title: item.title || `Product ${index + 1}`,
            retailPrice: item.retailPrice || null,
            description: item.category?.name || ''
        };
    } else if (id === 'BlogCollection') {
        return {
            image: {
                versionPath: item.image?.fileAsset?.versionPath || null
            },
            title: item.title || `Blog ${index + 1}`,
            retailPrice: null,
            description: item.teaser || ''
        };
    } else if (id === 'calendarEventCollection') {
        return {
            image: {
                versionPath: item.image?.fileAsset?.versionPath || null
            },
            title: item.title || `Event ${index + 1}`,
            retailPrice: null,
            description: item.description || ''
        };
    }

    // Fallback for unknown data types
    return {
        image: { versionPath: null },
        title: `Item ${index + 1}`,
        retailPrice: null,
        description: ''
    };
};

export const isHTML = (str: any) => {
    if (typeof str !== 'string') return false;

    // Simple HTML detection that works on both server and client
    const htmlRegex = /<([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>|<([a-z][a-z0-9]*)\b[^\/>]*\/?>/i;
    return htmlRegex.test(str);
};
