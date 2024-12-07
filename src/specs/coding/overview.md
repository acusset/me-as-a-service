# React 19 / Next.js 15 Project Guidelines

## Project Structure

### Core Directories
```
src/
├── app/           # Next.js app router pages
├── components/    # Shared components
├── lib/          # Utility functions and shared logic
├── api/          # API routes
└── styles/       # Global styles and CSS modules
```

### Component Organization
```
components/
├── ui/           # Basic UI components
├── features/     # Feature-specific components
└── layouts/      # Layout components
```

## Coding Standards

### Components
- Use Server Components by default
- Only use Client Components when necessary (user interactions, browser APIs)
- Implement error boundaries for each route using error.tsx
- Implement suspense boundaries for each route using loading.tsx
- Keep components focused and single-responsibility
- Use TypeScript for all components

### State Management
- Use React Server Components for server state
- Implement React Cache for data fetching
- Use React Hook Form for form management
- Consider Zustand for complex client state

### Performance
- Implement Streaming SSR
- Use Image and Link components from Next.js
- Implement route prefetching
- Use React Suspense boundaries strategically

### Data Fetching
```typescript
// Prefer
async function getData() {
  const res = await fetch('...', { next: { revalidate: 3600 } })
  return res.json()
}

// Instead of
useEffect(() => {
  fetch('...').then(...)
}, [])
```

## Good Practices

// Avoid
```typescript
return [1,2,3].map((i) => (
  <div key={i}>{i}</div>
))
```

// Prefer
```typescript
const items = [1,2,3].map((i) => (
  <div key={i}>{i}</div>
))

return <div>{items}</div>
```

### Styling
- Use Tailwind CSS for styling
- Follow utility-first approach
- Maintain consistent color schemes via theme
- Use CSS Modules for complex custom styling

### Testing
- Vitest for unit testing
- React Testing Library for component testing
- Playwright for E2E testing
- Maintain 99% code coverage minimum

### Security
- Implement CSP headers
- Use Next.js middleware for authentication
- Sanitize all user inputs
- Follow OWASP security guidelines

### Accessibility
- Use semantic HTML elements
- Implement ARIA labels where needed
- Ensure keyboard navigation
- Maintain WCAG 2.1 compliance

### Environmental Configuration
```
.env.local          # Local development variables
.env.development    # Development environment
.env.production     # Production environment
```

### Version Control
- Use conventional commits
- Branch naming: feature/, bugfix/, hotfix/
- Squash commits before merging
- Require PR reviews

### Build & Deployment
- Use Next.js build analyzer
- Implement CI/CD pipelines
- Configure caching strategies
- Monitor build sizes

### Documentation
- Document all APIs
- Maintain README.md
- Include component usage examples
- Document environment setup

### Dependencies
- Regular security audits
- Keep dependencies updated
- Use package.json scripts for common tasks
- Maintain lock files

### Performance Monitoring
- Implement Core Web Vitals tracking
- Use Next.js Analytics
- Monitor server-side errors
- Track client-side performance