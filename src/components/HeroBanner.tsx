import Image from 'next/image'
import {fetchGraphQL, GRAPHQL_QUERIES} from '@/lib/graphql'
import {APP_CONFIG} from "@/config/constants";

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

const getBannerData= async ()=>{
    try {
        return await fetchGraphQL<BannerData>(GRAPHQL_QUERIES.HERO_BANNER)
    }
    catch (e) {
        throw new Error(`Banner Data GraphQL request failed: ${(e as Error).message}`)
    }
}

const Placeholder = ()=> (
    <section className="relative bg-black/50 py-32 overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={'/banner.png'}
                    alt={'Banner'}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
            </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Explore the World
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                Life is a journey, not a destination.
            </p>
            <button
                className="bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
                Explore Now
            </button>
        </div>
    </section>
)

export default async function HeroBanner() {
    try {
        const bannerData = await getBannerData()
        const banner = bannerData.BannerCollection[0]
        const imageUrl = banner.image?.fileAsset?.versionPath
            ? `${APP_CONFIG.IMAGE_BASE_URL}${banner.image.fileAsset.versionPath}`
            : null

        // in Case API returns no data or error
        if (!bannerData?.BannerCollection?.length) {
            return (
                <Placeholder/>
            )
        }


        return (
            <section className="relative bg-black/50 py-32 overflow-hidden">
                {imageUrl && (
                    <div className="absolute inset-0">
                        <Image
                            src={imageUrl}
                            alt={banner.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
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
    catch (e) {
        return(
            <Placeholder/>
        )
    }

}
