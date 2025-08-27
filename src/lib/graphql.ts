import { APP_CONFIG } from '@/config/constants'
import { notFound } from "next/navigation";
interface GraphQLError {
  message: string
  locations?: Array<{ line: number; column: number }>
  path?: string[]
}

interface GraphQLResponse<T> {
  data: T
  errors?: GraphQLError[]
}

export async function fetchGraphQL<T>(query: string): Promise<T> {
  try {
    const response = await fetch(APP_CONFIG.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`)
    }

    const result: GraphQLResponse<T> = await response.json()

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`)
    }

    return result.data
  } catch (error) {
    notFound()
    console.error('GraphQL fetch error:', error)
    throw error
  }
}

// Re-export queries from constants
export { GRAPHQL_QUERIES } from '@/config/constants'
