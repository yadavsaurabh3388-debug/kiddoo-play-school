import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  Baby,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Shield,
  Sparkles,
  Star,
  Sun,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "2023", label: "Est.", emoji: "🎉" },
  { value: "40+", label: "Happy Kids", emoji: "😊" },
  { value: "5+", label: "Qualified Teachers", emoji: "👩‍🏫" },
  { value: "4.9★", label: "Star Rating", emoji: "⭐" },
];

const PROGRAMS = [
  {
    icon: Baby,
    emoji: "🍼",
    name: "Nursery",
    age: "2–3 Years",
    color: "bg-kiddoo-yellow/20 border-kiddoo-yellow",
    iconColor: "text-kiddoo-orange",
    badge: "bg-kiddoo-yellow",
    features: [
      "Sensory play & exploration",
      "Basic motor skills development",
      "Socialization with peers",
      "Music & movement classes",
    ],
    desc: "Gentle introduction to learning through play, songs, and discovery in a nurturing environment.",
  },
  {
    icon: Palette,
    emoji: "🎨",
    name: "Kindergarten",
    age: "3–5 Years",
    color: "bg-kiddoo-green/20 border-kiddoo-green",
    iconColor: "text-kiddoo-green",
    badge: "bg-kiddoo-green",
    features: [
      "Pre-reading & writing skills",
      "Creative arts & crafts",
      "Early math concepts",
      "Outdoor play & sports",
    ],
    desc: "Building curiosity and creativity while developing essential early childhood skills.",
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    name: "Pre-Primary",
    age: "5–6 Years",
    color: "bg-kiddoo-purple/20 border-kiddoo-purple",
    iconColor: "text-kiddoo-purple",
    badge: "bg-kiddoo-purple",
    features: [
      "Literacy & numeracy foundations",
      "Science exploration",
      "Digital literacy basics",
      "Project-based learning",
    ],
    desc: "Preparing young learners for primary school with confidence, skills, and a love for learning.",
  },
];

const WHY_US = [
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Safe Environment",
    desc: "CCTV-monitored premises, childproofed spaces, and trained first-aid staff ensure your child is always safe.",
    bg: "bg-kiddoo-blue/15",
    iconBg: "bg-kiddoo-blue/30 text-kiddoo-blue",
  },
  {
    icon: GraduationCap,
    emoji: "👩‍🏫",
    title: "Experienced Teachers",
    desc: "Our certified educators bring warmth, patience, and deep expertise in early childhood development.",
    bg: "bg-kiddoo-green/15",
    iconBg: "bg-kiddoo-green/30 text-kiddoo-green",
  },
  {
    icon: Sparkles,
    emoji: "✨",
    title: "Holistic Development",
    desc: "We nurture emotional, social, physical, and cognitive growth through a balanced curriculum.",
    bg: "bg-kiddoo-purple/15",
    iconBg: "bg-kiddoo-purple/30 text-kiddoo-purple",
  },
  {
    icon: Heart,
    emoji: "🎪",
    title: "Fun Activities",
    desc: "From puppet shows to science experiments, every day is filled with joyful, hands-on adventures.",
    bg: "bg-kiddoo-pink/15",
    iconBg: "bg-kiddoo-pink/30 text-kiddoo-pink",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/generated/gallery-arts.dim_600x400.jpg",
    alt: "Children doing arts and crafts",
    label: "Arts & Crafts",
  },
  {
    src: "/assets/generated/gallery-outdoor.dim_600x400.jpg",
    alt: "Children playing outdoors",
    label: "Outdoor Play",
  },
  {
    src: "/assets/generated/gallery-reading.dim_600x400.jpg",
    alt: "Children reading with teacher",
    label: "Story Time",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    child: "Aanya, Nursery",
    avatar: "PS",
    rating: 5,
    text: "Kiddoo has transformed my daughter into a confident, curious little girl. The teachers are incredibly loving and attentive. Best decision we ever made!",
    color: "bg-kiddoo-yellow/20",
  },
  {
    name: "Rahul Mehta",
    child: "Aryan, Kindergarten",
    avatar: "RM",
    rating: 5,
    text: "My son looks forward to school every single day. The program is perfectly balanced between learning and play. The staff genuinely cares about every child.",
    color: "bg-kiddoo-green/20",
  },
  {
    name: "Sunita Patel",
    child: "Riya, Pre-Primary",
    avatar: "SP",
    rating: 5,
    text: "Riya is now reading and writing at an amazing level. Kiddoo's holistic approach has prepared her beautifully for primary school. Highly recommend!",
    color: "bg-kiddoo-purple/20",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          data-ocid="nav.home.link"
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-kiddoo-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sun className="w-5 h-5 text-foreground" />
          </div>
          <span className="font-display font-extrabold text-xl text-foreground">
            Kiddoo
          </span>
          <Star className="w-4 h-4 text-kiddoo-yellow fill-kiddoo-yellow" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-foreground/70 hover:text-foreground hover:bg-kiddoo-yellow/20 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            data-ocid="nav.enroll.primary_button"
            className="rounded-2xl bg-kiddoo-yellow hover:bg-kiddoo-orange text-foreground font-bold shadow-warm transition-all hover:scale-105"
          >
            <a href="#contact">Enroll Now ✨</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-xl hover:bg-kiddoo-yellow/20 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-border"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`nav.${link.label.toLowerCase()}.link`}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-foreground hover:bg-kiddoo-yellow/20 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  type="button"
                  className="w-full rounded-2xl bg-kiddoo-yellow text-foreground font-bold"
                  onClick={() => {
                    setOpen(false);
                    window.location.hash = "contact";
                  }}
                >
                  Enroll Now ✨
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-dots"
    >
      {/* Floating decorative blobs */}
      <div className="absolute top-24 right-10 w-48 h-48 rounded-full bg-kiddoo-yellow/30 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-kiddoo-pink/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-kiddoo-green/15 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kiddoo-yellow/30 text-foreground text-sm font-bold mb-6"
          >
            <span>🌟</span> Nurturing Young Minds Since 2023
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground mb-6">
            Where Little
            <span className="block text-kiddoo-pink">Stars Shine</span>
            <span className="block text-kiddoo-green">Bright! ✨</span>
          </h1>

          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg">
            At Kiddoo, we believe every child is extraordinary. Our play-based
            curriculum ignites curiosity, builds confidence, and creates a
            lifelong love for learning in a safe, joyful environment.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              data-ocid="hero.programs.primary_button"
              size="lg"
              className="rounded-2xl bg-kiddoo-yellow hover:bg-kiddoo-orange text-foreground font-bold text-base px-8 shadow-warm hover:scale-105 transition-all"
            >
              <a href="#programs">Explore Programs 🎒</a>
            </Button>
            <Button
              asChild
              data-ocid="hero.contact.secondary_button"
              variant="outline"
              size="lg"
              className="rounded-2xl border-2 border-kiddoo-green text-kiddoo-green hover:bg-kiddoo-green hover:text-white font-bold text-base px-8 transition-all"
            >
              <a href="#contact">Contact Us 💬</a>
            </Button>
          </div>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-4 mt-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="text-xl">{stat.emoji}</span>
                <div>
                  <div className="font-display font-extrabold text-lg leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-playful-lg border-4 border-white">
            <img
              src="/assets/generated/hero-banner.dim_1200x500.jpg"
              alt="Happy children learning and playing at Kiddoo"
              className="w-full h-80 lg:h-[420px] object-cover"
              loading="eager"
            />
            {/* Floating badges on image */}
            <div className="absolute top-4 left-4 bg-white rounded-2xl px-3 py-2 shadow-md flex items-center gap-2 text-sm font-bold animate-float">
              🏆 Top Rated School
            </div>
            <div
              className="absolute bottom-4 right-4 bg-kiddoo-green text-white rounded-2xl px-3 py-2 shadow-md text-sm font-bold animate-float"
              style={{ animationDelay: "1s" }}
            >
              🎉 Admissions Open!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kiddoo-green/20 text-kiddoo-green font-bold text-sm mb-4">
            🌱 Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Learning Through{" "}
            <span className="text-kiddoo-green">Joy & Play</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            More than a school — we're a second home where every child blossoms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Where Curiosity Meets{" "}
              <span className="text-kiddoo-pink">Compassion</span>
            </h3>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                Founded in 2023, Kiddoo Play School was built on a simple
                belief: the early years are the most magical and impactful time
                in a child's life. We started with a vision to create an
                environment where children feel safe enough to be bold, curious,
                and wonderfully themselves.
              </p>
              <p>
                Our Reggio Emilia-inspired approach treats children as capable,
                creative individuals. We follow each child's natural curiosity
                and guide it with structured, intentional experiences that build
                real skills alongside emotional intelligence.
              </p>
              <p>
                Every classroom, corner, and curriculum choice at Kiddoo
                reflects our core values:{" "}
                <strong className="text-foreground">
                  Nurture. Safety. Fun.
                </strong>
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-kiddoo-yellow/20">
                <span className="text-2xl">🌿</span>
                <span className="font-bold text-sm">Nurturing</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-kiddoo-blue/20">
                <span className="text-2xl">🛡️</span>
                <span className="font-bold text-sm">Safe</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-kiddoo-pink/20">
                <span className="text-2xl">🎈</span>
                <span className="font-bold text-sm">Fun</span>
              </div>
            </div>
          </motion.div>

          {/* Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                emoji: "🎉",
                value: "Est. 2023",
                label: "Building futures since 2023",
                bg: "bg-kiddoo-yellow/25",
              },
              {
                emoji: "😊",
                value: "40+",
                label: "Happy kids who have grown with us",
                bg: "bg-kiddoo-green/25",
              },
              {
                emoji: "👩‍🏫",
                value: "5+",
                label: "Qualified, certified educators on staff",
                bg: "bg-kiddoo-purple/25",
              },
              {
                emoji: "⭐",
                value: "4.9 / 5",
                label: "Average parent satisfaction rating",
                bg: "bg-kiddoo-pink/25",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`${stat.bg} rounded-3xl p-6 shadow-playful`}
              >
                <div className="text-3xl mb-3">{stat.emoji}</div>
                <div className="font-display font-extrabold text-2xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-dots">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kiddoo-purple/20 text-kiddoo-purple font-bold text-sm mb-4">
            🎒 Our Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Programs Designed for{" "}
            <span className="text-kiddoo-purple">Every Stage</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Age-appropriate curricula that meet children where they are and
            gently guide them forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROGRAMS.map((prog, i) => (
            <motion.div
              key={prog.name}
              data-ocid={`programs.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-3xl p-8 shadow-playful border-2 ${prog.color} flex flex-col`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl">{prog.emoji}</div>
                <span
                  className={`${prog.badge} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {prog.age}
                </span>
              </div>

              <h3 className="font-display text-2xl font-extrabold text-foreground mb-3">
                {prog.name}
              </h3>
              <p className="text-foreground/60 text-sm mb-6 leading-relaxed">
                {prog.desc}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {prog.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 ${prog.iconColor}`}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                data-ocid={`programs.item.${i + 1}.secondary_button`}
                variant="outline"
                className={`rounded-2xl border-2 font-bold transition-all hover:scale-105 ${prog.iconColor} border-current hover:bg-current hover:text-white`}
              >
                <a href="#contact">Learn More →</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kiddoo-pink/20 text-kiddoo-pink font-bold text-sm mb-4">
            💡 Why Kiddoo?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            What Makes Us <span className="text-kiddoo-pink">Special</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We go beyond academics to shape well-rounded, confident young
            learners.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`${item.bg} rounded-3xl p-7 text-center`}
            >
              <div
                className={`${item.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5`}
              >
                <item.icon className="w-7 h-7" />
              </div>
              <div className="text-2xl mb-3">{item.emoji}</div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-kiddoo-yellow/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kiddoo-orange/20 text-kiddoo-orange font-bold text-sm mb-4">
            📸 Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            A Peek Into Our{" "}
            <span className="text-kiddoo-orange">Joyful World</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Every day at Kiddoo is a new adventure full of laughter, discovery,
            and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl shadow-playful"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end">
                <div className="w-full p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-display font-bold text-lg">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kiddoo-blue/20 text-kiddoo-blue font-bold text-sm mb-4">
            💬 Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Happy Parents, <span className="text-kiddoo-blue">Happy Kids</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it — hear what our Kiddoo families have
            to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className={`${t.color} rounded-3xl p-8 shadow-playful`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].slice(0, t.rating).map((n) => (
                  <Star
                    key={n}
                    className="w-4 h-4 fill-kiddoo-yellow text-kiddoo-yellow"
                  />
                ))}
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-display font-bold text-sm text-foreground">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-foreground/50 text-xs">{t.child}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!actor) {
      toast.error("Not connected. Please try again.");
      return;
    }
    setStatus("loading");
    try {
      await actor.submitContactForm(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent! We'll be in touch soon. 🎉");
    } catch {
      setStatus("error");
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dots">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-kiddoo-green/20 text-kiddoo-green font-bold text-sm mb-4">
            📩 Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Start Your Child's{" "}
            <span className="text-kiddoo-green">Journey</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Ready to give your little one the best start? Reach out — we'd love
            to meet your family!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Visit Us & Say Hello! 👋
            </h3>

            {[
              {
                icon: MapPin,
                label: "Address",
                value:
                  "Rampur Road, Todapur, Haily Mandi, Near Panchayati Dharamshala, Tehsil- Pataudi, District Gurugram, Haryana - 122504",
                color: "bg-kiddoo-pink/20 text-kiddoo-pink",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 73038 63388",
                color: "bg-kiddoo-green/20 text-kiddoo-green",
              },
              {
                icon: Mail,
                label: "Email",
                value: "hello@kiddooschool.com",
                color: "bg-kiddoo-blue/20 text-kiddoo-blue",
              },
              {
                icon: Clock,
                label: "School Hours",
                value: "Mon–Sat: 9:00 AM – 1:30 PM",
                color: "bg-kiddoo-yellow/30 text-kiddoo-orange",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className={`${item.color} w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground/50 mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-foreground font-medium">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 bg-white rounded-3xl shadow-playful">
              <p className="font-display font-bold text-foreground text-lg mb-2">
                🎓 Admissions for 2026–27
              </p>
              <p className="text-foreground/60 text-sm">
                Limited seats available. Schedule a free school tour and meet
                our wonderful teachers!
              </p>
              <div className="mt-4 flex items-center gap-2 text-kiddoo-green font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                Early bird discount available!
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-playful space-y-5"
            >
              <h3 className="font-display text-xl font-bold text-foreground">
                Send Us a Message
              </h3>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-2xl bg-kiddoo-green/20 border border-kiddoo-green/40 text-kiddoo-green font-semibold text-sm text-center"
                  >
                    🎉 Message sent successfully! We'll reach out within 24
                    hours.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    data-ocid="contact.error_state"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-2xl bg-destructive/10 border border-destructive/30 text-destructive font-semibold text-sm text-center"
                  >
                    ❌ Something went wrong. Please try again or call us
                    directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-1">
                <Label htmlFor="name" className="font-semibold text-sm">
                  Parent / Guardian Name{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  data-ocid="contact.name.input"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="rounded-xl border-2 focus:border-kiddoo-green"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="font-semibold text-sm">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-ocid="contact.email.input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="rounded-xl border-2 focus:border-kiddoo-green"
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="phone" className="font-semibold text-sm">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  data-ocid="contact.phone.input"
                  placeholder="+91 73038 63388"
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="rounded-xl border-2 focus:border-kiddoo-green"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="message" className="font-semibold text-sm">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  data-ocid="contact.message.textarea"
                  placeholder="Tell us about your child's age, questions about programs..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={4}
                  className="rounded-xl border-2 focus:border-kiddoo-green resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                data-ocid="contact.submit_button"
                disabled={status === "loading"}
                className="w-full rounded-2xl bg-kiddoo-green hover:bg-kiddoo-green/80 text-white font-bold text-base py-3 h-auto shadow-warm transition-all hover:scale-[1.02] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message 🚀"
                )}
              </Button>

              {status === "loading" && (
                <div
                  data-ocid="contact.loading_state"
                  className="text-center text-sm text-foreground/50"
                >
                  Processing your message...
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-kiddoo-yellow flex items-center justify-center">
                <Sun className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-display font-extrabold text-xl">
                Kiddoo
              </span>
              <Star className="w-4 h-4 text-kiddoo-yellow fill-kiddoo-yellow" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Where little stars shine bright. Nurturing curious, confident, and
              compassionate children since 2023.
            </p>
            <div className="flex gap-3 mt-6">
              {["🌟", "🎨", "📚", "🌱"].map((emoji) => (
                <span key={emoji} className="text-xl">
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                    className="text-white/60 hover:text-kiddoo-yellow text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-5">Contact</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-kiddoo-pink" />
                Rampur Road, Todapur, Haily Mandi, Near Panchayati Dharamshala,
                Tehsil- Pataudi, District Gurugram, Haryana - 122504
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-kiddoo-green" />
                +91 73038 63388
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-kiddoo-blue" />
                hello@kiddooschool.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0 text-kiddoo-yellow" />
                Mon–Sat: 9 AM – 1:30 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {year} Kiddoo Play School. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-kiddoo-yellow hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <WhyUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
