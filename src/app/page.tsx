import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero">
        <h1>Queer Reiki & Personal Training</h1>
        <p>
          Akane Little (they/them)
          <br/>
          Brooklyn, NY
        </p>
        <div className="hero-rings">
          <span className="r"></span>
          <span className="r"></span>
          <span className="r"></span>
        </div>
        <Link href="/booking" className="cta-btn">
          Get in touch
        </Link>
      </div>
      <section>
        <div className="approach-grid">
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Reiki Healing
            </h3>
            <p>
              REIKI EXCERPT
            </p>
            <Link href="/reiki" className="cta-btn cta-btn-sm">
              Explore Reiki
            </Link>
          </div>
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Professional Training
            </h3>
            <p>
              Personalized training sessions for cool gay people
            </p>
            <Link href="/training" className="cta-btn cta-btn-sm">
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
