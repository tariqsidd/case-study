import {Suspense} from 'react'
import { fetchGraphQL, GRAPHQL_QUERIES } from '@/lib/graphql'
import ProductList from "@/components/common-components/ProductList";

export interface ProductData {
  ProductCollection: Array<{
    title: string
    urlMap: string
    category: {
      name: string
      inode: string
    }
    retailPrice: number
    image: {
      versionPath: string
    }
  }>
  [key: string]: Array<any>;
}


export default async function RecommendedActivities() {
  const productData =  await fetchGraphQL<ProductData>(GRAPHQL_QUERIES.PRODUCTS)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Check Our Best Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <Suspense fallback={'Loading...'}>
        <ProductList
            id={'ProductCollection'}
            productData={productData}
        />
        </Suspense>
      </div>
    </section>
  )
}
