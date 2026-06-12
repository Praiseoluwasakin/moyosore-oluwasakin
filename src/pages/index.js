"use client";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";
import Testimonials from "@/components/testimonials";
import ScrollReveal from "@/components/scroll-reveal";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { NextSeo } from "next-seo";
import {
  Menu,
  X,
  ArrowRight,
  Send,
  Globe,
  ShoppingBag,
  Palette,
  Calculator,
  ShoppingCart,
  Smartphone,
  Zap,
  Search,
  Heart,
  Layers,
  Activity,
  Award,
  CheckCircle,
  Clock,
  ThumbsUp,
  ExternalLink,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Linkedin,
} from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

export const metadata = {
  title: "Moyosore O.F | Senior Shopify Website Designer",
  description:
    "Moyosore O.F is a professional Senior Shopify Website Designer and developer specializing in high sales conversion online stores.",
};

const featuredProjects = [
  {
    title: "Limon Healing Collection — Wellness Store",
    desc: "Shopify wellness and bodycare storefront with curated product lines, editorial storytelling, and high-converting product pages designed to build brand trust and drive sales.",
    tags: ["Shopify", "Wellness", "E-commerce", "CRO"],
    url: "https://www.limonhealingcollection.com",
    media: "/limonhealingcollection.png",
    Icon: ShoppingBag,
  },
  {
    title: "Last Aristocrat — Shopify Store",
    desc: "Premium brand Shopify storefront build with a bold editorial aesthetic, structured product catalog, and a seamless checkout experience designed for high-end clientele.",
    tags: ["Shopify", "Premium Brand", "Theme Customization"],
    url: "https://www.lastaristocrat.com",
    media: "/lastaristocrat.png",
    Icon: ShoppingBag,
  },
  {
    title: "Tile Shopper — Shopify E-commerce",
    desc: "Full Shopify store build for a tile and home improvement brand. Structured large product catalog with filterable collections, SEO-optimized product pages, and a clean conversion-focused layout.",
    tags: ["Shopify", "Home Decor", "SEO", "E-commerce"],
    url: "https://www.tileshopper.com",
    media: "/tileshopper.png",
    Icon: ShoppingBag,
  },
  {
    title: "Alexa Monroe Design — Shopify Store",
    desc: "Luxury interior design brand storefront. Crafted a high-end visual experience with curated product presentations, editorial imagery, and a refined browsing flow that reflects the brand identity.",
    tags: ["Shopify", "Luxury Brand", "Interior Design"],
    url: "https://www.alexamonroedesign.co.uk",
    media: "/alexamonroedesign.png",
    Icon: ShoppingBag,
  },
  {
    title: "Wild Birds Connection — Shopify Store",
    desc: "Niche e-commerce Shopify store for a wild bird supplies brand. Built product collections, category navigation, and a community-focused brand experience tailored to nature enthusiasts.",
    tags: ["Shopify", "Niche E-commerce", "Theme Development"],
    url: "https://www.wildbirdsconnection.com",
    media: "/wildbirdsconnection.png",
    Icon: ShoppingBag,
  },
  {
    title: "Suez ICU — Shopify Store",
    desc: "Brand Shopify storefront built with a focused product range and strong CTA architecture. Delivered a polished conversion-optimized design with a clean, professional aesthetic.",
    tags: ["Shopify", "CRO", "Theme Customization"],
    url: "https://www.suezicu.com",
    media: "/suezicu.png",
    Icon: ShoppingBag,
  },
  {
    title: "All In Lid — Shopify Store & Klaviyo",
    desc: "Full Shopify store revamp for a premium headwear brand. Custom theme in Prestige, product listings, cart upsell logic to push AOV, and a complete Klaviyo email automation workflow build — abandoned cart flows, welcome sequences, back-in-stock automations, and JudgeMe review integration.",
    tags: ["Shopify", "Prestige Theme", "Klaviyo", "CRO"],
    url: "https://allinlid.com",
    media: "/allinlid.png",
    Icon: ShoppingBag,
  },
  {
    title: "Rhema Christian Church — Website",
    desc: "Developed and maintained the full website on Shopify. Built ministry pages, Sunday Teachings weekly blogs, events registration, and counselor calendar setup. Delivered detailed theme customizations using PageFly for conversion optimization.",
    tags: ["Shopify", "PageFly", "Shopify Liquid"],
    url: "https://rhemachurchonline.org",
    media: "/rhema-website.png",
    Icon: Globe,
  },
  {
    title: "Golden Green Boutique — Fashion Store",
    desc: "Shopify boutique build using the Dawn theme. Tailored typography, Instagram feed integration, and a Klaviyo newsletter subscription system. Designed with a custom pink-and-green palette focused on high sales conversions.",
    tags: ["Shopify", "Dawn Theme", "Klaviyo", "Instagram Feed"],
    url: "https://www.shopgoldengreen.com",
    media: "/golden-green.png",
    Icon: ShoppingBag,
  },
  {
    title: "Ryuu Gear — Martial Arts Shopify Store",
    desc: "Shopify store setup for a martial arts brand. Designed the complete brand identity, logo, and integration of dropshipping products using SaleHoo. Tailored checkout flow for high conversion rate optimization.",
    tags: ["Shopify", "Dropshipping", "SaleHoo", "Logo Design"],
    url: "",
    media: null,
    Icon: ShoppingBag,
  },
  {
    title: "Ohm Med Spa — Shopify Store",
    desc: "Shopify theme custom template build and optimization using the Prestige theme. Designed pages for medical clinic services, treatment plans booking, and product e-commerce catalog structure.",
    tags: ["Shopify", "Prestige Theme", "Booking Integration"],
    url: "https://ohmmedspa.com",
    media: "/ohm-med-spa.png",
    Icon: ShoppingBag,
  },
  {
    title: "Okahisi — Fashion & T-Shirt Store",
    desc: "Modern fashion store design. Created custom font pairings, structured the product catalogs, and delivered a clean, conversion-ready e-commerce browsing and shopping cart experience.",
    tags: ["Shopify", "Fashion E-commerce", "Theme Customization"],
    url: "https://okihasi.com",
    media: "/okihasi.png",
    Icon: ShoppingBag,
  },
];

const secondaryProjects = [
  {
    title: "EcoStick Supply — Shopify Store",
    desc: "Clean, conversion-focused Shopify storefront featuring structured product collections and optimized single product pages.",
    tags: ["Shopify", "E-commerce", "CRO"],
    url: "https://ecosticksupply.com",
    media: "/ecostickssupply.png",
    Icon: ShoppingBag,
  },
  {
    title: "Dola Fashion Collection — Store Design",
    desc: "A stylized fashion e-commerce store with unique typography, tailored cart logic, and catalog layouts.",
    tags: ["Shopify", "Theme Development", "E-commerce"],
    url: "https://dolafashioncollection.com",
    media: "/dolas-fashion-collection.png",
    Icon: ShoppingBag,
  },
  {
    title: "Ruens — Shopify Store Build",
    desc: "Product pages, collection pages, and header navigation optimizations aimed to convert traffic into buyers.",
    tags: ["Shopify", "UX Design", "Checkout Optimization"],
    url: "https://ruens.co",
    media: "/ruens.png",
    Icon: ShoppingBag,
  },
  {
    title: "Greenwich Play — Shopify Store",
    desc: "Clean UI Shopify storefront build focused on image-led category navigation and product presentation.",
    tags: ["Shopify", "E-commerce", "Minimalist Design"],
    url: "https://shop.greenwichplay.com",
    media: "/greenwich-play.png",
    Icon: ShoppingBag,
  },
];

const allProjects = [...featuredProjects, ...secondaryProjects];

const skills = [
  "Shopify Store Design",
  "Shopify Theme Customization",
  "Shopify Redesign",
  "Shopify Bug Fixing",
  "Shopify Multi-Language",
  "PageFly Landing Pages",
  "Klaviyo Email Marketing",
  "Conversion Rate Optimization (CRO)",
  "Digital Marketing",
  "Copywriting",
  "Graphics Design",
  "SEO Optimization",
  "MS Excel & Word",
];

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Stateful Meet Moyo Portrait Video Component with custom controls
const MeetMoyoVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.log(err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      if (duration) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleTimelineClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const duration = videoRef.current.duration;
      if (duration) {
        videoRef.current.currentTime = (clickX / width) * duration;
      }
    }
  };

  return (
    <div className="relative group max-w-[280px] sm:max-w-[320px] mx-auto border border-architectural overflow-hidden bg-brand-navy/5 shadow-lg">
      <video
        ref={videoRef}
        src="/moyo-video-introduction.MP4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-auto aspect-[9/16] object-cover"
      />
      
      {/* Custom Minimalist HUD Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#4c4c4c]/90 via-[#4c4c4c]/40 to-transparent flex flex-col gap-2 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
        {/* Playback Timeline */}
        <div 
          onClick={handleTimelineClick}
          className="w-full h-1 bg-white/30 rounded-full cursor-pointer overflow-hidden relative"
        >
          <div 
            style={{ width: `${progress}%` }} 
            className="h-full bg-brand-accent transition-all duration-100"
          />
        </div>
        
        {/* Buttons HUD */}
        <div className="flex justify-between items-center text-white text-xs font-semibold tracking-wide">
          <button 
            type="button"
            onClick={togglePlay} 
            className="hover:text-brand-accent p-1 transition-colors flex items-center gap-1.5"
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            {isPlaying ? "PAUSE" : "PLAY"}
          </button>
          
          <span className="text-[9px] uppercase tracking-widest text-white/75">
            Meet Moyo
          </span>
          
          <button 
            type="button"
            onClick={toggleMute} 
            className="hover:text-brand-accent p-1 transition-colors flex items-center gap-1.5"
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            {isMuted ? "UNMUTE" : "MUTE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function MoyoPortfolio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [showAll, setShowAll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionsRef = useRef({});

  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 6);

  const scrollToSection = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const offset = window.innerWidth >= 768 ? 88 : 76;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => (sectionsRef.current[s.id] = s));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.25 },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <NextSeo
        title="Moyosore O.F | Senior Shopify Website Designer"
        description="Senior Shopify Website Designer with high sales conversion. 2k+ hours, Top Rated professional on Upwork."
        canonical="https://praise-oluwasakin-website.vercel.app/"
        openGraph={{
          url: "https://praise-oluwasakin-website.vercel.app/",
          title: "Moyosore O.F | Senior Shopify Website Designer",
          description:
            "Senior Shopify Website Designer and Shopify Expert. Meticulous design, correct color schemes and conversion-optimized e-commerce stores.",
          images: [
            {
              url: "https://praise-oluwasakin-website.vercel.app/Moyosore-potrait.webp",
              width: 1200,
              height: 630,
              alt: "Moyosore O.F Shopify Portfolio",
            },
          ],
          site_name: "Moyosore O.F Portfolio",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <title>Moyosore O.F | Senior Shopify Website Designer</title>
        <meta
          name="description"
          content="Senior Shopify Website Designer with high sales conversion. 2k+ hours, Top Rated professional on Upwork."
        />
      </Head>

      <div className="min-h-screen bg-brand-bg font-body text-brand-navy selection:bg-brand-navy selection:text-brand-bg flex flex-col">
        <Analytics />

        {/* Header */}
        <header
          className={`site-header fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-architectural ${
            scrolled ? "scrolled" : ""
          }`}
        >
          <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-[1280px] mx-auto">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="flex items-center gap-2.5 font-display text-lg md:text-xl font-bold text-brand-navy tracking-tight transition-opacity hover:opacity-80"
            >
              <img
                src="/moyo-favicon-and-logo.png"
                alt="Moyo Logo"
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
              />
              <span>Moyosore O.F</span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => scrollToSection(e, n.id)}
                  className={`font-body text-xs xl:text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    active === n.id
                      ? "text-brand-navy border-b-2 border-brand-accent pb-1"
                      : "text-brand-text-dim hover:text-brand-navy"
                  }`}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="px-5 py-2 bg-cta text-[#85c7f2] font-body text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300"
              >
                Get In Touch
              </a>
            </nav>

            <button
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
              className="lg:hidden text-brand-navy p-2 transition-transform duration-300 active:scale-95"
            >
              <span className={`inline-block transition-transform duration-300 ${mobileOpen ? "rotate-90" : "rotate-0"}`}>
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </span>
            </button>
          </div>

          {/* Mobile Panel */}
          <div className={`mobile-nav-panel lg:hidden border-t border-architectural ${mobileOpen ? "open" : ""}`}>
            <div className="mobile-nav-inner px-5 pb-4 bg-brand-bg">
              <div className="flex flex-col gap-1 pt-2">
                {navItems.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    onClick={(e) => scrollToSection(e, n.id)}
                    className={`mobile-nav-link px-3 py-3 font-body text-sm font-semibold rounded-sm ${
                      active === n.id ? "text-brand-navy bg-brand-navy/5" : "text-brand-text-dim hover:text-brand-navy"
                    }`}
                  >
                    {n.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="mobile-nav-link mt-2 px-6 py-3 bg-cta text-[#85c7f2] font-body text-xs font-bold uppercase tracking-wider text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-16 max-w-[1280px] mx-auto w-full">
          {/* Hero */}
          <section id="about" className="mb-20 md:mb-32">
            <ScrollReveal>
              <div className="fixed-grid items-center">
                <div className="col-span-4 md:col-span-7">
                  <h1 className="font-display text-[32px] sm:text-[44px] md:text-[64px] font-extrabold text-brand-navy mb-6 md:mb-8 border-b border-architectural pb-6 md:pb-8 leading-[1.15] tracking-tight">
                    Senior Shopify Website Designer with High Sales Conversion.
                  </h1>
                  <p className="font-body text-base md:text-lg text-brand-text-dim max-w-2xl leading-relaxed mb-8">
                    Transforming brand objectives into exceptional, conversion-optimized, and visually stunning e-commerce stores. I build standard, premium Shopify storefronts that drive credibility and sales.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://www.upwork.com/freelancers/~01e48c9f09f436ce0e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cta text-[#85c7f2] px-6 py-3 font-body text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all duration-300 hover:translate-y-[-1px]"
                    >
                      <SiUpwork className="w-4 h-4" />
                      Hire on Upwork
                    </a>
                    <a
                      href="https://wa.me/2347048847485"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-brand-navy px-6 py-3 font-body text-xs font-bold uppercase tracking-wider text-brand-navy hover:bg-brand-navy hover:text-[#85c7f2] transition-all duration-300"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Let&apos;s Chat
                    </a>
                  </div>
                </div>

                {/* About Profile Card */}
                <div className="col-span-4 md:col-span-5 mt-8 md:mt-0">
                  <div className="border border-architectural p-5 bg-white/40 shadow-sm relative">
                    <div className="overflow-hidden border border-architectural mb-5">
                      <img
                        src="/Moyosore-potrait.webp"
                        alt="Moyosore O.F"
                        className="w-full h-auto object-cover object-top aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <h2 className="font-display text-xl font-bold text-brand-navy mb-1.5">
                      Moyosore O.F
                    </h2>
                    <p className="font-body text-xs text-brand-text-dim uppercase tracking-wider font-semibold">
                      Shopify Professional Designer &amp; Builder
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Upwork Professional Badges & Stats */}
          <section className="mb-20 md:mb-32 border-y border-architectural py-8 md:py-12 bg-white/20">
            <ScrollReveal delay={80}>
              <div className="fixed-grid text-center md:text-left">
                <div className="col-span-2 md:col-span-3 border-r border-architectural pr-4 flex flex-col justify-center">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-brand-navy mb-1">
                    <Award className="w-5 h-5 text-brand-navy" />
                    <span className="font-body text-xs font-bold uppercase tracking-wider">Upwork Stats</span>
                  </div>
                  <p className="font-display text-[26px] md:text-[32px] font-extrabold text-brand-navy leading-none">
                    Top Rated
                  </p>
                  <p className="font-body text-xs text-brand-text-dim mt-1.5">
                    Professional Badge
                  </p>
                </div>
                <div className="col-span-2 md:col-span-3 border-r border-architectural px-4 flex flex-col justify-center mt-6 md:mt-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-brand-navy mb-1">
                    <Clock className="w-5 h-5 text-brand-navy" />
                    <span className="font-body text-xs font-bold uppercase tracking-wider">Upwork Hours</span>
                  </div>
                  <p className="font-display text-[26px] md:text-[32px] font-extrabold text-brand-navy leading-none">
                    2,000+
                  </p>
                  <p className="font-body text-xs text-brand-text-dim mt-1.5">
                    Hours Documented
                  </p>
                </div>
                <div className="col-span-2 md:col-span-3 border-r border-architectural px-4 flex flex-col justify-center mt-6 md:mt-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-brand-navy mb-1">
                    <ThumbsUp className="w-5 h-5 text-brand-navy" />
                    <span className="font-body text-xs font-bold uppercase tracking-wider">Availability</span>
                  </div>
                  <p className="font-display text-[26px] md:text-[32px] font-extrabold text-brand-navy leading-none">
                    18h / Day
                  </p>
                  <p className="font-body text-xs text-brand-text-dim mt-1.5">
                    Fast Response (&lt; 2h)
                  </p>
                </div>
                <div className="col-span-2 md:col-span-3 pl-4 flex flex-col justify-center mt-6 md:mt-0">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-brand-navy mb-1">
                    <CheckCircle className="w-5 h-5 text-brand-navy" />
                    <span className="font-body text-xs font-bold uppercase tracking-wider">Dedication</span>
                  </div>
                  <p className="font-display text-[26px] md:text-[32px] font-extrabold text-brand-navy leading-none">
                    100%
                  </p>
                  <p className="font-body text-xs text-brand-text-dim mt-1.5">
                    Unlimited Revisions
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Biography & Meet Moyo Video */}
          <section className="mb-20 md:mb-32">
            <ScrollReveal delay={100}>
              <div className="fixed-grid items-start">
                <div className="col-span-4 md:col-span-6 pr-0 md:pr-8">
                  <h2 className="font-display text-2xl md:text-[36px] font-bold text-brand-navy mb-6 tracking-tight">
                    Professional Biography
                  </h2>
                  <p className="font-body text-sm md:text-base text-brand-navy leading-relaxed mb-6">
                    As a Shopify expert and store builder with unbeatable skills in the field, I design standard and top-notch Shopify stores that build your brand credibility and turn your products into a world top-class business.
                  </p>
                  <p className="font-body text-sm md:text-base text-brand-navy leading-relaxed mb-6">
                    I collaborate closely with diverse clients to effectively transform objectives into conversion-optimized, visually stunning online storefronts. Unfortunately, over 90% of Shopify stores fail due to poorly constructed layouts, incorrect color schemes, or weak, unimpressive calls-to-action (CTAs). I am meticulous in my approach, taking all of these factors into account to provide you with the most outstanding Shopify design possible.
                  </p>
                  
                  {/* Hiring Promises */}
                  <h3 className="font-display text-lg font-bold text-brand-navy mt-8 mb-4">
                    Upon hiring me, you will receive:
                  </h3>
                  <ul className="space-y-3 font-body text-xs md:text-sm text-brand-navy">
                    <li className="flex items-start gap-2">
                      <span className="text-[#85c7f2] font-semibold mt-0.5">✓</span>
                      <span><strong>5+ Years Experience</strong> in e-commerce and Shopify store setups.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#85c7f2] font-semibold mt-0.5">✓</span>
                      <span><strong>Vast Experience in Copywriting</strong> that converts visitors into buyers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#85c7f2] font-semibold mt-0.5">✓</span>
                      <span><strong>In-depth Knowledge of SEO</strong> to rank high and capture search intent.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#85c7f2] font-semibold mt-0.5">✓</span>
                      <span><strong>Complete Branded Assets</strong> including landing pages and payment integrations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#85c7f2] font-semibold mt-0.5">✓</span>
                      <span><strong>100% Customer Satisfaction</strong> backed by unlimited revisions.</span>
                    </li>
                  </ul>
                </div>

                {/* Custom Video Portrait Section */}
                <div className="col-span-4 md:col-span-6 mt-12 md:mt-0 flex flex-col items-center">
                  <div className="w-full text-center mb-6">
                    <h2 className="font-display text-2xl md:text-[36px] font-bold text-brand-navy mb-2 tracking-tight">
                      Meet Moyo
                    </h2>
                    <p className="font-body text-xs md:text-sm text-brand-text-dim max-w-sm mx-auto">
                      Watch my introductory video to learn more about my Shopify design methodology.
                    </p>
                  </div>
                  <MeetMoyoVideo />
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Services Section */}
          <section id="services" className="mb-20 md:mb-32 border-t border-architectural pt-12">
            <ScrollReveal delay={100}>
              <div className="fixed-grid">
                <div className="col-span-4 md:col-span-4">
                  <h2 className="font-display text-2xl md:text-[36px] font-bold text-brand-navy mb-4 tracking-tight">
                    Services
                  </h2>
                  <p className="font-body text-xs text-brand-text-dim uppercase tracking-wider mb-6 font-semibold">
                    Tailored Shopify Solutions
                  </p>
                  <p className="font-body text-sm text-brand-navy/80 leading-relaxed mb-6">
                    I treat every Shopify store design as a conversion engine. By optimizing color palettes, typography hierarchy, cart upsell triggers, and mobile layout layouts, I help store owners generate high conversion rates.
                  </p>
                </div>
                <div className="col-span-4 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border border-architectural p-6 bg-white/20 hover:bg-brand-navy hover:text-white transition-all duration-300 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-brand-navy group-hover:border-white mb-4 transition-colors">
                      <ShoppingBag className="w-5 h-5 text-brand-navy group-hover:text-brand-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      One Product Store Design
                    </h3>
                    <p className="font-body text-xs md:text-sm leading-relaxed opacity-90">
                      Crafting highly immersive landing pages focused around a single hero product, structured to maximize average order value (AOV) and direct conversions.
                    </p>
                  </div>

                  <div className="border border-architectural p-6 bg-white/20 hover:bg-brand-navy hover:text-white transition-all duration-300 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-brand-navy group-hover:border-white mb-4 transition-colors">
                      <Zap className="w-5 h-5 text-brand-navy group-hover:text-brand-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      Dropshipping Stores &amp; POD
                    </h3>
                    <p className="font-body text-xs md:text-sm leading-relaxed opacity-90">
                      Establishing fast-loading dropshipping storefronts (using SaleHoo or other platforms) and Print-on-Demand (POD) setups integrated with automatic supplier synchronization.
                    </p>
                  </div>

                  <div className="border border-architectural p-6 bg-white/20 hover:bg-brand-navy hover:text-white transition-all duration-300 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-brand-navy group-hover:border-white mb-4 transition-colors">
                      <Layers className="w-5 h-5 text-brand-navy group-hover:text-brand-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      Store Redesign &amp; CRO
                    </h3>
                    <p className="font-body text-xs md:text-sm leading-relaxed opacity-90">
                      Revamping outdated layouts, optimizing bad typography, correcting wrong color schemes, and upgrading underperforming CTAs to drastically improve checkout rates.
                    </p>
                  </div>

                  <div className="border border-architectural p-6 bg-white/20 hover:bg-brand-navy hover:text-white transition-all duration-300 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-brand-navy group-hover:border-white mb-4 transition-colors">
                      <Activity className="w-5 h-5 text-brand-navy group-hover:text-brand-accent" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">
                      Bug Fixing &amp; Custom Coding
                    </h3>
                    <p className="font-body text-xs md:text-sm leading-relaxed opacity-90">
                      Solving layout spacing inconsistencies, resolving theme liquid issues, debugging slow performance, and building responsive checkout elements.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Technical Skills & Repertoire */}
          <section id="skills" className="mb-20 md:mb-32 border border-architectural p-6 md:p-12 bg-white/10">
            <ScrollReveal delay={80}>
              <div className="fixed-grid items-start">
                <div className="col-span-4 md:col-span-4">
                  <h2 className="font-display text-xl md:text-[30px] font-bold text-brand-navy mb-4">
                    Skills &amp; Knowledge
                  </h2>
                  <p className="font-body text-xs text-brand-text-dim uppercase tracking-wider mb-6 font-semibold">
                    Core Technical Toolbox
                  </p>
                </div>
                <div className="col-span-4 md:col-span-8">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-architectural px-3.5 py-1.5 font-body text-xs uppercase tracking-wider bg-white/30 text-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Education & Language Qualifications */}
          <section className="mb-20 md:mb-32 border-b border-architectural pb-12">
            <ScrollReveal delay={100}>
              <div className="fixed-grid">
                <div className="col-span-4 md:col-span-6 pr-0 md:pr-8">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-brand-navy mb-6">
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-brand-accent pl-4">
                      <h4 className="font-display font-semibold text-sm md:text-base">
                        Obafemi Awolowo University
                      </h4>
                      <p className="font-body text-xs text-brand-text-dim uppercase tracking-wider mt-1">
                        Bachelor of Applied Science (BASc), Quantity Surveying · 2016-2022
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-6 mt-8 md:mt-0">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-brand-navy mb-6">
                    Qualifications &amp; Languages
                  </h3>
                  <div className="space-y-4 font-body text-sm text-brand-navy">
                    <div>
                      <p className="text-xs text-brand-text-dim uppercase tracking-wider mb-1 font-semibold">
                        Verifications
                      </p>
                      <span className="inline-flex items-center gap-1.5 bg-[#85c7f2]/20 text-brand-navy px-3 py-1 rounded-full text-xs font-semibold">
                        ✓ ID Verified Upwork Talent
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-brand-text-dim uppercase tracking-wider mb-1.5 font-semibold">
                        Languages
                      </p>
                      <ul className="space-y-1 text-xs md:text-sm">
                        <li><strong>English</strong>: Native or Bilingual</li>
                        <li><strong>French</strong>: Basic</li>
                        <li><strong>Spanish</strong>: Basic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Selected Projects */}
          <section id="work" className="mb-20 md:mb-32">
            <ScrollReveal delay={100}>
              <div className="flex justify-between items-end mb-8 md:mb-12 border-b border-architectural pb-4 gap-3">
                <h2 className="font-display text-2xl md:text-[36px] font-bold text-brand-navy tracking-tight">
                  Selected E-Commerce Works
                </h2>
                {allProjects.length > 6 && (
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="font-body text-[10px] md:text-xs text-brand-navy hover:text-brand-accent uppercase tracking-wider font-bold border-b border-transparent hover:border-brand-accent transition-colors shrink-0"
                  >
                    {showAll ? "Show Less" : `View All ${allProjects.length}`}
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projectsToShow.map((p) => (
                  <article
                    key={p.title}
                    className="border border-architectural flex flex-col group cursor-pointer bg-white/20"
                    onClick={() => p.url && window.open(p.url, "_blank")}
                    onKeyDown={(e) => p.url && e.key === "Enter" && window.open(p.url, "_blank")}
                    role={p.url ? "link" : "article"}
                    tabIndex={p.url ? 0 : undefined}
                  >
                    <div className="h-44 sm:h-52 md:h-64 bg-brand-navy/5 relative overflow-hidden border-b border-architectural">
                      {p.media ? (
                        <img
                          src={p.media}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = "none";
                            e.target.parentElement.querySelector(".fallback-icon")?.classList.remove("hidden");
                          }}
                        />
                      ) : null}
                      <div className={`fallback-icon absolute inset-0 flex items-center justify-center bg-brand-navy/10 ${p.media ? "hidden" : ""}`}>
                        <p.Icon className="w-10 h-10 text-brand-navy/40" />
                      </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col justify-between hover:bg-brand-navy hover:text-white transition-colors duration-300">
                      <div>
                        <h3 className="font-display text-base md:text-lg font-bold mb-2">
                          {p.title}
                        </h3>
                        <p className="font-body text-xs md:text-sm opacity-90 leading-relaxed line-clamp-3">
                          {p.desc}
                        </p>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[9px] uppercase tracking-wider border border-current px-2 py-0.5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </section>

          {/* Testimonial slider component */}
          <ScrollReveal delay={120}>
            <Testimonials />
          </ScrollReveal>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <ScrollReveal delay={80}>
              <div className="fixed-grid border border-architectural bg-white/10">
                {/* Contact HUD Info */}
                <div className="col-span-4 md:col-span-5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-architectural bg-brand-navy text-white">
                  <h2 className="font-display text-[28px] md:text-[32px] font-bold mb-6 tracking-tight">
                    Initiate Project
                  </h2>
                  <p className="font-body text-sm mb-12 text-white/80 leading-relaxed">
                    Available for top-tier Shopify design consulting, complete Dropshipping custom designs, PageFly landing pages, or troubleshooting existing theme templates.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="font-body text-[10px] text-brand-accent uppercase mb-1 tracking-wider font-bold">
                        Upwork (Preferred)
                      </p>
                      <a
                        className="font-body text-sm hover:text-brand-accent transition-colors inline-flex items-center gap-1.5"
                        href="https://www.upwork.com/freelancers/~01e48c9f09f436ce0e"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Profile <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-brand-accent uppercase mb-1 tracking-wider font-bold">
                        LinkedIn
                      </p>
                      <a
                        className="font-body text-sm hover:text-brand-accent transition-colors inline-flex items-center gap-1.5"
                        href="https://www.linkedin.com/in/moyosore-oluwasakin-11a96330b"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect on LinkedIn <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-brand-accent uppercase mb-1 tracking-wider font-bold">
                        WhatsApp Call / Chat
                      </p>
                      <a
                        className="font-body text-sm hover:text-brand-accent transition-colors"
                        href="https://wa.me/2347048847485"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +234 704 884 7485
                      </a>
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-brand-accent uppercase mb-1 tracking-wider font-bold">
                        iMessage / Call
                      </p>
                      <a className="font-body text-sm hover:text-brand-accent transition-colors" href="tel:07048847485">
                        0704 884 7485
                      </a>
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-brand-accent uppercase mb-1 tracking-wider font-bold">
                        Email Address
                      </p>
                      <a className="font-body text-sm hover:text-brand-accent transition-colors" href="mailto:praiseoluwasakin@gmail.com">
                        praiseoluwasakin@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Formspree contact form */}
                <div className="col-span-4 md:col-span-7 p-8 md:p-12 bg-white/20">
                  <form
                    action="https://formspree.io/f/xaqzpabv"
                    method="POST"
                    className="space-y-8"
                  >
                    <input
                      type="hidden"
                      name="_next"
                      value="https://praise-oluwasakin-website.vercel.app/thanks"
                    />
                    <div>
                      <label
                        className="block font-body text-xs text-brand-navy uppercase mb-2 tracking-wider font-semibold"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-architectural py-2 font-body text-sm text-brand-navy transition-colors placeholder-brand-navy/40"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block font-body text-xs text-brand-navy uppercase mb-2 tracking-wider font-semibold"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-architectural py-2 font-body text-sm text-brand-navy transition-colors placeholder-brand-navy/40"
                        id="email"
                        name="email"
                        placeholder="jane@example.com"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block font-body text-xs text-brand-navy uppercase mb-2 tracking-wider font-semibold"
                        htmlFor="message"
                      >
                        Shopify Project Details
                      </label>
                      <textarea
                        className="w-full bg-transparent border-b border-architectural py-2 font-body text-sm text-brand-navy transition-colors resize-none placeholder-brand-navy/40"
                        id="message"
                        name="message"
                        placeholder="Describe your Shopify store needs or bug fixes..."
                        rows="4"
                        required
                      />
                    </div>
                    <button
                      className="bg-cta text-[#85c7f2] font-body text-xs font-bold uppercase tracking-wider px-8 py-4 w-full md:w-auto hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      type="submit"
                    >
                      Submit Inquiry
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-architectural bg-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-16 py-16 max-w-[1280px] mx-auto">
            <div>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="flex items-center gap-2.5 font-display text-xl font-bold text-brand-navy mb-4 transition-opacity hover:opacity-80"
              >
                <img
                  src="/moyo-favicon-and-logo.png"
                  alt="Moyo Logo"
                  className="w-7 h-7 object-contain"
                />
                <span>Moyosore O.F</span>
              </a>
              <p className="font-body text-xs text-brand-text-dim mb-2">
                © {new Date().getFullYear()} Moyosore O.F. All rights reserved.
              </p>
              <p className="font-body text-[10px] text-brand-text-dim uppercase tracking-wider font-semibold">
                Shopify professional website designer
              </p>
              <div className="mt-4 pt-4 border-t border-architectural/50">
                <span className="font-body text-xs text-brand-text-dim">
                  made by{" "}
                  <a
                    href="https://praise-oluwasakin-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-navy hover:text-brand-accent underline underline-offset-2"
                  >
                    Praise Oluwasakin
                  </a>
                </span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2.5">
              <span className="font-body text-xs text-brand-navy uppercase tracking-wider mb-2 font-bold">
                Navigation
              </span>
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => scrollToSection(e, n.id)}
                  className="font-body text-xs text-brand-text-dim hover:text-brand-navy hover:underline decoration-1 underline-offset-4 w-fit"
                >
                  {n.label}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-2.5">
              <span className="font-body text-xs text-brand-navy uppercase tracking-wider mb-2 font-bold">
                Connect
              </span>
              <div className="flex flex-wrap gap-2 max-w-[280px]">
                <a
                  className="w-10 h-10 flex items-center justify-center border border-architectural text-brand-navy hover:bg-brand-navy hover:text-[#85c7f2] transition-all duration-200"
                  href="https://www.upwork.com/freelancers/~01e48c9f09f436ce0e"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Upwork"
                  aria-label="Upwork"
                >
                  <SiUpwork className="w-5 h-5" />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center border border-architectural text-brand-navy hover:bg-brand-navy hover:text-[#85c7f2] transition-all duration-200"
                  href="https://www.linkedin.com/in/moyosore-oluwasakin-11a96330b"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center border border-architectural text-brand-navy hover:bg-brand-navy hover:text-[#85c7f2] transition-all duration-200"
                  href="https://www.instagram.com/ijobamoyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center border border-architectural text-brand-navy hover:bg-brand-navy hover:text-[#85c7f2] transition-all duration-200"
                  href="https://www.tiktok.com/@oluwangh44g?_r=1&_t=ZS-9796pf9bys8"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="TikTok"
                  aria-label="TikTok"
                >
                  <FaTiktok className="w-4 h-4" />
                </a>
                <a
                  className="w-10 h-10 flex items-center justify-center border border-architectural text-brand-navy hover:bg-brand-navy hover:text-[#85c7f2] transition-all duration-200"
                  href="https://wa.me/2347048847485"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
