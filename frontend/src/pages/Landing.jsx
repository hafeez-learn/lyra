import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TYPING_PHRASES = [
  "Lyra — Your Wellness Companion",
  "Your Daily Check-in",
  "Your AI Support System",
  "Your Mood Tracker"
]

const FEATURES = [
  { icon: '🌟', title: 'Mood Tracking', desc: 'Track your emotional wellbeing daily with our intuitive mood scale' },
  { icon: '💬', title: 'AI Chat', desc: 'Talk to Lyra anytime — your 24/7 supportive AI companion' },
  { icon: '🔥', title: 'Streak System', desc: 'Build healthy habits with daily check-in streaks' },
  { icon: '🔒', title: 'Privacy First', desc: 'Your data is encrypted and never shared with anyone' },
]

const TESTIMONIALS = [
  { name: 'Sarah M.', avatar: 'SM', quote: 'Lyra helped me understand my emotions better. The daily check-ins are now a cherished ritual.', rating: 5 },
  { name: 'James K.', avatar: 'JK', quote: 'The AI chat feels genuinely supportive. It\'s like having a friend who always listens.', rating: 5 },
  { name: 'Emma R.', avatar: 'ER', quote: 'Simple, beautiful, and effective. My streak keeps me motivated every single day.', rating: 5 },
]

const FAQS = [
  { q: 'Is my data private?', a: 'Absolutely. All your data is encrypted and stored securely. We never share your personal information.' },
  { q: 'How does the AI chat work?', a: 'Lyra uses advanced AI to provide empathetic, thoughtful responses to support your wellbeing.' },
  { q: 'Can I use Lyra on my phone?', a: 'Yes! Lyra is fully mobile-first and works perfectly on any device.' },
  { q: 'How do streaks work?', a: 'Complete a daily check-in to maintain your streak. Missing a day resets it to zero.' },
  { q: 'Is Lyra free to use?', a: 'Yes, Lyra offers a generous free tier. Premium features coming soon!' },
]

export default function Landing() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const pauseBeforeDelete = 2000
    const pauseBeforeNext = 500

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % TYPING_PHRASES.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <div className="min-h-screen bg-bg">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary">L</span>yra
          </Link>
          <div className="flex gap-4">
            <Link to="/login" className="px-4 py-2 text-text-secondary hover:text-white transition-colors touch-target flex items-center">
              Log in
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-primary rounded-full font-semibold hover:opacity-90 transition-opacity touch-target flex items-center">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-lg">
              Your personal AI wellness companion. Track moods, chat with AI, and build healthy habits — all in one beautiful app.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="px-8 py-4 bg-primary rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 touch-target">
                Get Started Free
              </Link>
              <Link to="/login" className="px-8 py-4 border border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-colors touch-target">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative animate-slide-up">
            <div className="w-64 md:w-80 mx-auto bg-surface rounded-[3rem] p-3 shadow-2xl border border-border">
              <div className="bg-bg rounded-[2.5rem] p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                    L
                  </div>
                  <div>
                    <p className="font-semibold">Lyra</p>
                    <p className="text-xs text-text-secondary">Online</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-surface p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">Hey there! How are you feeling today? 🌟</p>
                  </div>
                  <div className="bg-primary/20 p-3 rounded-2xl rounded-tr-none max-w-[80%] ml-auto">
                    <p className="text-sm">I'm doing better now, thanks for asking!</p>
                  </div>
                  <div className="bg-surface p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                    <p className="text-sm">That's wonderful to hear! Want to do a quick mood check-in? 📊</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Everything You Need to Thrive</h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">Built with care to support your mental wellness journey</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-surface p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-text-secondary text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Loved by Thousands</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-surface p-6 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-yellow-400">{'★'.repeat(t.rating)}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-surface/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-surface rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between touch-target"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span className={`text-primary text-2xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-text-secondary">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-surface to-primary/10 rounded-3xl p-12 border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">Join thousands who've made Lyra part of their daily routine for better mental health.</p>
          <Link to="/signup" className="inline-block px-10 py-4 bg-primary rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 touch-target">
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-text-secondary">
          <p>© 2024 Lyra. Built with ❤️ for your wellness.</p>
        </div>
      </footer>
    </div>
  )
}