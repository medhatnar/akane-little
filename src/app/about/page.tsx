import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <section className="service-hero">
        <h1>About</h1>
        <p className="sr-only">A little about who I am, what I believe, and why I do this work.</p>
      </section>

      <section className="two-col">
        <div className="portrait-frame">
          <span>[Portrait Photo]</span>
        </div>
        <div>
          <h2>Hi, I&apos;m Akane</h2>
          <p style={{ color: 'var(--plum-soft)' }}>
            Welcome! My name is Akane (they/them) and I am a Certified Personal Trainer and Reiki II Practitioner based in unceded Lenape land (Brooklyn, NY). 
          </p>
          <p style={{ color: 'var(--plum-soft)', marginTop: '1rem' }}>
            I practice Personal Training and Reiki as methods tuning into our bodies’ innate capacities for healing, wisdom, and strength. My purpose is to help facilitate for clients a deepened, conscious, trustful connection with the infinitely wise body, whether it is through lifting weights or on the Reiki table.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section style={{ padding: '2vh 8vw' }}>
        <h2>Guided by intention</h2>
        <div className="value-list">
          <div className="value-item">
            <div className="ring-icon"></div>
            <h3>[Value One]</h3>
            <p>[Short description of this value and how it shows up in your work.]</p>
          </div>
          <div className="value-item">
            <div className="ring-icon"></div>
            <h3>[Value Two]</h3>
            <p>[Short description of this value and how it shows up in your work.]</p>
          </div>
          <div className="value-item">
            <div className="ring-icon"></div>
            <h3>[Value Three]</h3>
            <p>[Short description of this value and how it shows up in your work.]</p>
          </div>
        </div>
      </section>
    </main>
  );
}
