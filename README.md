# Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development Strategy

### Architecture Approach
- **Server Components by Default**: Primary UI rendering occurs on the server to optimize performance
- **Performance Optimization**: Reduces client-side JavaScript bundle size and improves initial page load
- **Efficient Data Fetching**: Enables direct data fetching within components, minimizing client-server round trips
- **Strategic Client-Side Rendering**: `use client` directive reserved exclusively for interactive components requiring React state or browser APIs

### Planned Enhancements
- **Loading States**: Implement skeleton UI components using React Suspense for improved perceived performance
- **TypeScript Refactoring**:
    - Improve type interfaces and definitions
    - Refactor mapToProductCard function and use object-map pattern instead of conditional statements
    - Enhance type safety throughout the application

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

npm run build
# or
yarn build
# or
pnpm build
# or
bun build
