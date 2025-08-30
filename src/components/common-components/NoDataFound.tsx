// components/NoDataFound.tsx
import { ReactNode } from 'react';

interface NoDataFoundProps {
    title?: string;
    description?: string;
    icon?: ReactNode;
    action?: ReactNode;
    className?: string;
}

export default function NoDataFound({
                                        title = "No data found",
                                        description = "We couldn't find any items matching your criteria",
                                        icon,
                                        action,
                                        className = ""
                                    }: NoDataFoundProps) {
    return (
        <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
            {/* Icon Section */}
            {icon || (
                <svg
                    className="w-16 h-16 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            )}

            {/* Text Section */}
            <h3 className="text-lg font-medium text-gray-900 mb-1">
                {title}
            </h3>
            <p className="text-gray-500 mb-4">
                {description}
            </p>

            {/* Action Button */}
            {action}
        </div>
    );
}
