import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ─── Design Tokens & Animations ────────────────────────────────
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const anim = {
  fadeUp: (delay = 0) => ({
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
  }),
  scaleOnHover: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 25 },
  },
};

const STATS = ["500+ TRANSFORMATIONS", "15+ MASTER COACHES", "24/7 ELITE ACCESS", "TOP 1% RATED FACILITY", "STATE-OF-THE-ART BIOMETRICS"];

const COACHES = [
  { name: 'Marcus Thorne', role: 'Head of Performance', specialty: 'Biometrics & Power', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=800' },
  { name: 'Sarah Chen', role: 'Elite Coach', specialty: 'Mobility & Flow', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800' },
  { name: 'Jaxson Reed', role: 'Strength Lead', specialty: 'Olympic Weightlifting', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800' },
];

const TIERS = [
  { name: 'Founding', price: '149', features: ['24/7 Access', 'Basic Bio-tracking', 'Locker Access'], popular: false },
  { name: 'Vanguard', price: '299', features: ['All Founding Perks', '1-on-1 Monthly Bio-Review', 'Recovery Lab Access', 'Guest Passes'], popular: true },
  { name: 'Legacy', price: '499', features: ['Unlimited Lab Access', 'Daily Performance Drinks', 'Priority Coach Booking', 'Private Locker'], popular: false },
];

// ─── Sub-Components ────────────────────────────────────────────

const PillButton = ({ children, variant = 'filled', className = '', ...props }) => {
  const variants = {
    filled: 'bg-[#e2ff3a] text-black hover:bg-white',
    outline: 'border border-[#e2ff3a] text-[#e2ff3a] hover:bg-[#e2ff3a] hover:text-black',
  };
  return (
    <motion.button
      {...anim.scaleOnHover}
      className={`px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const ProgramCard = memo(({ program, index }) => (
  <motion.article
    {...anim.fadeUp(index * 0.1)}
    className={`${program.colSpan} relative overflow-hidden rounded-[2rem] bg-[#1a1a1a] min-h-[480px] group cursor-pointer border border-white/5`}
  >
    <motion.img
      src={program.image}
      alt={program.title}
      className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
    <div className="relative h-full flex flex-col justify-end p-10 md:p-12">
      <motion.span className="font-bold tracking-[0.3em] text-[10px] uppercase mb-4" style={{ color: program.accent }}>
        {program.tag}
      </motion.span>
      <h3 className="text-5xl md:text-6xl font-black uppercase italic leading-[0.85] tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
        {program.title}
      </h3>
      <motion.p className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-6 text-zinc-400 text-sm transition-all duration-500">
        Master your physiology with our data-driven {program.title.toLowerCase()} protocols.
      </motion.p>
    </div>
  </motion.article>
));

// ─── Main Sections ─────────────────────────────────────────────

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black tracking-tighter text-[#e2ff3a]">VAULT</a>
        <div className="hidden md:flex items-center gap-8">
          {['Experience', 'Coaches', 'Membership'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-[#e2ff3a] transition-colors">{item}</a>
          ))}
          <PillButton className="ml-4">Portal</PillButton>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" className="w-full h-full object-cover opacity-50" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </motion.div>
      <div className="relative z-10 text-center px-6">
        <motion.div {...anim.fadeUp()}>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] uppercase italic tracking-tighter">
            Break <br /> <span className="text-[#e2ff3a]">The Limit.</span>
          </h1>
          <p className="mt-8 text-zinc-400 max-w-lg mx-auto text-lg font-medium">The private sanctuary for high-performance athletes.</p>
          <div className="mt-12 flex justify-center gap-4">
            <PillButton variant="filled">Start Training</PillButton>
            <PillButton variant="outline">The Lab</PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatsMarquee = () => (
  <div className="bg-[#e2ff3a] py-5 overflow-hidden whitespace-nowrap border-y border-black/10">
    <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }} className="flex gap-20 items-center">
      {[...STATS, ...STATS].map((stat, i) => (
        <span key={i} className="text-black font-black italic text-xs tracking-[0.2em]">{stat}</span>
      ))}
    </motion.div>
  </div>
);

const CoachSlider = () => {
  const ref = useRef(null);
  return (
    <section id="coaches" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-6xl font-black uppercase italic tracking-tighter">The Architects</h2>
        <div className="w-20 h-1.5 bg-[#e2ff3a] mt-4" />
      </div>
      <motion.div ref={ref} className="px-6 flex gap-8 cursor-grab active:cursor-grabbing" drag="x" dragConstraints={{ right: 0, left: -800 }}>
        {COACHES.map((coach, i) => (
          <motion.div key={i} className="min-w-[320px] md:min-w-[420px] group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-zinc-900">
            <img src={coach.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={coach.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black p-8 flex flex-col justify-end">
              <p className="text-[#e2ff3a] text-[10px] font-bold tracking-widest uppercase mb-1">{coach.specialty}</p>
              <h4 className="text-3xl font-black uppercase italic">{coach.name}</h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section id="membership" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e2ff3a]/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-12">Access</h2>
        <div className="flex items-center justify-center gap-6 mb-16">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${!isAnnual ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
          <button onClick={() => setIsAnnual(!isAnnual)} className="w-14 h-7 rounded-full bg-zinc-800 relative flex items-center px-1">
            <motion.div animate={{ x: isAnnual ? 28 : 0 }} className="w-5 h-5 bg-[#e2ff3a] rounded-full" />
          </button>
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isAnnual ? 'text-white' : 'text-zinc-500'}`}>Annual</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <div key={i} className={`p-12 rounded-[2.5rem] border text-left flex flex-col ${tier.popular ? 'bg-white/10 border-[#e2ff3a]' : 'bg-white/5 border-white/10'} backdrop-blur-xl`}>
              <h4 className="text-2xl font-black uppercase mb-4">{tier.name}</h4>
              <div className="text-5xl font-black mb-8">${isAnnual ? Math.floor(tier.price * 0.8) : tier.price}<span className="text-sm text-zinc-500 italic">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, j) => (
                  <li key={j} className="text-[11px] text-zinc-400 flex items-center gap-3 uppercase font-bold tracking-wider">
                    <div className="w-1 h-1 bg-[#e2ff3a] rounded-full" /> {f}
                  </li>
                ))}
              </ul>
              <PillButton variant={tier.popular ? 'filled' : 'outline'} className="w-full">Select Plan</PillButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ─── Recovery Lab Component ─────────────────────────────────────
const RecoveryLab = () => {
  const features = [
    { title: 'Cryo-Chamber', desc: 'Sub-zero recovery to reset your CNS.', size: 'md:col-span-4', img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800' },
    { title: 'Biometric Hub', desc: 'Real-time blood & hormone tracking.', size: 'md:col-span-8', img: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800' },
    { title: 'Infrared Sauna', desc: 'Deep tissue detoxification.', size: 'md:col-span-8', img: 'https://images.unsplash.com/photo-1598136490941-30d885318abd?q=80&w=800' },
    { title: 'Compression', desc: 'Pneumatic rapid recovery.', size: 'md:col-span-4', img: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800' },
  ];

  return (
    <section id="lab" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">
              The <span className="text-[#e2ff3a]">Lab</span>
            </h2>
            <p className="text-zinc-500 mt-6 text-lg uppercase font-bold tracking-widest">
              Performance doesn't end when the workout stops.
            </p>
          </div>
          <PillButton variant="outline">View All Protocols</PillButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              {...anim.fadeUp(i * 0.1)}
              className={`${f.size} group relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5`}
            >
              <img 
                src={f.img} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                alt={f.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h4 className="text-2xl font-black uppercase italic mb-2">{f.title}</h4>
                <p className="text-zinc-400 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black pt-32 pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
        <div className="md:col-span-6">
          <h2 className="text-7xl font-black tracking-tighter text-[#e2ff3a] italic mb-8">VAULT</h2>
          <p className="text-zinc-500 max-w-md text-lg leading-relaxed">The world's most exclusive training environment. We architect human potential through biometrics and grit.</p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8">System</h4>
          <ul className="space-y-4 text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-[#e2ff3a]">The Lab</a></li>
            <li><a href="#" className="hover:text-[#e2ff3a]">Protocols</a></li>
            <li><a href="#" className="hover:text-[#e2ff3a]">Coaches</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8">Newsletter</h4>
          <div className="relative">
            <input type="email" placeholder="ENLIST YOUR EMAIL" className="w-full bg-zinc-900 border border-white/10 rounded-full py-4 px-6 text-[10px] font-bold focus:border-[#e2ff3a] outline-none" />
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex justify-between items-center">
        <p className="text-[9px] font-bold text-zinc-600 tracking-[0.3em] uppercase">© 2026 VAULT LABS. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#e2ff3a] rounded-full animate-pulse" />
          <span className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase italic">System Online</span>
        </div>
      </div>
    </div>
  </footer>
);

// ─── Root Application ──────────────────────────────────────────

const VaultLanding = () => {
  const programs = [
    { title: 'Hypertrophy', tag: 'Power & Mass', accent: '#e2ff3a', colSpan: 'md:col-span-7', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?q=80&w=2070' },
    { title: 'Flow', tag: 'Agility & Speed', accent: '#35adff', colSpan: 'md:col-span-5', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070' },
  ];

  return (
    <div className="bg-[#0e0e0e] text-white selection:bg-[#e2ff3a] selection:text-black min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <StatsMarquee />
      
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div {...anim.fadeUp()} className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">The <span className="text-[#e2ff3a]">Disciplines</span></h2>
          <div className="w-24 h-2 bg-[#e2ff3a] mt-6" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} program={p} index={i} />
          ))}
        </div>
      </section>

      <CoachSlider />
      <Pricing />
      <RecoveryLab />
      <Footer />

      {/* Floating CTA */}
      <AnimatePresence>
        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} className="fixed bottom-10 left-0 right-0 z-[90] flex justify-center pointer-events-none px-6">
          <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-2 rounded-full flex items-center gap-6 pointer-events-auto shadow-2xl">
            <div className="pl-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-[#e2ff3a] rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest">Limited Slots</span>
            </div>
            <PillButton>Join The Vault</PillButton>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VaultLanding;