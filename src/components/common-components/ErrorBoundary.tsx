// components/ErrorDisplay.tsx
'use client'

import { useEffect } from 'react'

interface ErrorDisplayProps {
    error: Error & { digest?: string }
    reset?: () => void
    title?: string
    message?: string
}

export default function ErrorBoundary({
                                         error,
                                         reset,
                                         title = "Something went wrong!",
                                         message = "An unexpected error occurred. Please try again."
                                     }: ErrorDisplayProps) {
    useEffect(() => {
        // Log error to monitoring service
        console.error('ErrorDisplay caught error:', error)
    }, [error])

    return (
        <div className="min-h-[400px] flex items-center justify-center px-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center border border-red-200 dark:border-red-800">
                {/* Error Icon */}
                <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                    <svg
                        className="w-8 h-8 text-red-600 dark:text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                </div>

                {/* Error Title */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h2>

                {/* Error Message */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {message}
                </p>

                {/* Technical Details (collapsible) */}
                <details className="mb-6 text-left">
                    <summary className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                        Technical details
                    </summary>
                    <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-700 rounded text-xs font-mono text-red-600 dark:text-red-400 overflow-x-auto">
                        {error.message}
                        {error.digest && (
                            <div className="mt-2">
                                <span className="text-gray-500">Error ID: </span>
                                {error.digest}
                            </div>
                        )}
                    </div>
                </details>

                {/* Retry Button */}
                {reset && (
                    <button
                        onClick={reset}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                        Try Again
                    </button>
                )}

                {/* Alternative: Refresh page if no reset function */}
                {!reset && (
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                        Refresh Page
                    </button>
                )}
            </div>
        </div>
    )
}
