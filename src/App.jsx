import React from 'react'
import { Spline } from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Gauge, Heart, Clock, MessageCircle, Shield, Settings, Stars, Rocket, PlayCircle, Facebook, Instagram, Twitter, Mail } from 'lucide-react'

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
            <a href="#problem" className="hover:text-slate-900">Masalah</a>
            <a href="#solution" className="hover:text-slate-900">Solusi</a>
            <a href="#features" className="hover:text-slate-900">Fitur</a>
            <a href="#how" className="hover:text-slate-900">Cara Kerja</a>
            <a href="#metrics" className="hover:text-slate-900">Kinerja</a>
            <a href="#testi" className="hover:text-slate-900">Testimoni</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white text-indigo-700 px-3 py-2 text-sm hover:bg-indigo-50 transition">Lihat Demo <PlayCircle size={16} /></a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-indigo-700 transition">Coba Sekarang <ArrowRight size={16} /></a>
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
              <Sparkles size={14} /> Social Media AI • automated reply • AI copywriting
            </motion.div>
            <motion.h1 variants={item} className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Ubah Komentar Jadi Copy Kreatif dalam Sekejap dengan AURA AI
            </motion.h1>
            <motion.p variants={item} className="mt-4 text-slate-600 text-base sm:text-lg">
              AURA memahami sentimen audiens dan menghasilkan respon otomatis sesuai tone brand Anda di semua platform.
            </motion.p>
            <motion.div variants={item} className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 font-semibold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition">
                Coba Sekarang <Rocket size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white text-indigo-700 px-5 py-3 font-semibold hover:bg-indigo-50 transition">
                Lihat Demo <PlayCircle size={18} />
              </a>
            </motion.div>
            <motion.ul variants={item} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> AI copywriting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> sentiment analysis</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18}/> automated reply</li>
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
    { title: 'Brand tone tidak konsisten', desc: 'Respon manual berbeda-beda antar admin dan platform.' },
    { title: 'Variasi copy butuh waktu', desc: 'Menyusun caption dan komentar baru setiap hari melelahkan.' },
    { title: 'Sulit ubah sentimen', desc: 'Menafsirkan emosi audiens ke gaya komunikasi yang tepat tidak mudah.' },
  ]
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Masalah yang Dihadapi Tim Marketing</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Tim sosial media, PR, dan marketing sering kewalahan merespons audiens secara cepat namun tetap on-brand.</p>
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
              <li>Waktu respons lambat</li>
              <li>Gaya bahasa tidak seragam</li>
              <li>Variasi ide terbatas</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
            <h4 className="font-semibold">AURA</h4>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-white/90">
              <li>Respon otomatis <span className="font-semibold">&lt;5 detik</span></li>
              <li>Konsisten sesuai brand voice</li>
              <li>Variasi copy tak terbatas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Solution() {
  const bullets = [
    { icon: Stars, title: 'Auto-generate berbasis sentimen', desc: 'Balasan dan caption disesuaikan dengan positif, netral, atau negatif.' },
    { icon: Shield, title: 'Selaras dengan brand', desc: 'Konten mengikuti tone dan identitas brand Anda secara konsisten.' },
    { icon: Settings, title: 'Multi platform output', desc: 'Siap pakai untuk Instagram, TikTok, dan Website.' },
  ]
  return (
    <section id="solution" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Bagaimana AURA Membantu Anda</h2>
            <p className="mt-3 text-slate-600">AURA mempercepat kerja tim dan menjaga konsistensi brand voice di berbagai kanal.</p>
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
              <p className="text-sm text-slate-500">Ilustrasi dashboard AI menganalisis komentar</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-left text-xs">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">@ani • IG</p>
                  <p className="mt-1">Produknya bagus banget! ❤️</p>
                  <span className="mt-2 inline-flex rounded bg-emerald-50 text-emerald-700 px-2 py-0.5">Positif</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">@budi • TikTok</p>
                  <p className="mt-1">Kapan restock ukuran M?</p>
                  <span className="mt-2 inline-flex rounded bg-sky-50 text-sky-700 px-2 py-0.5">Netral</span>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-slate-500">@sari • Web</p>
                  <p className="mt-1">Respon CS lambat kemarin.</p>
                  <span className="mt-2 inline-flex rounded bg-rose-50 text-rose-700 px-2 py-0.5">Negatif</span>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 p-3 text-left text-white">
                <p className="text-xs uppercase tracking-wide/loose">AURA Output</p>
                <p className="mt-1 text-sm">Terima kasih untuk feedbacknya! Kami sudah eskalasi ke tim terkait dan pastikan pengalaman Anda semakin baik 🙏</p>
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
    { title: 'Sentiment Detection Engine', desc: 'Analisis sentimen positif, netral, atau negatif dari komentar.' },
    { title: 'AI Copywriting Generator', desc: 'Menghasilkan caption, hashtag, atau banner copy instan.' },
    { title: 'Editable Result', desc: 'Hasil bisa diedit sesuai kebutuhan.' },
    { title: 'Platform Selector', desc: 'Pilih output untuk IG, TikTok, Website.' },
    { title: 'Tone Control', desc: 'Gaya komunikasi: professional, friendly, playful, empathetic.' },
    { title: 'Save as Template', desc: 'Simpan hasil terbaik untuk digunakan ulang.' },
  ]
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Fitur Unggulan</h2>
          <p className="mt-3 text-slate-600">Semua yang Anda butuhkan untuk respons yang cepat, relevan, dan on-brand.</p>
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
    'Input komentar/teks',
    'AURA mendeteksi sentimen',
    'AURA menghasilkan copy otomatis',
    'User dapat edit atau regenerate',
    'Sistem belajar dari feedback user',
  ]
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Cara Kerja</h2>
          <p className="mt-3 text-slate-600">Lima langkah sederhana untuk mempercepat alur kerja.</p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white grid place-items-center font-semibold">{i + 1}</div>
              <p className="mt-3 text-sm text-slate-700">{s}</p>
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
            <div className="mt-2 text-3xl font-extrabold text-slate-900">&lt;5 detik</div>
            <p className="text-slate-600">Waktu generate</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <Gauge className="mx-auto text-indigo-600" />
            <div className="mt-2 text-3xl font-extrabold text-slate-900">+70%</div>
            <p className="text-slate-600">Efisiensi waktu</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <Heart className="mx-auto text-indigo-600" />
            <div className="mt-2 text-3xl font-extrabold text-slate-900">≥85%</div>
            <p className="text-slate-600">Skor kepuasan</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section id="testi" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white border border-slate-100 p-8 shadow-sm">
          <p className="text-lg text-slate-700">“Dengan AURA, tim kami bisa tetap responsif dan kreatif tanpa kehilangan karakter brand.”</p>
          <footer className="mt-4 text-slate-500">– Rani, Social Media Lead</footer>
        </motion.blockquote>
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
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Buat Respon Kreatif dan Otomatis Sekarang</h3>
            <p className="mt-3 text-slate-600">Hemat waktu, jaga konsistensi brand, dan tingkatkan engagement publik.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg hover:bg-indigo-700">Coba AURA Gratis <Rocket size={18} /></a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white text-indigo-700 px-6 py-3 font-semibold hover:bg-indigo-50">Jadwalkan Demo <CalendarIcon /></a>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs">Coming Soon for MindWalker users</div>
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
            <a href="#" className="hover:text-slate-900">Tentang</a>
            <a href="#features" className="hover:text-slate-900">Fitur</a>
            <a href="#" className="hover:text-slate-900">Kontak</a>
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
