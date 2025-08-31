'use client'
import React, { useState, useEffect } from 'react';
import { isHTML } from "@/lib/utils";

let placeHolder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'

interface ReadMoreProps {
    description: string;
}

const ReadMore = ({ description }: ReadMoreProps) => {
    const [readMore, setReadMore] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    // Render placeholder during SSR to avoid hydration mismatch
    if (!isClient) {
        return (
            <div>
                <div className="mb-6">
                    <p className="text-gray-600 text-base line-clamp-2">{placeHolder}</p>
                </div>
                <button className="bg-blue-600 text-white py-2 px-5 rounded-lg font-medium text-sm">
                    Read More
                </button>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-6">
                {isHTML(description) ? (
                    <p
                        dangerouslySetInnerHTML={{ __html: description }}
                        className={`text-gray-600 text-base ${readMore ? '' : 'line-clamp-1'}`}
                    />
                ) : (
                    <p className={`text-gray-600 text-base ${readMore ? '' : 'line-clamp-1'}`}>
                        {description?.length ? description : placeHolder}
                    </p>
                )}
            </div>
            <button
                onClick={toggleReadMore}
                className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
            >
                {readMore ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default ReadMore;
