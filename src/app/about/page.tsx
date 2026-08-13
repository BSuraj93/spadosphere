// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="section-label">The Atmosphere Behind Spadosphere</div>
        <div className="grid-2">
          <div>
            <h1>We are the <span className="method-hero-highlight">Spadosphere</span>.</h1>
            <p>
              Spadosphere was built for people who care deeply about how 
              ideas become experiences, and how strategy, product, and design 
              can move with more clarity in the real world.
            </p>
            <p>

              We are here to create a breathable atmosphere for learning, building, 
              reflection, and connection, so growth feels more intentional and less fragmented.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section">
        <div className="section-label">The Origin Story</div>
        <div className="grid-2">
          <div>
            <h2>Two disciplines. One shared atmosphere.</h2>
          </div>
          <div>
            <p>
              Spadosphere did not begin with the idea of becoming a conventional consultancy. 
              It began with a recognition that strategy and design are too often separated from 
              each other, and learning is too often separated from application.
            </p>
            <p>
              We wanted to build something more integrated: an environment where insight can become 
              action, where design can sharpen strategy, and where people can think, build, 
              and connect in more meaningful ways.
            </p>
            <p>
              What started as a bridge between product strategy and product design is evolving into a 
              wider experiential ecosystem that includes workshops, immersive programs, retreats, and 
              selective advisory support.
            </p>
          </div>
        </div>
      </section>

      {/* Duo profiles */}
{/*<section className="section">
  <div className="section-label">Meet the Duo</div>
  <div className="duo-grid">
    <div className="card duo-card">
      <img src="/strategist-photo.jpg" alt="The Strategist" className="person-image" />
      <div className="duo-content">
        <h3>The Strategist</h3>
        <p className="section-label">SURAJ B · Strategy &amp; Product Management</p>
        <p>
          <strong>The Vibe.</strong> The North Star.
        </p>
        <p>
          With a background in navigating the complex waters of product
          management and GTM strategy, Suraj focuses on the why and
          the how.
        </p>
        <p>
          He&apos;s the one who ensures the roadmap leads to a market win,
          handling the operational heavy lifting so founders don&apos;t
          have to.
        </p>
      </div>
    </div>
    <div className="card duo-card">
      <img src="/designer-photo.jpg" alt="The Designer" className="person-image" />
      <div className="duo-content">
        <h3>The Designer</h3>
        <p className="section-label">ANJANA B · Product Design &amp; UX</p>
        <p>
          <strong>The Vibe.</strong> The Soul of the Product.
        </p>
        <p>
          A master of visual storytelling and user experience, Anjana turns abstract strategy into lovable reality.
        </p>
        <p>
          She believes that design isn&apos;t just how it looks, but how
          it builds trust with the user from the very first click.
        </p>
      </div>
    </div>
  </div>
</section> */}


      {/* Founders Office philosophy */}
      <section className="section">
        <div className="section-label">The Spadosphere Philosophy</div>
        <div className="grid-2">
          <div>
            <h2>More than a service. More like an environment.</h2>
          </div>
          <div>
            <p>
              Sometimes Spadosphere takes the form of strategic support. Sometimes it 
              becomes a workshop, a bootcamp, a retreat, a founder circle, or a room 
              where the right questions change the direction of the work.
            </p>
            <p>
              What matters to us is not only what gets delivered, but what gets understood, 
              experienced, and carried forward.
            </p>
            <p>
              We believe better outcomes happen when strategy, product, design, experiential 
              learning, and human connection are allowed to work in the same atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card card-soft-primary">
          <div className="section-label">Retreats</div>
            <div className="grid-2">
              <div>
                <h2>Not every meaningful shift happens in front of a screen.</h2>
              </div>
            <div>
            <p>
              Spadosphere Retreats are immersive experiences designed for clarity,
              reflection, conversation, and renewed momentum.
            </p>
            <p>
              They bring together thoughtful people across building, strategy, product,
              design, and emerging ventures who want to step outside everyday noise and
              re-enter their work with sharper perspective.
            </p>
            <p>
              In the larger Spadosphere, retreats sit alongside workshops, programs, and
              advisory support as another way to experience learning as something lived,
              not just consumed.
            </p>
            <div className="button-row">
              <Link href="/retreats" className="btn btn-primary">
                Explore Retreats
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="section-label">The Atmosphere · Our Values</div>
        <div className="values-grid">
          <div className="card">
            <h3>Radical Candor</h3>
            <p>
              We value honesty that sharpens the work, the thinking, and the people doing it.
            </p>
          </div>
          <div className="card">
            <h3>Aesthetic Integrity</h3>
            <p>We believe form shapes feeling, and feeling shapes trust.</p>
          </div>
          <div className="card">
            <h3>Speed Over Viscosity</h3>
            <p>
              We reduce friction so ideas, conversations, and execution can move with more momentum.
            </p>
          </div>
          <div className="card">
            <h3>Lovability</h3>
            <p>
              We care about experiences people remember, return to, and talk about.
            </p>
          </div>
          <div className="card">
            <h3>Experiential Depth</h3>
            <p>
              We believe meaningful learning happens through doing, discussing, reflecting, and applying.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">Enter the Atmosphere</div>
          <h2>Find your way into Spadosphere.</h2>
          <p>
            Whether you are building something, rethinking something, learning through experience, or looking 
            for the right people and perspectives around you, Spadosphere is designed to meet you there.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Enter the Atmosphere
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
