# Lyra — AI Wellness Companion 🌟

Lyra is a full-stack AI wellness companion app built with React, Supabase, and MiniMax AI. It provides mood tracking, daily check-ins, and an AI chat interface to support your mental wellness journey.

![Lyra Preview](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-646cff) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8) ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e)

## ✨ Features

- **🏠 Landing Page** — Animated typing hero, feature showcase, testimonials, FAQ accordion
- **🔐 Authentication** — Email/password signup and login via Supabase Auth
- **📊 Mood Check-in** — Daily emoji-based mood tracking with optional notes
- **💬 AI Chat** — Conversational AI companion powered by MiniMax API
- **📈 Dashboard** — Streak counter, mood history, quick actions
- **📱 Mobile-First** — Dark theme, responsive design, 48px+ touch targets

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, Vite, TailwindCSS, React Router v6 |
| **Backend** | Supabase (PostgreSQL, Edge Functions, Auth) |
| **AI** | MiniMax API (Anthropic-compatible endpoint) |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Supabase account (free tier works)
- MiniMax API key

### Environment Variables

Create `.env` in `/frontend`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup (Supabase)

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `backend/migrations/001_initial_schema.sql` in the SQL Editor
3. Deploy the Edge Function from `backend/functions/chat/index.ts`
4. Add `MINIMAX_API_KEY` to Edge Function secrets

## 📁 Project Structure

```
lyra/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/       # React context (AuthContext)
│   │   ├── lib/           # Supabase client
│   │   ├── pages/         # Route pages
│   │   ├── utils/         # Utility functions
│   │   └── tests/         # Unit tests
│   ├── tests/             # Playwright E2E tests
│   └── ...
├── backend/
│   ├── migrations/        # SQL schema files
│   └── functions/         # Edge Functions (Deno)
└── SPEC.md               # Design specification
```

## 🎨 Design System

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#0d0d1a` | Page background |
| Surface | `#151528` | Cards, panels |
| Primary | `#ff566e` | Buttons, accents |
| Secondary | `#8e0dff` | Secondary elements |
| Accent | `#00d4d9` | Highlights, focus states |

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

## 📜 SQL Schema

Run this in Supabase SQL Editor to set up the database:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Mood entries
CREATE TABLE public.mood_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  mood_score INTEGER CHECK (mood_score >= 1 AND mood_score <= 5) NOT NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat messages
CREATE TABLE public.chat_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role TEXT CHECK (role IN ('user', 'assistant', 'system')) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Check-ins
CREATE TABLE public.check_ins (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mood_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.check_ins ENABLE ROW LEVEL SECURITY;

-- Policies (users access own data only)
-- See backend/migrations/001_initial_schema.sql for full policies
```

## 🔒 Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Authentication required for all protected routes
- Edge Functions validate auth tokens

## 📄 License

MIT License — see LICENSE file for details.

---

Built with ❤️ for your wellness