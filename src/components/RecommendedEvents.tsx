import {Suspense} from 'react'
import {fetchGraphQL, GRAPHQL_QUERIES} from '@/lib/graphql'
import ProductList from "@/components/common-components/ProductList";

export interface EventData {
    calendarEventCollection: Array<{
        title: string
        description: string
        image: {
            fileAsset: {
                versionPath: string
            }
        }
    }>
    [key: string]: Array<any>;
}

export default async function RecommendedEvents() {
    const eventData = await fetchGraphQL<EventData>(GRAPHQL_QUERIES.EVENTS)

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent News</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis, pulvinar dapibus leo.
                    </p>
                </div>
                <Suspense fallback={'Loading...'}>
                    <ProductList id={'calendarEventCollection'} productData={eventData}/>
                </Suspense>
            </div>
        </section>
    )
}
