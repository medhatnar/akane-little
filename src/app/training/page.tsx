import Link from "next/link";

export default function Training() {
  return (
    <main>
      <section className="service-hero">
        <span className="eyebrow">Professional Strength Development</span>
        <h1>Personal Training</h1>
        <p>
          [One-sentence description of your training services and who
          they&apos;re for.]
        </p>
      </section>

      <section>
        <span className="section-label">My Approach</span>
        <h2>How I work with clients</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <h3>
              <span className="dot"></span>[Approach Pillar One]
            </h3>
            <p>
              [Describe your training philosophy or methodology — what makes
              your sessions distinct.]
            </p>
          </div>
          <div className="approach-card">
            <h3>
              <span className="dot"></span>[Approach Pillar Two]
            </h3>
            <p>
              [Describe how you tailor sessions to individual or team goals.]
            </p>
          </div>
        </div>
      </section>

      <section>
        <span className="section-label">Background</span>
        <h2>Training &amp; Experience</h2>
        <div className="bg-block">
          <p>
            [Add your professional certifications, credentials, or relevant
            work history.]
          </p>
          <p>
            [Add how long you&apos;ve been offering this training and who you
            typically work with.]
          </p>
        </div>
      </section>

      <section>
        <span className="section-label">Investment</span>
        <h2>Training Pricing</h2>
        <div className="pricing-table">
          <div className="price-row">
            <div>
              <div className="name">Single Session</div>
              <div className="desc">[Duration] — one-on-one training session.</div>
            </div>
            <div className="amount">$[XX]</div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">[Package Name]</div>
              <div className="desc">
                [Description of a multi-session package.]
              </div>
            </div>
            <div className="amount">$[XX]</div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">Group / Team Session</div>
              <div className="desc">
                [Description of group pricing, per person or flat rate.]
              </div>
            </div>
            <div className="amount">$[XX]</div>
          </div>
        </div>
        <Link href="/booking" className="cta-btn" style={{ marginTop: '2.4rem' }}>
          Book a Training Session
        </Link>
      </section>
    </main>
  );
}
