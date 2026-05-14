# Lyra — AI Wellness Companion

## Concept & Vision

Lyra is an AI-powered wellness companion that feels like a warm, supportive friend in your pocket. The app combines mood tracking, daily check-ins, and AI chat to help users build emotional awareness and resilience. The experience should feel calming yet modern — like a trusted sanctuary that happens to be beautifully designed.

## Design Language

**Aesthetic Direction:** Dark, cosmic minimalism — think a calm night sky with glowing accents. Soft gradients, gentle animations, no harsh edges.

**Color Palette:**
- Background: `#0d0d1a` (deep space)
- Surface: `#151528` (card backgrounds)
- Primary: `#ff566e` (coral — warmth, care)
- Secondary: `#8e0dff` (purple — wisdom, intuition)
- Accent: `#00d4d9` (teal — clarity, calm)
- Text Primary: `#ffffff`
- Text Secondary: `#a0a0c0`
- Border: `#2a2a4a`

**Typography:**
- Font Family: Inter (Google Fonts)
- Headings: 700 weight, 1.1 line-height
- Body: 400 weight, 1.6 line-height

**Spatial System:**
- Base unit: 8px
- Touch targets: 48px minimum
- Border radius: 12px (cards), 24px (buttons), 50% (avatars)
- Shadows: `0 4px 24px rgba(0,0,0,0.4)`

**Motion Philosophy:**
- Micro-interactions: 150ms ease-out
- Page transitions: 300ms ease-in-out
- Typing animation: 80ms per character
- Staggered reveals: 100ms between items

## Layout & Structure

**Mobile-First (320px baseline)**
- Single column layout
- Bottom navigation on mobile (Dashboard, Chat, Mood, Profile)
- Floating action buttons for primary actions

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

**Page Structure:**
1. Landing — Hero with animated typing, features grid, testimonials carousel, FAQ accordion, CTA buttons
2. Dashboard — Streak counter, last check-in, mood history chart, quick actions
3. Chat — Full-screen AI companion, message bubbles, suggested prompts
4. Mood Check-in — Emoji selector (1-5), optional note textarea, submit button

## Features & Interactions

### Landing Page
- Animated typing header cycles through: "Lyra — Your Wellness Companion", "Your Daily Check-in", "Your AI Support System"
- Phone mockup with chat screenshot showing sample conversation
- Features: Mood Tracking, AI Chat, Streak System, Privacy First
- Testimonials: 3 cards with avatar, name, quote, rating
- FAQ: Accordion with 5 questions, smooth expand/collapse
- Sign up / Log in buttons in hero and navbar

### Authentication
- Email/password signup and login via Supabase Auth
- Persistent sessions with JWT storage
- Protected routes redirect to login
- Logout clears session and redirects to landing

### Mood Check-in
- 5 emoji options: 😔 😟 😐 🙂 😊 (mapped to 1-5 score)
- Optional note textarea (max 500 chars)
- Submit stores to `mood_entries` table
- Success animation and streak update

### AI Chat
- Message input with send button
- AI responses from MiniMax API via Edge Function
- Message history stored in `chat_messages` table
- Typing indicator while waiting for response
- Suggested prompts: "How are you feeling today?", "I'm feeling anxious", "Tell me something positive"

### Dashboard
- Current streak (consecutive days with check-in)
- Last check-in date/time
- Weekly mood chart (last 7 entries)
- Quick action buttons: Check In, Talk to Lyra, View History

## Component Inventory

### Button
- States: default, hover (+8% brightness), active (scale 0.98), disabled (50% opacity)
- Variants: primary (coral bg), secondary (purple bg), outline (transparent + border), ghost (no border)

### Input
- Dark surface bg, border on focus (teal), placeholder text secondary
- Error state: red border + error message below

### Card
- Surface bg, border, rounded-12, shadow
- Hover: subtle lift (+2px translateY)

### Avatar
- Circular, 40px default, coral gradient bg with initials

### Emoji Selector
- 5 emojis in row, 48px touch targets
- Selected: scale 1.2, glow effect (box-shadow with primary color)

### Message Bubble
- User: right-aligned, coral bg, white text
- AI: left-aligned, surface bg, white text, avatar
- Timestamp below each bubble

### Navigation
- Bottom bar on mobile, 4 icons + labels
- Active state: primary color + filled icon

## Technical Approach

**Frontend:**
- React 18 + Vite
- React Router v6 for navigation
- TailwindCSS for styling
- @supabase/supabase-js for auth and database
- Context API for auth state management

**Backend:**
- Supabase PostgreSQL
- Row Level Security for data isolation
- Edge Functions (Deno) for AI chat proxy

**API Design:**
- `POST /functions/v1/chat` — Receives `{ messages: [{role, content}] }`, returns `{ response: string }`
- Supabase client handles all CRUD via SDK

**Data Model:**
```
profiles (id, email, created_at)
mood_entries (id, user_id, mood_score, note, created_at)
chat_messages (id, user_id, role, content, created_at)
check_ins (id, user_id, completed_at)
```

**Environment Variables:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `MINIMAX_API_KEY` (Edge Function)