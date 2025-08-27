// 'use client'

// import { useEffect, useState } from 'react'
import {fetchGraphQL, GRAPHQL_QUERIES} from '@/lib/graphql'

interface BannerData {
    BannerCollection: Array<{
        title: string
        caption: string
        image: {
            fileAsset: {
                versionPath: string
            }
        }
    }>
}

export default async function HeroBanner() {
    const bannerData = await fetchGraphQL<BannerData>(GRAPHQL_QUERIES.HERO_BANNER)

    const banner = bannerData.BannerCollection[0]
    const imageUrl = banner.image?.fileAsset?.versionPath
        ? `https://demo.dotcms.com${banner.image.fileAsset.versionPath}`
        : null

    return (
        <section className="relative bg-black/50 py-32 overflow-hidden">
            {imageUrl && (
                <div className="absolute inset-0">
                    <img
                        src={imageUrl}
                        alt={banner.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    {banner.title || 'Explore the World'}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                    {banner.caption || 'Life is a journey, not a destination.'}
                </p>
                <button
                    className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                    Explore Now
                </button>
            </div>
        </section>
    )
}
