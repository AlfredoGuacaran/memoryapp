# Memory Game

A classic memory card game built with Next.js, TypeScript, and Ant Design. Test your memory by matching pairs of animal cards!

## Features

- Player name persistence using localStorage
- Responsive design that works on mobile and desktop
- Beautiful card flip animations
- Score tracking (matches and errors)
- Animal images fetched from an external API
- Modern UI with Ant Design components
- Fully typed with TypeScript

## Prerequisites

- Node.js 20.x or higher
- npm 

## Getting Started

1. Clone the repository

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to start playing!

## How to Play

1. Enter your name when first visiting the game
2. Select the number of pairs you want to play with
3. Click on cards to flip them
4. Try to match pairs of identical animal images
5. Match all pairs to win!

## Tech Stack

- Next.js - React framework
- TypeScript - Type safety
- Tailwind CSS - Styling
- Ant Design - UI components
- localStorage - Data persistence
- Vercel - Deployment
## Project Structure

```
src/
  ├── components/     # React components
  ├── hooks/         # Custom React hooks
  ├── pages/         # Next.js pages
  ├── styles/        # Global styles
  └── types/         # TypeScript types
```

## Performance Considerations

- Images are optimized using Next.js Image component
- CSS animations are hardware-accelerated
- State management is optimized with React hooks
- Responsive design with mobile-first approach

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## License

MIT
