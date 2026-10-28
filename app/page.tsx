"use client";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Petals from "@/components/Petals";

const foods = [
  { e: "🥬", n: "Kimchi", k: "김치", d: "Achitilgan karam — har bir koreys dasturxonining ruhi." },
  { e: "🍚", n: "Bibimbap", k: "비빔밥", d: "Guruch, sabzavot, tuxum va gochujang sousi aralashmasi." },
  { e: "🌶️", n: "Tteokbokki", k: "떡볶이", d: "Achchiq sousdagi guruch noni — ko'cha taomlari qiroli." },
  { e: "🥩", n: "Bulgogi", k: "불고기", d: "Marinadlangan mol go'shti, ko'mirda qovurilgan." },
];

const culture = [
  { e: "🎤", t: "K-pop", d: "BTS, BLACKPINK, Stray Kids — dunyoni zabt etgan musiqa to'lqini." },
  { e: "🎬", t: "K-drama", d: "Hissiyotga boy serial va filmlar, Oscar sovrindori «Parazitlar» kabi." },
  { e: "👘", t: "Hanbok", d: "Milliy kiyim: yorqin ranglar va oqib turuvchi shakllar." },
  { e: "🏯", t: "Hanok", d: "An'anaviy uylar — yog'och, qog'oz va tosh uyg'unligi." },
];

const hangul = [
  { c: "ㄱ", r: "g / k", u: "g" }, { c: "ㄴ", r: "n", u: "n" }, { c: "ㄷ", r: "d / t", u: "d" },
  { c: "ㄹ", r: "r / l", u: "r / l" }, { c: "ㅁ", r: "m", u: "m" }, { c: "ㅂ", r: "b / p", u: "b" },
  { c: "ㅅ", r: "s", u: "s" }, { c: "ㅇ", r: "— / ng", u: "(jim) / ng" },
  { c: "ㅏ", r: "a", u: "a" }, { c: "ㅓ", r: "eo", u: "o'" }, { c: "ㅗ", r: "o", u: "o" },
  { c: "ㅜ", r: "u", u: "u" }, { c: "ㅡ", r: "eu", u: "ı" }, { c: "ㅣ", r: "i", u: "i" },
];

const cities = [
  { n: "Seul", k: "서울", d: "Neon va saroylar uyg'unlashgan 10 millionlik poytaxt." },
  { n: "Busan", k: "부산", d: "Dengiz bo'yi, baliq bozorlari va rang-barang Gamcheon qishlog'i." },
  { n: "Jeju", k: "제주", d: "Vulqon oroli: Hallasan cho'qqisi va dengiz ayollari (haenyeo)." },
];

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [sel, setSel] = useState(hangul[0]);
  const [name, setName] = useState("");

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: bar }} />
      <Petals />

      <nav className="nav">
        <span className="logo">서울 <b>Seul</b></span>
        <div>
          <a href="#taom">Taomlar</a><a href="#madaniyat">Madaniyat</a>
          <a href="#hangul">Hangul</a><a href="#shahar">Shaharlar</a>
        </div>
      </nav>

      <section className="hero">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="tag">대한민국 · Koreya Respublikasi</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8 }}>
          안녕하세요,<br /><span>Koreyaga xush kelibsiz</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="lead">
          An'ana va kelajak uchrashgan yurt: taomlari, musiqasi, yozuvi va shaharlari bilan tanishing.
        </motion.p>
        <a className="btn" href="#taom">Kashf etish ↓</a>
      </section>

      <motion.section id="taom" className="sec" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2>Koreys taomlari <small>한식</small></h2>
        <div className="grid">
          {foods.map((f) => (
            <motion.article key={f.n} whileHover={{ y: -8, scale: 1.02 }} className="card">
              <div className="emoji">{f.e}</div>
              <h3>{f.n}</h3><span className="kr">{f.k}</span>
              <p>{f.d}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="madaniyat" className="sec" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2>Madaniyat <small>한류</small></h2>
        <div className="grid">
          {culture.map((c) => (
            <motion.article key={c.t} whileHover={{ y: -8, scale: 1.02 }} className="card">
              <div className="emoji">{c.e}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="hangul" className="sec" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2>Hangul o'yinchog'i <small>한글</small></h2>
        <p className="lead">1443-yilda Qirol Sejong yaratgan alifbo. Harfni bosing:</p>
        <div className="hangul">
          <div className="keys">
            {hangul.map((h) => (
              <button key={h.c} onClick={() => setSel(h)} className={sel.c === h.c ? "on" : ""}>{h.c}</button>
            ))}
          </div>
          <motion.div key={sel.c} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="big">
            <div className="glyph">{sel.c}</div>
            <p>Lotin: <b>{sel.r}</b></p>
            <p>O'zbekcha: <b>{sel.u}</b></p>
          </motion.div>
        </div>
        <div className="namebox">
          <label>Ismingizni yozing (lotin) — Hangul tovushlari bilan solishtiring:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Masalan: Jamshid" />
          <div className="chips">
            {name.toLowerCase().split("").filter((ch) => /[a-z]/.test(ch)).map((ch, i) => {
              const m = hangul.find((h) => h.r.split(" / ").includes(ch));
              return <span key={i} className={m ? "hit" : ""}>{m ? m.c : ch}</span>;
            })}
          </div>
        </div>
      </motion.section>

      <motion.section id="shahar" className="sec" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2>Shaharlar <small>도시</small></h2>
        <div className="grid three">
          {cities.map((c) => (
            <motion.article key={c.n} whileHover={{ y: -8 }} className="card city">
              <span className="kr big-kr">{c.k}</span>
              <h3>{c.n}</h3><p>{c.d}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <footer>감사합니다 — Rahmat! · Next.js + TypeScript + Framer Motion</footer>
    </main>
  );
}
