# Kid's Trend Report - Alpha Prototype

A companion web experience for a weekly digital parenting newsletter that presents curated content about online trends in an engaging visual format with actionable parent-child activities.

## Features

- **Card-based Digest**: Swipeable cards presenting digital trends affecting kids
- **Countdown Timer**: Shows time until next edition when no new content is published
- **Activities**: Three interactive activity types designed for parent-child connection:
  - Would You Rather: Digital money and gaming dilemmas
  - Conversation Starters: Open-ended questions about online life
  - Discussion Timer: Guided 10-minute conversation with prompts
- **"Phone as Prop" Design**: Activities optimized for displaying content while phones become conversation facilitators
- **Warm Pastel Design**: Beige, sage green, and rust color palette

## Getting Started

### Running Locally

The development server is already running! Open your browser to:

```
http://localhost:3000
```

The page will auto-update as you edit files.

### Starting Fresh

If you need to restart the server:

```bash
npm run dev
```

## Project Structure

```
/prototype
├── /app                    # Next.js app directory
│   ├── layout.tsx         # Root layout with header
│   ├── page.tsx           # Home page (digest or countdown)
│   ├── /activities
│   │   ├── page.tsx                      # Activities list
│   │   ├── /would-you-rather
│   │   ├── /conversation-starters
│   │   └── /discussion-timer
│   └── globals.css        # Global styles and color palette
├── /components            # React components
│   ├── Header.tsx
│   ├── DigestCard.tsx
│   ├── CardStack.tsx
│   ├── CountdownTimer.tsx
│   ├── WouldYouRather.tsx
│   ├── ConversationStarters.tsx
│   └── DiscussionTimer.tsx
├── /data
│   └── content.json       # Weekly content data
└── /public
    └── /images            # Card images (add your own)
```

## Updating Content

To update the weekly content, edit `/data/content.json`:

1. Change the `edition.week` date
2. Update `edition.published` to `true` to show content (or `false` for countdown mode)
3. Edit the `cards` array with new trend content
4. Update the `activities` array with new prompts

The site will automatically reload with the new content!

### Example: Adding a new card

```json
{
  "id": 6,
  "title": "Your Trend Title",
  "content": "Brief explanation of the trend (2-4 sentences)",
  "whyItMatters": "Why parents should care about this",
  "stat": "Optional: Key statistic to highlight"
}
```

## Design System

### Colors
- **Beige**: `#E8DCC4` - Backgrounds, neutrals
- **Sage Green**: `#B8C5B0` - CTAs, accents
- **Rust**: `#C67B5C` - Highlights, important elements
- **Warm White**: `#FAF8F5` - Card backgrounds
- **Dark Sage**: `#6B7A6F` - Text, borders
- **Charcoal**: `#3D3D3D` - Primary text

### Typography
- Headlines: Bold, 24-32px
- Body: Regular, 16-18px
- Activity text: 20-28px (for visibility)

## Navigation

- **Keyboard**: Use arrow keys (← →) to navigate between cards
- **Mouse/Touch**: Click/tap arrow buttons or swipe on mobile
- **Header Button**: Toggle between Report and Activities pages

## Activities

### Would You Rather
- Landscape-optimized display
- Navigate through multiple prompts
- Large text for distance viewing

### Conversation Starters
- List of 7 questions
- Progressive reveal (questions unlock as you navigate)
- Jump to any question from the list

### Discussion Timer
- 10-minute countdown timer
- Start/pause/reset controls
- Conversation prompts visible during timer
- Visual progress circle

## Customization

### Changing Colors
Edit `/app/globals.css` and update the CSS variables:

```css
:root {
  --beige: #E8DCC4;
  --sage-green: #B8C5B0;
  /* ... etc */
}
```

### Adding Images
Place image files in `/public/images/` and reference them in `content.json`:

```json
{
  "image": "/images/your-image.jpg",
  "imageAlt": "Description for accessibility"
}
```

## Building for Production

When ready to deploy:

```bash
npm run build
npm run start
```

Or deploy to Vercel:
```bash
vercel
```

## Next Steps

- [ ] Add actual images to cards
- [ ] Test on various devices (phone, tablet, desktop)
- [ ] Get feedback from test users
- [ ] Iterate on content based on feedback
- [ ] Add analytics when ready for production

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (custom configured)
- **Deployment**: Ready for Vercel (or Netlify)

---

Created with warm pastels and good intentions 🌿
