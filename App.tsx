import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Download, 
  Star, 
  ArrowRight,
  PenTool,
  Zap,
  Layout,
  Heart,
  Wallet
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Constants ---
const BRAND_NAME = "INSPIREX";
const PRODUCT_NAME = "All‑in‑One Digital Planner 2026";
const CTA_TEXT = "Get Instant Download";
const PRICE = "$24.99";
const CHECKOUT_URL = "YOUR_PAYMENT_LINK_HERE"; // Placeholder for user's payment link

const NAV_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it Works' },
  { id: 'included', label: 'Included' },
  { id: 'templates', label: 'Templates' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah M.", role: "Grad Student", rating: 5, text: "Finally a pretty planner that actually syncs! The Apple Calendar integration is a total game changer for my lecture schedule." },
  { name: "Liam K.", role: "Freelance Designer", rating: 5, text: "The hyperlinks make it so fast to navigate. I've used dozens of digital planners, but this is the most intuitive by far." },
  { name: "Jessica P.", role: "Busy Mom", rating: 5, text: "Daily + weekly + finance templates replaced multiple notebooks. I have everything in one place on my iPad now." },
  { name: "David L.", role: "Software Engineer", rating: 5, text: "The aesthetic is beautiful but the functionality is where it shines. Google Reminders sync works perfectly." },
  { name: "Aria R.", role: "Yoga Instructor", rating: 5, text: "I love the wellness and habit trackers. It's so much more than just a calendar; it's a life organizer." },
  { name: "Marc T.", role: "Project Manager", rating: 5, text: "Professional enough for work but pretty enough for journaling. The sticker pack is actually useful, not just fluff." }
];

const FAQS: FAQItem[] = [
  { question: "Which apps are compatible?", answer: "The planner works with any PDF annotation app that supports hyperlinks. We recommend GoodNotes, Notability, or Noteshelf for the best experience on iPad and Android tablets." },
  { question: "Does it sync automatically?", answer: "The planner is a PDF, so it doesn't 'auto-sync' like a cloud app. However, it features built-in shortcuts and icons that link directly to your Google and Apple Calendars for easy event creation." },
  { question: "How do I add events to my calendar?", answer: "Every day, week, and month has dedicated calendar icons. Just tap them, and they'll trigger your device to open a new event or reminder with the correct date pre-filled." },
  { question: "Is it dated?", answer: "Yes! All 365 days of 2026 are fully dated and hyperlinked. You get both Sunday and Monday start versions." },
  { question: "Can I use it on Android or Windows?", answer: "Absolutely. As long as you have a PDF annotation app (like Penly on Android or Xodo on Windows), the planner will work perfectly." },
  { question: "Is this a physical product?", answer: "No, this is an instant digital download. You will receive the files immediately after purchase via email." },
  { question: "What is included in the download?", answer: "You get the 2026 Planner (Sun/Mon start), a Sticker Book, individual PNG stickers, premium covers, and a comprehensive user guide." },
  { question: "What is your refund policy?", answer: "Due to the digital nature of the product, we generally don't offer refunds, but we offer a 7-day hassle-free support guarantee to ensure you get it working perfectly." }
];

// --- Components ---

const AnnouncementBar = () => (
  <div className="bg-pastel-accent text-white py-2 text-center text-sm font-medium tracking-wide">
    New 2026 {BRAND_NAME} edition • Instant download • Limited time offer
  </div>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-purple-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-around select-none whitespace-nowrap text-xs font-bold tracking-[1em] text-pastel-accent">
        {Array(10).fill(BRAND_NAME).join(' ')}
      </div>

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pastel-accent rounded-lg flex items-center justify-center text-white font-serif font-bold italic">I</div>
          <span className="text-xl font-serif font-bold text-pastel-accent">{BRAND_NAME}</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors hover:text-pastel-accent relative py-1 ${activeSection === link.id ? 'text-pastel-accent' : 'text-pastel-text'}`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-accent animate-in fade-in slide-in-from-left-1" />
              )}
            </a>
          ))}
          <a
            href="#buy"
            className="px-5 py-2 bg-pastel-accent text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all active:scale-95"
          >
            Buy Now
          </a>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-pastel-accent p-2">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-purple-100 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-pastel-text hover:text-pastel-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 bg-pastel-accent text-white rounded-xl font-bold"
          >
            {CTA_TEXT}
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="overview" className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-30 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pastel-purple via-transparent to-transparent"></div>
    
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-in slide-in-from-left duration-700">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif text-slate-800 leading-tight">
            Plan your <span className="italic text-pastel-accent">best year</span> yet with {BRAND_NAME}.
          </h1>
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            Meet the 2026 {BRAND_NAME} All-in-One Digital Planner. Beautifully hyperlinked for your iPad/Tablet with seamless Calendar & Reminders integration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            type="button"
            data-paylixecommerce-product="695fd4a26a0e2"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined' && (window as any).fbq) {
                // @ts-ignore
                window.fbq('track', 'InitiateCheckout');
              }
              if (typeof window !== 'undefined' && (window as any).gtag) {
                // @ts-ignore
                window.gtag('event', 'begin_checkout');
              }
            }}
            data-cta="primary-hero" 
            className="px-10 py-5 bg-[#8A2BE2] text-white rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 ease-in-out hover:bg-[#D946EF] hover:shadow-[0_15px_35px_rgba(217,70,239,0.5)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 group"
          >
            {CTA_TEXT} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <ul className="space-y-3">
          {["Fully Hyperlinked Navigation", "Google & Apple Calendar Sync", "50+ Bonus Templates"].map((b, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="text-pastel-accent w-5 h-5" /> {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative animate-in zoom-in duration-1000">
        <figure className="relative z-10 rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(147,51,234,0.3)] transform hover:scale-[1.02] transition-transform cursor-pointer">
        <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_1.jpg" alt={`${BRAND_NAME} 2026 Hero Cover`} className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </figure>
      </div>
    </div>
  </section>
);

const DailyWeeklyFeatures = () => (
  <section id="gallery" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 space-y-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <figure className="rounded-3xl overflow-hidden shadow-xl">
          <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_7.jpg" alt={`${BRAND_NAME} Daily Layout`} className="w-full" />
          </figure>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-4xl font-serif">Daily Focus & Intent</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our daily pages help you win the day with dedicated sections for your schedule, top priorities, to-do lists, and mindful reflection. Every date is hyperlinked to its corresponding week and month.
          </p>
          <ul className="space-y-2">
            {["Time-blocked schedule", "Goal setting area", "Hydration tracker", "Gratitude section"].map((l, i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-pastel-accent" /> {l}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif">Master Your Week</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The weekly spread provides a bird's eye view of your commitments. Perfect for planning ahead and reviewing your progress towards your 2026 goals.
          </p>
          <ul className="space-y-2">
            {["Weekly plan & review", "Habit tracker", "Next week preparation", "Focus of the week"].map((l, i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-pastel-accent" /> {l}</li>
            ))}
          </ul>
        </div>
        <div>
          <figure className="rounded-3xl overflow-hidden shadow-xl">
           <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_6.jpg" alt={`${BRAND_NAME} Weekly Layout`} className="w-full" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-pastel-lavender/30">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <h2 className="text-4xl font-serif">Smart Integration. <span className="italic">One Tap Away.</span></h2>
        <div className="space-y-8">
          {[
            { step: "01", title: "Tap to Add", desc: "Every dated page contains custom icons that link directly to Apple or Google Calendar." },
            { step: "02", title: "Save Time", desc: "No more manually typing dates. Our hyperlinked system pre-fills your calendar entries." },
            { step: "03", title: "Stay Notified", desc: "Enjoy the tactile feel of handwriting with the reliability of digital notifications." }
          ].map((s, i) => (
            <div key={i} className="flex gap-6">
              <span className="text-3xl font-serif text-pastel-accent/40 font-bold">{s.step}</span>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-800">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <figure className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
         <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_3.jpg" alt={`${BRAND_NAME} Calendar Integration`} className="w-full" />
        </figure>
      </div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <h2 className="text-4xl font-serif mb-6">Engineered for your <span className="italic text-pastel-accent">digital lifestyle</span>.</h2>
          <p className="text-slate-500 text-lg">From productivity sprints to mindfulness trackers, {BRAND_NAME} is your complete digital headquarters.</p>
        </div>
        <figure className="rounded-2xl overflow-hidden shadow-lg">
         <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_8.jpg" alt={`${BRAND_NAME} Feature Overview`} className="w-full" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <PenTool />, title: "Fully Hyperlinked", desc: "Navigate 365+ pages with lightning-fast index tabs." },
          { icon: <Calendar />, title: "Calendar Sync", desc: "Direct links to Apple & Google calendars and reminders." },
          { icon: <Layout />, title: "Layout Variety", desc: "Choose from Sunday or Monday start for all 2026 dates." },
          { icon: <Wallet />, title: "Finance Tracking", desc: "Monthly budgets, savings, and expense logs included." },
          { icon: <Heart />, title: "Wellness Suite", desc: "Mood trackers, sleep logs, and gratitude journals." },
          { icon: <Zap />, title: "Goal Focused", desc: "Yearly, quarterly, and monthly goal setting frameworks." }
        ].map((f, i) => (
          <div 
            key={i} 
            className="group flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 ease-in-out hover:bg-[#FAF5FF] hover:border-pastel-accent hover:-translate-y-[5px] hover:shadow-xl cursor-default"
          >
            <div className="w-14 h-14 bg-pastel-lavender rounded-2xl flex items-center justify-center text-pastel-accent shrink-0 transition-transform duration-300 group-hover:scale-110">
              {React.cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
            </div>
            <div className="space-y-3">
              <h3 className="text-[1.3rem] font-bold text-slate-800 leading-tight">{f.title}</h3>
              <p className="text-[1.1rem] text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhatIsIncluded = () => (
  <section id="included" className="py-24 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 space-y-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif">The Navigation <span className="italic">Hub</span></h2>
          <p className="text-lg text-slate-600">Our intelligent index system allows you to access any page in the planner within two taps. It's the most frictionless way to manage a 400+ page PDF.</p>
          <figure className="rounded-2xl overflow-hidden shadow-lg">
           <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_2.jpg" alt={`${BRAND_NAME} Index Navigation`} className="w-full" />
          </figure>
        </div>
        <div className="space-y-8">
          <h2 className="text-4xl font-serif">Premium Bonuses</h2>
          <ul className="space-y-4">
            {[
              "500+ Aesthetic Digital Stickers",
              "12 Professional Cover Designs",
              "Video Setup Guide for GoodNotes & Notability",
              "Finance, Wellness, & Productivity Template Packs"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-pastel-pink/20">
                <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pastel-accent" /></div>
                <span className="text-lg text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <figure className="rounded-2xl overflow-hidden shadow-lg border-4 border-pastel-pink/30">
          <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_11.jpg" alt={`${BRAND_NAME} Digital Stickers and Covers`} className="w-full" />
          </figure>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center pt-12">
        <div className="order-2 md:order-1">
          <figure className="rounded-3xl overflow-hidden shadow-2xl">
           <img src="/DP-Palette%204%20Portrait%20-%202250%20X%202250_9.jpg" alt={`${BRAND_NAME} Finance Tracker`} className="w-full" />
          </figure>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-4xl font-serif">Financial <span className="italic">Clarity</span></h2>
          <p className="text-lg text-slate-600">
            Take control of your money with our comprehensive finance suite. Track your monthly budget, monitor expenses, and plan your savings goals for 2026.
          </p>
          <div className="p-6 bg-pastel-lavender/40 rounded-2xl flex gap-4 items-center">
             <div className="bg-white p-3 rounded-full"><Wallet className="text-pastel-accent" /></div>
             <div>
               <h4 className="font-bold">Complete Budgeting</h4>
               <p className="text-sm">Includes bill trackers, debt logs, and yearly finance reviews.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Templates = () => (
  <section id="templates" className="py-24 bg-pastel-pink/10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-4">50+ Professional Templates</h2>
        <p className="text-slate-500 text-lg">Every aspect of your life, meticulously designed for {BRAND_NAME}.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          { cat: "Productivity", examples: "Goal Planner, Project Plan" },
          { cat: "Wellness", examples: "Mood Tracker, Sleep Log" },
          { cat: "Finance", examples: "Expense Log, Debt Tracker" },
          { cat: "Lifestyle", examples: "Travel Plan, Reading Log" },
          { cat: "Health", examples: "Fitness Planner, Habit Log" }
        ].map((t, i) => (
          <div 
            key={i} 
            className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm text-center space-y-3 transition-all duration-300 ease-in-out hover:bg-[#FDF4FF] hover:border-[#D946EF] hover:-translate-y-[5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] cursor-default"
          >
             <h3 className="text-[1.35rem] font-bold text-pastel-accent leading-tight">{t.cat}</h3>
             <p className="text-[1.1rem] text-slate-500 leading-relaxed">{t.examples}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => {
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="reviews" className="py-24 bg-pastel-lavender/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <div className="flex justify-center gap-1 mb-4">
          {Array(5).fill(0).map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400 w-6 h-6" />)}
        </div>
        <h2 className="text-4xl font-serif italic">Loved by 5,000+ {BRAND_NAME} Users</h2>
      </div>

      <div className="relative w-full mask-fade">
        <div className="flex w-fit animate-scroll hover:[animation-play-state:paused] py-10">
          {duplicatedTestimonials.map((t, i) => (
            <div key={i} className="w-[320px] md:w-[450px] shrink-0 px-4">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-purple-50 space-y-4 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-slate-800">{t.name}</h4>
                      <p className="text-xs text-slate-400 uppercase tracking-widest">{t.role}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array(t.rating).fill(0).map((_, j) => <Star key={j} className="fill-yellow-400 text-yellow-400 w-3 h-3" />)}
                    </div>
                  </div>
                  <p className="text-slate-600 italic text-lg leading-relaxed">"{t.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16 italic">Common Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-purple-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-purple-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-slate-600 bg-white border-t border-purple-50 animate-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="buy" className="py-24 bg-gradient-to-br from-pastel-lavender to-pastel-pink">
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-white relative overflow-hidden text-center space-y-10">
        <div className="absolute top-0 right-0 p-8">
           <div className="bg-pastel-accent text-white px-6 py-2 rounded-full font-bold animate-bounce shadow-lg">50% OFF TODAY</div>
        </div>

        <div className="space-y-2">
          <p className="uppercase tracking-[0.3em] text-pastel-accent font-bold text-sm">Full 2026 Access</p>
          <h2 className="text-5xl font-serif">{BRAND_NAME} {PRODUCT_NAME}</h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span className="text-2xl text-slate-300 line-through">$49.99</span>
          <span className="text-7xl font-serif text-slate-800">{PRICE}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-left max-w-xl mx-auto">
          {[
            "Fully dated 2026 planner",
            "Sunday & Monday starts",
            "500+ Digital Stickers",
            "Calendar & Reminders Sync",
            "12 Premium Cover Designs",
            "Step-by-step User Guide"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-pastel-accent w-5 h-5 shrink-0" />
              <span className="text-slate-600 font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-8">
          <button 
            type="button"
            data-paylixecommerce-product="695fd4a26a0e2"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== 'undefined' && (window as any).fbq) {
                // @ts-ignore
                window.fbq('track', 'InitiateCheckout');
              }
              if (typeof window !== 'undefined' && (window as any).gtag) {
                // @ts-ignore
                window.gtag('event', 'begin_checkout');
              }
            }}
            data-cta="primary-price"
            className="block w-full py-6 bg-[#8A2BE2] text-white rounded-[2rem] text-2xl font-bold transition-all duration-300 ease-in-out hover:bg-[#D946EF] hover:shadow-[0_15px_35px_rgba(217,70,239,0.5)] hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
          >
            <Download className="w-8 h-8" /> {CTA_TEXT}
          </button>
          <p className="text-[#6B7280] text-[0.9rem] flex items-center justify-center gap-2 mt-[10px] font-medium">
             <CheckCircle2 className="w-4 h-4 text-pastel-accent" /> Join 5,000+ Happy Planners • Instant Email Delivery • Works with GoodNotes & Notability
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-20">
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pastel-accent rounded-lg flex items-center justify-center text-white font-serif font-bold italic">I</div>
          <span className="text-xl font-serif font-bold text-white">{BRAND_NAME}</span>
        </div>
        <p className="text-sm leading-relaxed">
          The only digital planner designed to bring balance and peace to your digital life. 
          Trusted by thousands of professionals, students, and dreamers.
        </p>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-bold">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#overview" className="hover:text-pastel-accent transition-colors">Overview</a></li>
          <li><a href="#gallery" className="hover:text-pastel-accent transition-colors">Layouts</a></li>
          <li><a href="#templates" className="hover:text-pastel-accent transition-colors">Templates</a></li>
          <li><a href="#reviews" className="hover:text-pastel-accent transition-colors">Customer Reviews</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-bold">Support</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-pastel-accent transition-colors">User Guide</a></li>
          <li><a href="#" className="hover:text-pastel-accent transition-colors">Installation Help</a></li>
          <li><a href="/terms.html" target="_blank" className="hover:text-pastel-accent transition-colors">Terms of Service</a></li>
          <li><a href="/privacy.html" target="_blank" className="hover:text-pastel-accent transition-colors">Privacy Policy</a></li>
          <li><a href="/refunds.html" target="_blank" className="hover:text-pastel-accent transition-colors">Refund Policy</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-white font-bold">Contact</h4>
        <p className="text-sm">Have a question? We're here to help.</p>
        <a href="mailto:support@inspirex.world" className="text-pastel-accent font-bold block">support@inspirex.world</a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-10 text-center text-xs tracking-widest uppercase text-slate-600">
      &copy; 2025 {BRAND_NAME} Digital Products. All Rights Reserved.
    </div>
  </footer>
);

const FloatingCTA = () => (
  <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60] animate-in slide-in-from-bottom-20 duration-500">
    <a 
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="floating-mobile"
      className="flex items-center justify-between w-full p-4 bg-[#8A2BE2] text-white rounded-2xl shadow-2xl font-bold transition-all hover:bg-[#D946EF]"
    >
      <span>{CTA_TEXT}</span>
      <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">{PRICE}</span>
    </a>
  </div>
);

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button 
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className="fixed bottom-24 right-6 p-4 bg-white border border-purple-100 rounded-full shadow-lg text-pastel-accent hover:-translate-y-1 transition-all z-40 hidden md:block"
      aria-label="Back to top"
    >
      <ChevronDown className="rotate-180" />
    </button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <DailyWeeklyFeatures />
      <HowItWorks />
      <FeatureGrid />
      <WhatIsIncluded />
      <Templates />
      <Reviews />
      <FAQ />
      <Pricing />
      
      <section className="py-20 text-center bg-white border-t border-purple-50">
        <h3 className="text-3xl font-serif text-slate-800 mb-6">Start 2026 organized in 5 minutes with {BRAND_NAME}.</h3>
        <a href="#buy" className="text-pastel-accent font-bold border-b-2 border-pastel-accent pb-1 hover:text-pastel-accent/80 transition-colors">
          Get your {BRAND_NAME} planner pack now
        </a>
      </section>

      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
}