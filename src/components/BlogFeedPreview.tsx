import {JSX, Suspense} from 'react'
import {fetchGraphQL, GRAPHQL_QUERIES} from '@/lib/graphql'
import ProductList from "@/components/common-components/ProductList";
import NoDataFound from "@/components/common-components/NoDataFound";
import Loader from "@/components/common-components/Loader";

export interface BlogData {
    BlogCollection: Array<{
        title: string
        urlMap: string
        teaser: string
        image: {
            fileAsset: {
                versionPath: string
            }
        }
    }>
}
const getBlogData= async ()=>{
    try {
        return await fetchGraphQL<BlogData>(GRAPHQL_QUERIES.BLOGS)
    }
    catch (e) {
        throw new Error(`Blog Data GraphQL request failed: ${(e as Error).message}`)
    }
}
export default async function BlogFeedPreview() {
    try {
        const blogData = await getBlogData()

        if(!blogData.BlogCollection.length){
            return (
                <NoDataFound
                    title={'No Blogs Found'}
                    description={'We couldn\'t find any blogs matching your criteria'}
                />
            )
        }

        return (
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                            mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <Suspense fallback={<Loader /> as JSX.Element}>
                        <ProductList id={'BlogCollection'} productData={blogData}/>
                    </Suspense>
                </div>
            </section>
        )
    }
    catch (e) {
        const error = e as Error;
        return(
            <div>
                Error
            </div>
        )
    }
}
