// Application Configuration Constants
export const APP_CONFIG = {
  // dotCMS GraphQL API Configuration
  GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_DOTCMS_GRAPHQL_ENDPOINT || 'https://demo.dotcms.com/api/v1/graphql',

  // Application Settings
  APP_NAME: 'dotCMS Marketing Landing Page',
  APP_DESCRIPTION: 'Experience the power of headless content management',

  // Content Limits
  DEFAULT_LIMIT: 3,
  DEFAULT_OFFSET: 0,

  // Image Configuration
  IMAGE_BASE_URL: 'https://demo.dotcms.com',

  // Social Media Links
  SOCIAL_LINKS: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
  },

  // Contact Information
  CONTACT: {
    email: 'info@dotcms.com',
    phone: '+1 (555) 123-4567',
    address: '123 CMS Street, Digital City, DC 12345',
  },
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
