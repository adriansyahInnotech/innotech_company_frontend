import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Reading this as: B2B company profile for enterprise/government buyers, with a serious tech-premium language, leaning toward Tailwind + motion + editorial split layouts.
// Dials: VARIANCE 7 / MOTION 5 / DENSITY 4

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [activeProduct, setActiveProduct] = useState(null);
  const isModalOpen = !!activeProduct;

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveProduct(null);
    };
    if (isModalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen]);

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
      {/* NAV — single line, 64-72px */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="PT Innotech" className="w-8 h-8 object-contain" />
            <span className="text-[13px] font-semibold tracking-[-0.02em]">PT INNOTECH PRIMA DIGITAL</span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-zinc-600">
            <a href="#products" className="hover:text-zinc-900 transition-colors">Products</a>
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-zinc-900 text-white text-[13px] font-medium hover:bg-zinc-800 active:scale-[0.98] transition-all"
          >
            Talk to us
          </a>
          <a href="#contact" className="md:hidden text-[13px] font-medium px-4 py-2 rounded-full bg-zinc-900 text-white">Contact</a>
        </div>
      </nav>

      {/* HERO — Asymmetric Split, not centered mesh (visual removed, so single column copy) */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
          {/* Left — copy (now centered) */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              System Integration · Since 2018
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-5 text-[40px] lg:text-[64px] font-semibold tracking-[-0.04em] leading-[0.9] text-zinc-900"
            >
              Software that
              <br />
              <span className="font-light italic leading-[1.1] pb-1">moves</span> enterprise
              <br />
              forward.
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-6 text-[17px] leading-relaxed text-zinc-600 max-w-[52ch] mx-auto text-center text-balance">
              We build enterprise web, mobile and integrated systems for government and private sector, from digital transformation to mission-critical operations.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#products" className="inline-flex h-11 px-7 items-center justify-center rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-black active:scale-[0.98] transition-all">
                Explore products
              </a>
              <a href="#services" className="inline-flex h-11 px-7 items-center justify-center rounded-full border border-zinc-300 bg-white text-sm font-medium hover:border-zinc-900 hover:text-zinc-900 active:scale-[0.98] transition-all">
                Our services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS — above Services as requested, sebelah kiri nama product, klik -> modal HTML */}
      <section id="products" className="py-16 lg:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[11px] tracking-[0.18em] uppercase font-medium text-zinc-500">Products</div>
              <h2 className="mt-3 text-[32px] lg:text-[42px] font-semibold tracking-[-0.03em] leading-none">Built for the field</h2>
              <p className="mt-3 text-zinc-600 max-w-[58ch]">Hardware-software integrated solutions tested for industrial environments. Click to view full specification.</p>
            </div>
            <div className="text-sm text-zinc-500">3 products · Click card to view datasheet</div>
          </div>

          {/* Product Card — left: name + info, right: 2 images */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setActiveProduct('s116')}
            className="group relative cursor-pointer rounded-[28px] border border-zinc-200 bg-zinc-50 overflow-hidden hover:border-zinc-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all"
          >
            <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-0">
              {/* Left — product identity (sebelah kiri) */}
              <div className="p-7 lg:p-10 flex flex-col">
                <div className="inline-flex self-start items-center gap-2 rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase font-medium text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In stock · S116
                </div>
                <h3 className="mt-5 text-[28px] lg:text-[34px] font-semibold tracking-[-0.03em] leading-[0.95]">EFIS Portable<br />Touch Screen</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 max-w-[40ch]">
                  Portable touch display engineered for avionics and industrial control. Sunlight-readable, rugged enclosure, capacitive multi-touch.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">10.1" IPS</span>
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">IP54</span>
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">Capacitive</span>
                  <span className="inline-flex items-center rounded-full bg-zinc-900 text-white px-3 py-1.5 text-xs font-medium">View datasheet →</span>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-3 text-sm">
                  <span className="inline-flex h-9 px-5 items-center justify-center rounded-full bg-zinc-900 text-white font-medium group-hover:bg-black transition-colors">Lihat spesifikasi</span>
                  <span className="text-zinc-500 hidden sm:inline">Klik untuk buka dokumen lengkap</span>
                </div>
              </div>

              {/* Right — two images */}
              <div className="relative bg-white lg:border-l border-zinc-200 p-4 lg:p-6">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 aspect-[4/5] lg:aspect-auto">
                    <img
                      src="/WhatsApp%20Image%202026-09-16%20at%2019.54.07.jpeg"
                      alt="EFIS Portable Screen front view"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/90 backdrop-blur border border-white/40 px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-medium">Front</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-900 text-white">S116-A</span>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 aspect-[4/5] lg:aspect-auto">
                    <img
                      src="/WhatsApp%20Image%202026-09-16%20at%2019.54.08.jpeg"
                      alt="EFIS Portable Screen side view"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/90 backdrop-blur border border-white/40 px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-medium">Side</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white border border-zinc-200">S116-B</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full bg-zinc-900 text-white grid place-items-center group-hover:scale-110 transition-transform">
                  <span className="text-sm">↗</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setActiveProduct('p9')}
            className="group relative cursor-pointer rounded-[28px] border border-zinc-200 bg-white overflow-hidden hover:border-zinc-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all mt-6"
          >
            <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-0">
              {/* Left — product identity */}
              <div className="p-7 lg:p-10 flex flex-col">
                <div className="inline-flex self-start items-center gap-2 rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase font-medium text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In stock · P9
                </div>
                <h3 className="mt-5 text-[28px] lg:text-[34px] font-semibold tracking-[-0.03em] leading-[0.95]">
                  Efis Telpo
                  <br />
                  P9
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 max-w-[40ch]">
                  Smart payment POS with Android OS, high-speed thermal printing and secure transaction module. Built for retail, field collection and enterprise mobility.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">Android</span>
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">Thermal Printer</span>
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">4G · NFC</span>
                  <span className="inline-flex items-center rounded-full bg-zinc-900 text-white px-3 py-1.5 text-xs font-medium">View datasheet →</span>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-3 text-sm">
                  <span className="inline-flex h-9 px-5 items-center justify-center rounded-full bg-zinc-900 text-white font-medium group-hover:bg-black transition-colors">Lihat spesifikasi</span>
                  <span className="text-zinc-500 hidden sm:inline">Klik untuk buka dokumen lengkap</span>
                </div>
              </div>

              {/* Right — single image full */}
              <div className="relative bg-zinc-50 lg:border-l border-zinc-200 p-4 lg:p-6">
                <div className="grid grid-cols-1 gap-4 h-full">
                  <div className="relative rounded-2xl overflow-hidden bg-white border border-zinc-200 aspect-[5/6] lg:aspect-auto lg:h-full">
                    <img
                      src="/WhatsApp%20Image%202026-09-16%20at%2019.54.06.jpeg"
                      alt="Efis Telpo P9 front view"
                      className="w-full h-full object-contain p-3 group-hover:scale-[1.02] transition-transform duration-700"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/90 backdrop-blur border border-white/40 px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-medium">Telpo P9</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-900 text-white">P9</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full bg-zinc-900 text-white grid place-items-center group-hover:scale-110 transition-transform">
                  <span className="text-sm">↗</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Card TPS360 */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onClick={() => setActiveProduct('tps360')}
            className="group relative cursor-pointer rounded-[28px] border border-zinc-200 bg-zinc-50 overflow-hidden hover:border-zinc-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all mt-6"
          >
            <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-0">
              {/* Left — product identity */}
              <div className="p-7 lg:p-10 flex flex-col">
                <div className="inline-flex self-start items-center gap-2 rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase font-medium text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In stock · TPS360
                </div>
                <h3 className="mt-5 text-[28px] lg:text-[34px] font-semibold tracking-[-0.03em] leading-[0.95]">
                  TPS360
                  <br />
                  Palm
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-600 max-w-[40ch]">
                  Compact palm-sized biometric terminal with fingerprint and card verification. Designed for secure field authentication and identity programs.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">Fingerprint</span>
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">Contactless Card</span>
                  <span className="inline-flex items-center rounded-full bg-white border border-zinc-200 px-3 py-1.5 text-xs font-medium">Pocket-sized</span>
                  <span className="inline-flex items-center rounded-full bg-zinc-900 text-white px-3 py-1.5 text-xs font-medium">View datasheet →</span>
                </div>

                <div className="mt-auto pt-8 flex items-center gap-3 text-sm">
                  <span className="inline-flex h-9 px-5 items-center justify-center rounded-full bg-zinc-900 text-white font-medium group-hover:bg-black transition-colors">Lihat spesifikasi</span>
                  <span className="text-zinc-500 hidden sm:inline">Klik untuk buka dokumen lengkap</span>
                </div>
              </div>

              {/* Right — single image full */}
              <div className="relative bg-white lg:border-l border-zinc-200 p-4 lg:p-6">
                <div className="grid grid-cols-1 gap-4 h-full">
                  <div className="relative rounded-2xl overflow-hidden bg-white border border-zinc-200 aspect-[2/3] lg:aspect-auto lg:h-full">
                    <img
                      src="/tps360.png"
                      alt="TPS360 Palm terminal"
                      className="w-full h-full object-contain p-3 group-hover:scale-[1.02] transition-transform duration-700"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/90 backdrop-blur border border-white/40 px-2.5 py-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-medium">TPS360 Palm</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-900 text-white">TPS360</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 rounded-full bg-zinc-900 text-white grid place-items-center group-hover:scale-110 transition-transform">
                  <span className="text-sm">↗</span>
                </div>
              </div>
            </div>
          </motion.div>

          <p className="mt-4 text-center text-xs text-zinc-500">Tip: klik kartu di atas untuk membuka datasheet lengkap</p>
        </div>
      </section>

      {/* SERVICES — Bento, not 3 equal cards */}
      <section id="services" className="py-16 lg:py-24 bg-[#f6f6f7] border-y border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-[32px] lg:text-[42px] font-semibold tracking-[-0.03em] leading-none">Our Services</h2>
            <p className="mt-3 text-zinc-600">End-to-end delivery from product design to deployment and long-term operation.</p>
          </div>

          <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-5 lg:gap-6">
            {/* Featured large */}
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-[24px] overflow-hidden bg-white border border-zinc-200 flex flex-col">
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">Custom Software Development</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">Enterprise web, mobile and desktop applications tailored to your operational needs. Clean architecture, maintainable codebase, production-ready.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1.5 rounded-full bg-zinc-900 text-white">Web · Mobile · Desktop</span>
                  <span className="text-xs px-2.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50">API · PWA · Offline-ready</span>
                </div>
              </div>
            </motion.div>

            {/* Stack of two (now only one card after removal of IT Consulting) */}
            <div className="grid gap-5 lg:gap-6">
              <Card className="rounded-[24px] border-zinc-200 shadow-none overflow-hidden">
                <CardContent className="p-6 lg:p-7">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white grid place-items-center text-sm">◈</div>
                  <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.02em]">System Integration</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">Connecting disparate platforms, PLCs, sensors and cloud services into a single coherent operation.</p>
                  <div className="mt-4 h-px bg-zinc-100" />
                  <div className="mt-3 text-xs text-zinc-500">ERP · SCADA · IoT · Legacy bridges</div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — editorial split, not centered on image (left column removed, so single column) */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Left column (REMOVED PER REQUEST) */}

          <div className="space-y-8 lg:pt-8">
            <p className="text-[17px] leading-relaxed text-zinc-700 max-w-[60ch]">
              PT Innotech Prima Digital is driven by a passion for innovation and delivering impactful software solutions. Our team of experienced engineers and consultants builds systems that empower businesses and institutions to succeed in the digital era.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-zinc-200 p-5 bg-zinc-50">
                <div className="text-sm font-semibold">How we work</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  <li className="flex gap-2"><span className="text-zinc-400">—</span> Discovery and field mapping first</li>
                  <li className="flex gap-2"><span className="text-zinc-400">—</span> Prototype, test, iterate in situ</li>
                  <li className="flex gap-2"><span className="text-zinc-400">—</span> Ship with docs, training, handover</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-5 bg-white">
                <div className="text-sm font-semibold">What you get</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  <li className="flex gap-2"><span className="text-zinc-400">—</span> Production-hardened code</li>
                  <li className="flex gap-2"><span className="text-zinc-400">—</span> Clear ownership and SLAs</li>
                  <li className="flex gap-2"><span className="text-zinc-400">—</span> Long-term maintenance</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 border-t border-zinc-200">
              <div>
                <div className="text-2xl font-semibold tracking-tight">50+</div>
                <div className="text-xs text-zinc-500">Projects shipped</div>
              </div>
              <div className="h-10 w-px bg-zinc-200" />
              <div>
                <div className="text-2xl font-semibold tracking-tight">98%</div>
                <div className="text-xs text-zinc-500">Client retention</div>
              </div>
              <div className="h-10 w-px bg-zinc-200 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-2xl font-semibold tracking-tight">2018-</div>
                <div className="text-xs text-zinc-500">Operating since</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — split, high contrast form */}
      <section id="contact" className="py-16 lg:py-20 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[30px] lg:text-[40px] font-semibold tracking-[-0.03em] leading-none">Contact Us</h2>
            <p className="mt-3 text-zinc-400 text-[15px] leading-relaxed text-balance">Tell us about your system, integration need, or transformation plan. We reply within one business day.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left">
              <div className="w-9 h-9 shrink-0 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-sm">✉</div>
              <div>
                <div className="text-sm font-medium">admin@innotechprima.com</div>
                <div className="text-xs text-zinc-400 mt-1">For project inquiries</div>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left">
              <div className="w-9 h-9 shrink-0 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-sm">◍</div>
              <div>
                <div className="text-sm font-medium">Jakarta, Indonesia</div>
                <div className="text-xs text-zinc-400 mt-1">On-site and remote deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-500 bg-white border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} PT Innotech Prima Digital. All rights reserved.</span>
          <span className="text-zinc-400">Built for enterprise reliability</span>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm" onClick={() => setActiveProduct(null)} />
          <div className="relative w-full max-w-[860px] max-h-[90vh] rounded-[24px] overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] border border-zinc-200 flex flex-col">
            <div className="shrink-0 flex items-center justify-between px-5 lg:px-6 h-[56px] border-b border-zinc-200 bg-zinc-50">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-sm font-semibold tracking-tight">
                  {activeProduct === "p9" ? "Efis Telpo P9 - Smart Payment POS" : activeProduct === "tps360" ? "TPS360 Palm - Biometric Terminal" : "EFIS Portable Touch Screen - S116 Datasheet"}
                </h3>
              </div>
              <button
                onClick={() => setActiveProduct(null)}
                className="w-8 h-8 grid place-items-center rounded-full bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-[#f3f4f6]">
              <iframe
                src={activeProduct === "p9" ? "/EFIS_Telpo_P9.html" : activeProduct === "tps360" ? "/TPS360_Palm.html" : "/efis_portable_touch_screen.html"}
                title={activeProduct === "p9" ? "Efis Telpo P9 specification sheet" : activeProduct === "tps360" ? "TPS360 Palm specification sheet" : "EFIS Portable Touch Screen S116 specification sheet"}
                className="w-full h-[72vh] lg:h-[75vh] border-0 block bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}