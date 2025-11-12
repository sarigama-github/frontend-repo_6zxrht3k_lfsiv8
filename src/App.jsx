import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Gauge, Heart, Clock, MessageCircle, Shield, Settings, Stars, Rocket, PlayCircle, Facebook, Instagram, Twitter, Mail, Star } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Nav() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl p-3 shadow-[0_6px_30px_-12px_rgba(79,70,229,0.25)]">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 grid place-items-center text-white font-bold">A</div>
            <span className="font-semibold text-slate-800">AURA</span>
            <span className="ml-1 text-xs rounded-full bg-indigo-100 text-indigo-700 px-2 py-0.5">by MindWalker</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#problem" className="hover:text-slate-900">Problem</a>
            <a href="#solution" className="hover:text-slate-900">Solution</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how" className="hover:text-slate-900">How It Works</a>
            <a href="#metrics" className="hover:text-slate-900">Impact</a>
            <a href="#testi" className="hover:text-slate-900">Testimonials</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white text-indigo-700 px-3 py-2 text-sm hover:bg-indigo-50 transition">Watch Demo <PlayCircle size={16} /></a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-indigo-700 transition">Try Now <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_10%,rgba(99,102,241,0.25),rgba(168,85,247,0.15)_35%,transparent_70%)]"></div>
      <div className="pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-indigo-700">
              <Sparkles size={14} /> Social Media AI • automated replies • AI copywriting
            </motion.div>
            <motion.h1 variants={item} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Turn Comments into Creative Copy in Seconds with AURA AI
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-slate-600 text-base sm:text-lg">
              AURA understands audience sentiment and generates on-brand responses across platforms—fast.
            </motion.p>
            <motion.div variants={item} className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 font-semibold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition">
                Get Started <Rocket size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white text-indigo-700 px-5 py-3 font-semibold hover:bg-indigo-50 transition">
                Watch Demo <PlayCircle size={18} />
              </a>
            </motion.div>
            <motion.ul variants={item} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> AI copywriting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> sentiment analysis</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> automated replies</li>
            </motion.ul>
          </motion.div>
          <div className="relative aspect-[4/3] md:aspect-[5/4] lg:aspect-[7/5]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-sky-100"></div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="absolute inset-2 rounded-3xl bg-white/80 backdrop-blur border border-white/30 shadow-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const cards = [
    { title: 'Inconsistent brand tone', desc: 'Manual responses vary across admins and platforms.' },
    { title: 'Copy variation takes time', desc: 'Crafting new captions and comments daily is exhausting.' },
    { title: 'Hard to align sentiment', desc: 'Interpreting emotions into the right brand voice is challenging.' },
  ]
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Challenges Marketing Teams Face</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Social media, PR, and marketing teams often struggle to respond quickly while staying on-brand.</p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-3 inline-flex rounded-lg bg-indigo-50 text-indigo-600 p-2"><MessageCircle size={18} /></div>
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
            <h4 className="font-semibold text-slate-900">Manual</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc pl-5">
              <li>Slow response time</li>
              <li>Inconsistent tone</li>
              <li>Limited ideas</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
            <h4 className="font-semibold">AURA</h4>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-white/90">
              <li>Automated replies <span className="font-semibold">in under 5s</span></li>
              <li>Consistent with brand voice</li>
              <li>Unlimited copy variations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Solution() {
  const bullets = [
    { icon: Stars, title: 'Sentiment-aware generation', desc: 'Responses and captions adapt to positive, neutral, or negative tone.' },
    { icon: Shield, title: 'On-brand, every time', desc: 'Content follows your brand’s tone and identity consistently.' },
    { icon: Settings, title: 'Multi-platform output', desc: 'Ready for Instagram, TikTok, and your website.' },
  ]
  return (
    <section id="solution" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How AURA Helps</h2>
            <p className="mt-3 text-slate-600">AURA speeds up workflows and keeps your brand voice consistent across channels.</p>
            <div className="mt-6 space-y-4">
              {bullets.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-start gap-3">
                  <div className="mt-1 rounded-lg bg-indigo-50 text-indigo-600 p-2"><b.icon size={18} /></div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{b.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center">
              <p className="text-sm text-slate-500">AI dashboard illustration analyzing comments</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-left text-xs">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">@ani • IG</p>
                  <p className="mt-1">Love this product! ❤️</p>
                  <span className="mt-2 inline-flex rounded bg-emerald-50 text-emerald-700 px-2 py-0.5">Positive</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">@budi • TikTok</p>
                  <p className="mt-1">When will size M restock?</p>
                  <span className="mt-2 inline-flex rounded bg-sky-50 text-sky-700 px-2 py-0.5">Neutral</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">@sari • Web</p>
                  <p className="mt-1">Support was slow yesterday.</p>
                  <span className="mt-2 inline-flex rounded bg-rose-50 text-rose-700 px-2 py-0.5">Negative</span>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 p-3 text-left text-white">
                <p className="text-xs uppercase tracking-wide/loose">AURA Output</p>
                <p className="mt-1 text-sm">Thanks for the feedback! We’ve escalated this to the team to make your next experience even better 🙏</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { title: 'Sentiment Detection Engine', desc: 'Analyze positive, neutral, or negative sentiment from comments.' },
    { title: 'AI Copywriting Generator', desc: 'Instantly generate captions, hashtags, or banner copy.' },
    { title: 'Editable Results', desc: 'Fine-tune the output to match your needs.' },
    { title: 'Platform Selector', desc: 'Choose output for IG, TikTok, or your website.' },
    { title: 'Tone Control', desc: 'Professional, friendly, playful, or empathetic voice.' },
    { title: 'Save as Templates', desc: 'Save best-performing outputs for reuse.' },
  ]
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Key Features</h2>
          <p className="mt-3 text-slate-600">Everything you need for fast, relevant, on-brand responses.</p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md">
              <div className="mb-3 inline-flex rounded-lg bg-violet-50 text-violet-600 p-2"><Stars size={18} /></div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Drop Your Text', desc: 'Paste a comment, review, or prompt from any channel.' },
    { title: 'Sense the Mood', desc: 'AURA detects sentiment and intent in real time.' },
    { title: 'Craft the Message', desc: 'Get multiple on-brand copies tailored to your audience.' },
    { title: 'Refine & Publish', desc: 'Edit, A/B test, save as templates, and post in one click.' },
  ]
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-3 text-slate-600">A delightful, guided flow designed for speed and quality.</p>
        </motion.div>
        <div className="relative mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm hover:shadow-md">
              <div className="mx-auto h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center font-semibold">{i + 1}</div>
              <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-indigo-600 to-violet-600 rounded" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Metrics() {
  return (
    <section id="metrics" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <Clock className="mx-auto text-indigo-600" />
            <div className="mt-2 text-3xl font-extrabold text-slate-900">&lt;5 sec</div>
            <p className="text-slate-600">Generation time</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <Gauge className="mx-auto text-indigo-600" />
            <div className="mt-2 text-3xl font-extrabold text-slate-900">+70%</div>
            <p className="text-slate-600">Time saved</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <Heart className="mx-auto text-indigo-600" />
            <div className="mt-2 text-3xl font-extrabold text-slate-900">≥85%</div>
            <p className="text-slate-600">Satisfaction score</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StarsRating({ value = 5 }) {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <Star key={i} size={16} className={i < value ? 'text-amber-500 fill-amber-500' : 'text-slate-300'} />
  ))
  return <div className="inline-flex items-center gap-0.5">{stars}</div>
}

function Testimonial() {
  const testimonials = [
    {
      quote: 'AURA trimmed our response time from minutes to seconds without sacrificing brand voice.',
      name: 'Rani Pratama', role: 'Social Media Lead', company: 'Kopi Nusantara', rating: 5
    },
    {
      quote: 'We saw a 2x increase in comment engagement after switching to AURA-generated replies.',
      name: 'Andi Saputra', role: 'Head of Marketing', company: 'UrbanFit', rating: 5
    },
    {
      quote: 'Love the sentiment awareness. Negative feedback gets empathetic responses instantly.',
      name: 'Sinta Dewi', role: 'Community Manager', company: 'Bloom & Co.', rating: 4
    }
  ]
  return (
    <section id="testi" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Our Users Say</h2>
          <p className="mt-3 text-slate-600">Real feedback from real teams using AURA every day.</p>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.05 }} className="h-full rounded-2xl bg-white border border-slate-100 p-6 shadow-sm">
              <StarsRating value={t.rating} />
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">— {t.name}, {t.role} @ {t.company}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-sky-500 p-1">
          <div className="rounded-3xl bg-white/90 backdrop-blur p-8 md:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Create On-Brand, Automated Responses Today</h3>
            <p className="mt-3 text-slate-600">Save time, maintain consistency, and boost engagement.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-indigo-700">Try AURA Free <Rocket size={18} /></a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white text-indigo-700 px-6 py-3 font-semibold hover:bg-indigo-50">Book a Demo <CalendarIcon /></a>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs">Coming soon for MindWalker users</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
  )
}

function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 grid place-items-center text-white font-bold">A</div>
            <div>
              <p className="font-semibold text-slate-900">AURA</p>
              <p className="text-xs text-slate-500">Creative Intelligence for Every Brand Voice.</p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">About</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} MindWalker • All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Metrics />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}
