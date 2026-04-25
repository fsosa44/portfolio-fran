"use client";

import { useState } from "react";
import match5Img from "./assets/Match5.png";
import fastDeliveryImg from "./assets/FastDelivery.png";
import franciscoImg from "./assets/Francisco.png";
import { RiJavascriptLine } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript, TbBrandTailwind, TbBrandMongodb, TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { translations, type Lang } from "./i18n";
import { ScrollReveal } from "./components/ScrollReveal";

function App() {
  const [lang, setLang] = useState<Lang>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#060e20]/75 backdrop-blur-xl border-b border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.3)] h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
          <div className="text-xl font-black text-primary tracking-tighter font-headline">
            Francisco Sosa
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-primary font-semibold border-b-2 border-primary pb-1 font-headline tracking-tight hover:opacity-100 transition-all duration-300 relative group"
              href="#work"
            >
              {t.nav.projects}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
            </a>
            <a
              className="text-on-surface-variant font-medium font-headline tracking-tight hover:text-primary transition-all duration-300 relative group px-1 py-1"
              href="#about"
            >
              {t.nav.about}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a
              className="text-on-surface-variant font-medium font-headline tracking-tight hover:text-primary transition-all duration-300 relative group px-1 py-1"
              href="#tech"
            >
              {t.nav.tech}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
            <a
              className="text-on-surface-variant font-medium font-headline tracking-tight hover:text-primary transition-all duration-300 relative group px-1 py-1"
              href="#contact"
            >
              {t.nav.contact}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="flex items-center gap-1.5 text-on-surface-variant font-headline text-sm font-bold tracking-tight hover:text-primary transition-colors"
            >
              <span className={lang === "es" ? "text-primary" : "text-on-surface-variant"}>ES</span>
              <span className="text-outline-variant">/</span>
              <span className={lang === "en" ? "text-primary" : "text-on-surface-variant"}>EN</span>
            </button>
            <a
              href={lang === "es" ? "/CV FRANCISCO SOSA.pdf" : "/RESUME-FRANCISCO SOSA.pdf"}
              download
              className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 rounded-xl font-bold font-headline scale-95 active:scale-90 transition-transform"
            >
              {t.nav.resume}
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#060e20]/95 backdrop-blur-lg pt-24 px-8 flex flex-col gap-6 md:hidden">
          <a
            className="text-on-surface font-headline text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            href="#work"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.projects}
          </a>
          <a
            className="text-on-surface font-headline text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.about}
          </a>
          <a
            className="text-on-surface font-headline text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            href="#tech"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.tech}
          </a>
          <a
            className="text-on-surface font-headline text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
          <a
            href={lang === "es" ? "/CV FRANCISCO SOSA.pdf" : "/RESUME-FRANCISCO SOSA.pdf"}
            download
            className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold font-headline text-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.resume}
          </a>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-8 text-center bg-surface">
          <ScrollReveal>
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-primary-container blur-3xl opacity-20 rounded-full" />
              <img
                className="w-48 h-48 rounded-full object-cover border-4 border-outline-variant/30 relative z-10"
                alt="Retrato profesional de Francisco Sosa"
                src={franciscoImg}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-4 text-on-surface">
              Francisco <span className="text-primary">Sosa</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-headline text-xl md:text-2xl font-bold text-primary-fixed mb-6 tracking-tight">
              {t.hero.role}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 font-body">
              {t.hero.bio}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col md:flex-row gap-6 mb-16 md:mb-0">
              <a className="border border-outline-variant/30 text-on-surface px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-colors active:scale-95" href="#work">
                {t.hero.viewProjects}
              </a>
              <a className="border border-outline-variant/30 text-on-surface px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-colors active:scale-95" href="#contact">
                {t.hero.contactMe}
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* Career Timeline Section */}
        <section className="py-32 px-8 bg-surface-container-low" id="about">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-20">
                <span className="font-label text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
                  {t.timeline.label}
                </span>
                <h2 className="font-headline text-4xl font-bold tracking-tight">
                  {t.timeline.title}{" "}
                  <span className="text-tertiary">{t.timeline.titleAccent}</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 md:-translate-x-px" />

              {t.timeline.items.map((item, i) => {
                const isEven = i % 2 !== 0;
                const dotColor = isEven ? "bg-tertiary" : "bg-primary";
                const dateColor = isEven ? "text-tertiary" : "text-primary";

                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div
                      className={`relative flex flex-col md:flex-row md:justify-center group ${
                        i < t.timeline.items.length - 1 ? "mb-16" : ""
                      }`}
                    >
                    {isEven ? (
                      <>
                        <div className="md:w-1/2 md:pr-16 md:text-right md:order-1" />
                        <div className={`absolute left-6 md:left-1/2 top-1 md:-translate-x-1/2 w-3 h-3 rounded-full ${dotColor} ring-4 ring-surface-container-low z-10`} />
                        <div className="pl-12 md:pl-0 md:w-1/2 md:pl-16 md:order-2">
                          <span className={`font-label ${dateColor} text-xs font-bold tracking-wider`}>
                            {item.date}
                          </span>
                          <h3 className="font-headline text-xl font-bold text-on-surface mt-2">
                            {item.title}
                          </h3>
                          <p className="font-body text-on-surface-variant leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="pl-12 md:pl-0 md:w-1/2 md:pr-16 md:text-right">
                          <span className={`font-label ${dateColor} text-xs font-bold tracking-wider`}>
                            {item.date}
                          </span>
                          <h3 className="font-headline text-xl font-bold text-on-surface mt-2">
                            {item.title}
                          </h3>
                          <p className="font-body text-on-surface-variant leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </div>
                        <div className={`absolute left-6 md:left-1/2 top-1 md:-translate-x-1/2 w-3 h-3 rounded-full ${dotColor} ring-4 ring-surface-container-low z-10`} />
                        <div className="md:w-1/2 md:pl-16" />
                      </>
                    )}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 px-8 bg-surface" id="work">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="flex justify-between items-end mb-16">
                <div>
                  <span className="font-label text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
                    {t.projects.label}
                  </span>
                  <h2 className="font-headline text-4xl font-bold tracking-tight">
                    {t.projects.title}
                  </h2>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
              {/* Project Card 1 — Match 5 */}
              <ScrollReveal delay={0.1} fullHeight>
                <div className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-surface-container-highest flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Captura de pantalla de Match 5, app para organizar partidos de fútbol"
                    src={match5Img}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-surface-container-lowest/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full text-on-surface uppercase tracking-wider">
                     MERN
                    </span>

                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Match 5
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                    {t.projects.match5.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      className="flex items-center gap-2 text-primary font-bold text-sm group/btn"
                      href="https://match5-front.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.viewProject}{" "}
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                    <a
                      href="https://github.com/fsosa44/match5-front"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-on-surface-variant hover:text-white cursor-pointer transition-colors">
                        code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              </ScrollReveal>

              {/* Project Card 2 — Fast Delivery */}
              <ScrollReveal delay={0.2} fullHeight>
                <div className="group bg-surface-container-high rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-surface-container-highest flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Captura de pantalla de Fast Delivery, app de delivery mobile"
                    src={fastDeliveryImg}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-surface-container-lowest/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full text-on-surface uppercase tracking-wider">
                      Next.js
                    </span>
                    <span className="bg-surface-container-lowest/80 backdrop-blur-sm text-[10px] font-bold px-3 py-1 rounded-full text-on-surface uppercase tracking-wider">
                      TypeScript
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Fast Delivery
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-6">
                    {t.projects.fastDelivery.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <a
                      className="flex items-center gap-2 text-primary font-bold text-sm group/btn"
                      href="https://fast-delivery-src-5ety.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.projects.viewProject}{" "}
                      <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                        arrow_forward
                      </span>
                    </a>
                    <a
                      href="https://github.com/hernanortiz18/fast-delivery-src"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-on-surface-variant hover:text-white cursor-pointer transition-colors">
                        code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-32 px-8 bg-surface-container-low" id="tech">
          <div className="max-w-7xl mx-auto text-center">
            <ScrollReveal>
              <span className="font-label text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
                {t.tech.label}
              </span>
              <h2 className="font-headline text-4xl font-bold mb-16 tracking-tight">
                {t.tech.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              <ScrollReveal delay={0.05}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <RiJavascriptLine className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm">
                    JavaScript
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <FaReact className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm">
                    React
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <TbBrandTypescript className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm">
                    TypeScript
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <TbBrandTailwind className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm whitespace-nowrap">
                    Tailwind CSS
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <TbBrandMongodb className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm">
                    MongoDB
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <SiExpress className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm">
                    Express
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <FaNodeJs className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm">
                    Node.js
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="p-8 rounded-xl bg-surface-container flex flex-col items-center gap-4 hover:bg-surface-variant transition-colors group">
                  <TbBrandReactNative className="text-4xl text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="font-headline font-semibold text-sm whitespace-nowrap">
                    React Native
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8" id="contact">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-surface-container-high rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 hero-gradient opacity-5" />
              <h2 className="font-headline text-4xl md:text-5xl font-black mb-6 relative z-10">
                {t.cta.title}{" "}
                <span className="text-primary">{t.cta.titleAccent}</span>
              </h2>
              <p className="text-on-surface-variant mb-12 text-lg relative z-10 max-w-xl mx-auto">
                {t.cta.description}
              </p>
              <div className="relative z-10">
                <a
                  className="hero-gradient text-on-primary px-12 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 shadow-2xl transition-transform hover:scale-105 active:scale-95"
                  href="mailto:sosafrancisco2005@gmail.com"
                >
                  {t.cta.button}{" "}
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full py-16 px-8 mt-32">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <div className="text-lg font-bold text-primary font-headline">
            Francisco Sosa
          </div>
          <div className="flex gap-8">
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body text-sm tracking-wide opacity-80 hover:opacity-100"
              href="https://github.com/fsosa44"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body text-sm tracking-wide opacity-80 hover:opacity-100"
              href="https://www.linkedin.com/in/francisco-sosa-5b528a28a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-on-surface-variant hover:text-tertiary transition-colors duration-300 font-body text-sm tracking-wide opacity-80 hover:opacity-100"
              href="mailto:sosafrancisco2005@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
