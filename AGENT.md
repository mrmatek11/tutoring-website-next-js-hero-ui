# Agent Configuration

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with auto-fix

## Architecture
- **Next.js 15**: App Router with TypeScript
- **UI**: HeroUI components with Tailwind CSS
- **Animations**: Framer Motion throughout
- **Styling**: Custom theme with green/emerald branding
- **Structure**: `app/` for pages, `components/` for reusable components
- **Key components**: PricingTable, SuccessStories, CalendlyEmbed, navbar

## Code Style
- **Imports**: Absolute imports via `@/` alias
- **TypeScript**: Strict mode enabled
- **React**: Client components with "use client", no React imports needed
- **Naming**: camelCase for components, kebab-case for files
- **Framer Motion**: Extensive use of motion components with whileHover/whileInView
- **HeroUI**: Consistent use of color="success/primary" with size="lg"
- **Tailwind**: Custom theme colors (primary: #004225, success: #00a96e)
- **Error handling**: Via Next.js error boundaries

## Notes
- Polish language tutoring website
- Calendly integration for booking
- No test framework currently configured
- ESLint warns on unused imports and console logs
