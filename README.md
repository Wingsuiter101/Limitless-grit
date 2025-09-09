# Limitless Grit Website

A modern website built with Next.js 14, Tailwind CSS, and Sanity CMS.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Fonts**: Geist (primary), Inria Serif (accent)
- **Animations**: Framer Motion

## Color Palette

- **Primary**: #ff7533 (Orange)
- **Primary Dark**: #505050 (Gray)
- **Secondary**: #fd874d (Light Orange)
- **Secondary Light**: #ffa64e (Lighter Orange)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with your Sanity configuration:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── lib/
    └── sanity.ts
```

## Fonts

- **Geist**: Primary font for body text and headings
- **Inria Serif Italic**: Accent font for emphasis and flair

## Development

The project is set up with:
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint for code linting
- Sanity for content management

To start developing, run `npm run dev` and visit `http://localhost:3000`.
