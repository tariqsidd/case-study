import {JSX, Suspense} from 'react'
import {fetchGraphQL, GRAPHQL_QUERIES} from '@/lib/graphql'
import ProductList from "@/components/common-components/ProductList";
import NoDataFound from "@/components/common-components/NoDataFound";
import Loader from "@/components/common-components/Loader";

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
}

const getEventData= async ()=>{
    try {
        return await fetchGraphQL<EventData>(GRAPHQL_QUERIES.EVENTS)
    }
    catch (e) {
        throw new Error(`Event Data GraphQL request failed: ${(e as Error).message}`)
    }
}

export default async function RecommendedEvents() {
    try {
        const eventData = await getEventData()

        if(!eventData.calendarEventCollection.length){
            return (
                <NoDataFound
                    title={'No Events Found'}
                    description={'We couldn\'t find any events matching your criteria'}
                />
            )
        }

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
                    <Suspense fallback={<Loader /> as JSX.Element}>
                        <ProductList id={'calendarEventCollection'} productData={eventData}/>
                    </Suspense>
                </div>
            </section>
        )
    }
    catch (e) {
        return(
            <div>
                Error
            </div>
        )
    }
}
