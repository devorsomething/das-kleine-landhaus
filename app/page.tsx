"use client";

import { useState } from "react";
import WhatsAppButton from '@/components/WhatsAppButton';

const categories = [
  {
    name: "Wohnaccessoires",
    desc: "Kerzen, Vasen, Bilderrahmen",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
  },
  {
    name: "Geschenke",
    desc: "Liebevoll verpackte Geschenke für jeden Anlass",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
  },
  {
    name: "Textilien",
    desc: "Kissen, Decken, Vorhänge",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  },
  {
    name: "Küche",
    desc: "Geschirr, Töpfe, Küchenaccessoires",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    name: "Garten",
    desc: "Kleinigkeiten für draußen",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  },
  {
    name: "Pfänder Spezialitäten",
    desc: "Regionale Produkte, Honig, Marmeladen",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
  },
];

const featuredProducts = [
  {
    name: "Handgemachte Bienenwachskerzen",
    desc: "Natürliche Kerzen aus dem Bregenzerwald, in verschiedenen Formen und Größen.",
    price: "€€",
    img: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?w=600&q=80",
  },
  {
    name: "Vorarlberger Bergkräuter-Tee",
    desc: "Aus der Region gesammelt und liebevoll getrocknet. Perfekt für gemütliche Stunden.",
    price: "€",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80",
  },
  {
    name: "Altes Handwerk Servierschüssel",
    desc: "Kunstvoll gefertigte Keramikschüsseln — jedes Stück ein Unikat.",
    price: "€€€",
    img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80",
  },
  {
    name: "Alpines Lavendel-Sachet",
    desc: "Duftende Lavendelsäckchen aus heimischem Anbau. Für Kleiderschrank und Wohnraum.",
    price: "€",
    img: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=600&q=80",
  },
  {
    name: "Geschenkkorb „Vorarlberg\"",
    desc: "Zusammengestellt mit regionalen Spezialitäten: Honig, Marmeladen, Bergkäse.",
    price: "€€€",
    img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=600&q=80",
  },
  {
    name: "Wollkissen mit Bergmotiven",
    desc: "Handgestrickte Kissen in warmen Terracotta- und Sage-Tönen.",
    price: "€€",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80",
  },
];

const openingHours = [
  { day: "Montag – Freitag", hours: "09:00 – 18:00" },
  { day: "Samstag", hours: "09:00 – 17:00" },
  { day: "Sonntag", hours: "Geschlossen" },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-cream">

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-linen/80 font-sans text-sm tracking-[0.3em] uppercase mb-4">
            Montfortstraße 13 · Bregenz
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-linen font-light leading-none mb-6">
            Das kleine Landhaus
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-linen/90 font-light italic mb-10">
            Geschenke · Wohnaccessoires · Handwerk
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kollektion" className="btn-primary text-lg">
              Kollektion entdecken
            </a>
            <a href="#kontakt" className="btn-secondary text-lg border-linen text-linen hover:bg-linen hover:text-charcoal">
              Kontakt
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-linen/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="bg-linen py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 md:gap-12 text-charcoal font-sans text-sm tracking-wide text-center">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            Montfortstraße 13, 6900 Bregenz
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +43 5574 00 000
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Mo–Fr 9–18 Uhr · Sa 9–17 Uhr
          </span>
        </div>
      </div>

      {/* ── WILLKOMMEN ── */}
      <section id="willkommen" className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-linen rounded-sm" />
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Gemütliche Wohnaccessoires im Landhausstil"
              className="relative w-full h-[450px] object-cover rounded-sm shadow-lg"
            />
          </div>
          <div>
            <p className="text-terracotta font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Willkommen
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight mb-6">
              Ein Ort voller <em className="not-italic">schöner Dinge</em>
            </h2>
            <p className="font-sans text-charcoal/80 text-lg leading-relaxed mb-6">
              Im kleinen Landhaus finden Sie handverlesene Wohnaccessoires, liebevoll ausgewählte Geschenkideen und handgefertigte Produkte aus der Region. Jedes Stück erzählt eine Geschichte.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-8">
              Unser Geschäft in der Montfortstraße 13 ist mehr als nur ein Laden — es ist ein Treffpunkt für alle, die das Besondere schätzen. Ob für Ihr eigenes Zuhause oder als Geschenk: Bei uns finden Sie immer etwas, das Herzen berührt.
            </p>
            <a href="#kollektion" className="btn-primary">
              Unsere Kollektion
            </a>
          </div>
        </div>
      </section>

      {/* ── KOLLEKTION / CATEGORIES ── */}
      <section id="kollektion" className="section-padding bg-linen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terracotta font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Stöbern & Entdecken
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight">
              Unsere Kollektion
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group relative overflow-hidden rounded-sm bg-charcoal/10 card-hover cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-linen font-light mb-1">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-linen/70 text-sm">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUSGEWÄHLTE PRODUKTE ── */}
      <section id="produkte" className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terracotta font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Handverlesen
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight">
              Ausgewählte Produkte
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-sm overflow-hidden shadow-sm card-hover"
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-terracotta text-cream font-sans text-xs font-medium px-3 py-1 rounded-full">
                    {product.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-charcoal mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HANDWERK & REGIONALITÄT ── */}
      <section className="section-padding bg-charcoal text-linen">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-terracotta font-sans text-sm tracking-[0.2em] uppercase mb-3">
            Unsere Werte
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
            Handwerk & Regionalität
          </h2>
          <p className="font-sans text-linen/80 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            Wir legen Wert auf Regionalität und Handwerk. Viele unserer Produkte kommen von lokalen Kunsthandwerkern aus Vorarlberg — Menschen, die mit Leidenschaft und Können Dinge schaffen, die es sonst nirgends gibt.
          </p>
          <p className="font-sans text-linen/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            Jeder Einkauf bei uns unterstützt die lokale Wirtschaft und bewahrt handwerkliche Traditionen, die otherwise in der Masse under gehen.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="text-center">
              <p className="font-serif text-5xl text-terracotta font-light">100%</p>
              <p className="font-sans text-linen/60 text-sm mt-1">Regional</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-terracotta font-light">30+</p>
              <p className="font-sans text-linen/60 text-sm mt-1">Kunsthandwerker</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-5xl text-terracotta font-light">Vorarlberg</p>
              <p className="font-sans text-linen/60 text-sm mt-1">Herkunft</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS / WORKSHOPS ── */}
      <section className="section-padding bg-linen">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-sm p-10 md:p-14 shadow-sm text-center">
            <p className="text-terracotta font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Gemeinschaft
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight mb-6">
              Workshops & Veranstaltungen
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-8 max-w-xl mx-auto">
              Wir veranstalten regelmäßig Bastel-Workshops, Adventsmärkte und saisonale Events. Schauen Sie vorbei oder kontaktieren Sie uns — wir halten Sie auf dem Laufenden über kommende Termine.
            </p>
            <a href="#kontakt" className="btn-primary">
              Auf dem Laufenden bleiben
            </a>
          </div>
        </div>
      </section>

      {/* ── KONTAKT & LAGE ── */}
      <section id="kontakt" className="section-padding bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-terracotta font-sans text-sm tracking-[0.2em] uppercase mb-3">
              Wir freuen uns auf Sie
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight">
              Kontakt & Lage
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-white rounded-sm p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Nachricht schreiben
              </h3>
              {formSubmitted ? (
                <div className="bg-sage/10 border border-sage/30 rounded-sm p-6 text-center">
                  <p className="font-serif text-xl text-sage-dark mb-2">Vielen Dank!</p>
                  <p className="font-sans text-charcoal/70 text-sm">
                    Ihre Nachricht wurde übermittelt. Wir melden uns zeitnah bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-sans text-sm text-charcoal/70 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-sans text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-charcoal/70 mb-1">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-sans text-charcoal focus:outline-none focus:border-terracotta transition-colors"
                      placeholder="ihre@email.at"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-charcoal/70 mb-1">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-charcoal/20 rounded-sm px-4 py-3 font-sans text-charcoal focus:outline-none focus:border-terracotta transition-colors resize-none"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-charcoal mb-4">Das kleine Landhaus</h3>
                <div className="space-y-3 font-sans text-charcoal/70">
                  <p className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-terracotta mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Montfortstraße 13<br />6900 Bregenz, Österreich
                  </p>
                  <p className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-terracotta shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    +43 5574 00 000
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xl text-charcoal mb-3">Öffnungszeiten</h4>
                <div className="space-y-2">
                  {openingHours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between font-sans text-sm text-charcoal/70"
                    >
                      <span>{item.day}</span>
                      <span className={item.hours === "Geschlossen" ? "text-charcoal/40" : ""}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-sm overflow-hidden shadow-sm h-64">
                <iframe
                  title="Das kleine Landhaus, Montfortstraße 13, Bregenz"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.0!2d9.747!3d47.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzAwLjAiTiA5wrA0NicyMC4wIkU!5e0!3m2!1sde!2sat!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-charcoal text-linen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="font-serif text-3xl font-light mb-4">
                Das kleine Landhaus
              </h3>
              <p className="font-sans text-linen/60 text-sm leading-relaxed">
                Handverlesene Wohnaccessoires, liebevoll ausgewählte Geschenkideen und handgefertigte Produkte aus Vorarlberg.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Navigation</h4>
              <nav className="space-y-2 font-sans text-sm text-linen/60">
                <a href="#willkommen" className="block hover:text-terracotta transition-colors">Willkommen</a>
                <a href="#kollektion" className="block hover:text-terracotta transition-colors">Kollektion</a>
                <a href="#produkte" className="block hover:text-terracotta transition-colors">Produkte</a>
                <a href="#kontakt" className="block hover:text-terracotta transition-colors">Kontakt</a>
              </nav>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4">Kontakt</h4>
              <address className="not-italic font-sans text-sm text-linen/60 space-y-2">
                <p>Montfortstraße 13</p>
                <p>6900 Bregenz, Österreich</p>
                <p>+43 5574 00 000</p>
              </address>
            </div>
          </div>
          <div className="border-t border-linen/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-linen/40">
              © {new Date().getFullYear()} Das kleine Landhaus — Montfortstraße 13, Bregenz
            </p>
            <p className="font-sans text-xs text-linen/30">
              Ein Projekt von Miro · Webdesign & Digitalisierung
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 664 567 8901" />

    </main>
  );
}
