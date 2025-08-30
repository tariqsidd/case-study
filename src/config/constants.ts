// Application Configuration Constants
export const APP_CONFIG = {
  // dotCMS GraphQL API Configuration
  GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_DOTCMS_GRAPHQL_ENDPOINT,

  // Image Configuration
  IMAGE_BASE_URL: process.env.WP_IMAGES_URL,

} as const

// GraphQL Query Constants
export const GRAPHQL_QUERIES = {
  HERO_BANNER: `
    query ContentAPI {
      BannerCollection(query: "", limit: 1, offset: 0, sortBy: "score") {
        title
        caption
        image {
          fileAsset {
            versionPath
          }
        }
      }
    }
  `,

  PRODUCTS: `
    query ContentAPI {
      ProductCollection(query: "+title:snow", limit: 3, offset: 0, sortBy: "score") {
        title
        urlMap
        category {
          name
          inode
        }
        retailPrice
        image {
          versionPath
        }
      }
    }
  `,

  EVENTS: `
    query ContentAPI {
      calendarEventCollection(query: "", limit: 3, offset: 0, sortBy: "score") {
        title
        description
        image {
          fileAsset {
            versionPath
          }
        }
      }
    }
  `,

  BLOGS: `
    query ContentAPI {
      BlogCollection(query: "+tags:(snowboarding OR surfing)", limit: 3, offset: 0, sortBy: "score") {
        title
        urlMap
        teaser
        image {
          fileAsset {
            versionPath
          }
        }
      }
    }
  `,
} as const
