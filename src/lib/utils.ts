export interface MappedProduct {
    image: {
        versionPath: string | null
    }
    title: string
    retailPrice: number | null
    description?: string
}

export interface ProductData {
    image?: {
        versionPath?: string;
    };
    title: string;
    retailPrice?: number;
    category?: {
        name: string;
    };
}

export interface BlogData {
    image?: {
        fileAsset?: {
            versionPath?: string;
        };
    };
    title?: string;
    teaser?: string;
}

export interface EventData {
    image?: {
        fileAsset?: {
            versionPath?: string;
        };
    };
    title?: string;
    description?: string;
}
export const cardMapper = (id: string, item: ProductData | BlogData | EventData): MappedProduct => {
    switch (id) {
        case 'ProductCollection':
            // Type assertion since we know it's ProductData for this case
            const productItem = item as ProductData;
            return {
                image: {
                    versionPath: productItem.image?.versionPath || null
                },
                title: productItem.title,
                retailPrice: productItem.retailPrice || null,
                description: productItem.category?.name || ''
            };

        case 'BlogCollection':
            // Type assertion for BlogData
            const blogItem = item as BlogData;
            return {
                image: {
                    versionPath: blogItem.image?.fileAsset?.versionPath || null
                },
                title: blogItem.title || '',
                retailPrice: null,
                description: blogItem.teaser || ''
            };

        case 'calendarEventCollection':
            // Type assertion for EventData
            const eventItem = item as EventData;
            return {
                image: {
                    versionPath: eventItem.image?.fileAsset?.versionPath || null
                },
                title: eventItem.title || '',
                retailPrice: null,
                description: eventItem.description || ''
            };

        default:
            // Fallback for unknown types
            return {
                image: {
                    versionPath: null
                },
                title: '',
                retailPrice: null,
                description: ''
            };
    }
};

export const isHTML = (str: any) => {
    if (typeof str !== 'string') return false;

    // Simple HTML detection that works on both server and client
    const htmlRegex = /<([a-z][a-z0-9]*)\b[^>]*>(.*?)<\/\1>|<([a-z][a-z0-9]*)\b[^\/>]*\/?>/i;
    return htmlRegex.test(str);
};


