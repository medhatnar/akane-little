import Image from "next/image";
import Link from "next/link";

export default function Reiki() {
  return (
    <main>
      <section className="service-hero">
        <span className="eyebrow">Energy Healing</span>
        <h1>Reiki Services</h1>
        <p>
          Gentle, hands-on energy healing to help release tension, restore
          balance, and support whole-body wellbeing.
        </p>
      </section>

      <section>
        <span className="section-label">My Approach</span>
        <h2>How a session feels</h2>
        <div className="approach-grid">
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Presence First
            </h3>
            <p>
              I was first introduced to Reiki by my father. He was certified when I was in middle school, and he would offer it to me to help with bruises, ankle sprains, and other light injuries. I remember the sensation of the injury site becoming tingly, hot, and energized, and his reminders that this was a good sign - that the pain and inflammation must first get worse before it gets better. And with each follow-up session, my injuries would heal.
            </p>
          </div>
          <div className="approach-card">
            <h3>
              <span className="dot"></span>Intuitive Flow
            </h3>
            <p>
              As a lifelong mover, dancer, healer, and earth-oriented person drawn to the intelligence of the body, Reiki has allowed me to facilitate healing for myself and others in a way that is holistic, sustainable, and aligns with my Japanese lineage.
            </p>
          </div>
        </div>
      </section>

      <section>
        <span className="section-label">Background</span>
        <h2>Training &amp; Experience</h2>
        <div className="bg-block">
          <p>
            [Add your Reiki certification level or who trained you]
          </p>
          <p>
            [Add how long you&apos;ve been practicing, and any relevant
            experience, workshops, or schools you did]
          </p>
        </div>
      </section>

      <section>
        <span className="section-label">Investment</span>
        <h2>Reiki Pricing</h2>
        <div className="pricing-table">
          <div className="price-row">
            <div>
              <div className="name">Single Session</div>
              <div className="desc">
                [Duration, e.g., 60 minutes] — a full energy healing session.
              </div>
            </div>
            <div className="amount">$[XX]</div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">Extended Session</div>
              <div className="desc">
                [Duration, e.g., 90 minutes] — deeper, more immersive
                session.
              </div>
            </div>
            <div className="amount">$[XX]</div>
          </div>
          <div className="price-row">
            <div>
              <div className="name">3-Session Package</div>
              <div className="desc">
                Save when you book a series of sessions.
              </div>
            </div>
            <div className="amount">$[XX]</div>
          </div>
        </div>
        <Link href="/booking" className="cta-btn" style={{ marginTop: '2.4rem' }}>
          Book a Reiki Session
        </Link>
      </section>
    </main>
  );
}
