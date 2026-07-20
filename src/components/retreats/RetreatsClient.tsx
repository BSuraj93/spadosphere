"use client";

import { useState } from "react";
import Link from "next/link";

type Retreat = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  slots: number | null;
  featured_image_url: string;
  highlight_intro: string;
  bullet_1: string;
  bullet_2: string;
  bullet_3: string;
  detailed_bullets: string;
  details: string;
  pickup_available: "Yes" | "No";
  pickup_info_text: string;
  pickup_price_with: string;
  pickup_price_without: string;
  info_panel: string;
  duration: string;
  location: string;
  date: string;
  start_time: string;
  slug: string;
  tags: string;
  status: "Draft" | "Live";
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function parseTags(tags: string) {
  return tags?.split(",").map((tag) => tag.trim()).filter(Boolean) ?? [];
}

function parseQuotedBullets(text: string) {
  if (!text) return [];
  const matches = [...text.matchAll(/"([^"]+)"/g)].map((match) => match[1].trim());
  return matches.length ? matches : text.split("\n").map((item) => item.trim()).filter(Boolean);
}

export default function RetreatsClient({ retreats }: { retreats: Retreat[] }) {
  const [selectedRetreat, setSelectedRetreat] = useState<Retreat | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeJoinRetreat, setActiveJoinRetreat] = useState<Retreat | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    aadharLast6: "",
    pickupNeeded: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

    const openDrawer = (retreat?: Retreat) => {
    setActiveJoinRetreat(retreat ?? null);
    setFormSubmitted(false);
    setSubmitError("");
    setSubmitting(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      aadharLast6: "",
      pickupNeeded: "",
    });
    setDrawerOpen(true);
  };

  return (
    <div>
      <section className="section">
        <div className="grid-2">
          <div>
            <div className="section-label">Spadosphere Retreats</div>
            <h1>Retreats for clarity, connection, and meaningful forward movement.</h1>
          </div>
          <div>
            <p>
              Spadosphere Retreats are immersive experiences for people who want
              to step away from everyday noise, reconnect with what matters, and
              return with clearer perspective.
            </p>
            <p>
              Every retreat is designed as a warm, respectful, and thoughtfully
              held space. We care deeply about the emotional and physical safety of
              everyone who joins us, and we take that responsibility seriously.
            </p>
            <p>
              We design retreats around reflection, conversation, learning, and
              real human connection so the experience feels grounding, useful,
              and memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="retreat-safety-banner">
          <div className="section-label">Safe Spaces</div>
          <h2>Every Spadosphere retreat is held as a safe, respectful space.</h2>
          <p>
            Participant care is central to how we host. We take safety seriously,
            and our registration and verification process is designed to help
            protect the trust, comfort, and wellbeing of everyone joining us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-label">Upcoming Retreats</div>

        {retreats.length === 0 ? (
          <div className="card">
            <h2>No upcoming retreats right now.</h2>
            <p>We are curating the next set of Spadosphere retreats. Please check back soon.</p>
          </div>
        ) : (
          <div className="retreat-list">
            {retreats.map((retreat) => {
              const tags = parseTags(retreat.tags);

              return (
                <article key={retreat.id} className="card retreat-card">
                  {retreat.featured_image_url ? (
                    <img
                      src={retreat.featured_image_url}
                      alt={retreat.title}
                      className="retreat-card-image"
                    />
                  ) : null}

                  <div className="retreat-card-body">
                    <div className="retreat-card-topline">
                      <span className="badge">{retreat.category}</span>
                      {retreat.slots ? <span className="badge">{retreat.slots} slots</span> : null}
                    </div>

                    <h2>{retreat.title}</h2>
                    <p className="retreat-subtitle">{retreat.subtitle}</p>
                    <p>{retreat.highlight_intro}</p>

                    <div className="retreat-bullets">
                      {retreat.bullet_1 ? <p>✓ {retreat.bullet_1}</p> : null}
                      {retreat.bullet_2 ? <p>✓ {retreat.bullet_2}</p> : null}
                      {retreat.bullet_3 ? <p>✓ {retreat.bullet_3}</p> : null}
                    </div>

                    <div className="retreat-meta-grid">
                      <div className="card retreat-meta-card">
                        <p><strong>Date:</strong> {formatDate(retreat.date)}</p>
                        <p><strong>Start time:</strong> {retreat.start_time}</p>
                        <p><strong>Duration:</strong> {retreat.duration}</p>
                        <p><strong>Location:</strong> {retreat.location}</p>
                      </div>

                      <div className="card retreat-meta-card">
                        <p><strong>Pickup available:</strong> {retreat.pickup_available}</p>
                        <p><strong>Without pickup:</strong> {retreat.pickup_price_without}</p>
                        {retreat.pickup_available === "Yes" && retreat.pickup_price_with ? (
                          <p><strong>With pickup:</strong> {retreat.pickup_price_with}</p>
                        ) : null}
                        {retreat.pickup_info_text ? <p>{retreat.pickup_info_text}</p> : null}
                      </div>
                    </div>

                    {retreat.info_panel ? (
                      <div className="card card-soft-primary retreat-info-panel">
                        <p>{retreat.info_panel}</p>
                      </div>
                    ) : null}

                    {tags.length ? (
                      <div className="retreat-tags">
                        {tags.map((tag) => (
                          <span key={tag} className="badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="button-row">
                      <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => setSelectedRetreat(retreat)}
                      >
                        View Details
                      </button>
                      <button className="btn btn-primary" type="button" onClick={() => openDrawer(retreat)}>
                        Join Retreat
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">Registration Process</div>
          <h2>A careful and human process, designed with safety in mind.</h2>
          <p>
            Our retreats are safe spaces, and we want every participant to feel
            comfortable, respected, and well supported from the very beginning.
            That is why we follow a thoughtful registration process instead of a
            rushed checkout flow.
          </p>
          <p>
            Once you submit your interest, our team will reach out through a
            call or WhatsApp. This is followed by a short Aadhaar video
            verification step so we can help protect the quality, trust, and
            safety of the retreat space for everyone attending.
          </p>
          <p>
            If your spot is a good fit for the retreat, we will warmly guide you
            through the payment step and share all further updates with you over
            email and WhatsApp.
          </p>
          <p>Please note that payments, once made, are not refundable.</p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {selectedRetreat ? (
        <div className="modal-backdrop" onClick={() => setSelectedRetreat(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-topline">
              <span className="badge">{selectedRetreat.category}</span>
              {selectedRetreat.slots ? <span className="badge">{selectedRetreat.slots} slots</span> : null}
            </div>
            <h2>{selectedRetreat.title}</h2>
            <p className="retreat-subtitle">{selectedRetreat.subtitle}</p>
            <p>{selectedRetreat.details}</p>

            {parseQuotedBullets(selectedRetreat.detailed_bullets).length ? (
              <div className="modal-bullets">
                {parseQuotedBullets(selectedRetreat.detailed_bullets).map((item) => (
                  <p key={item}>✓ {item}</p>
                ))}
              </div>
            ) : null}

            <div className="retreat-meta-grid">
              <div className="card retreat-meta-card">
                <p><strong>Date:</strong> {formatDate(selectedRetreat.date)}</p>
                <p><strong>Start time:</strong> {selectedRetreat.start_time}</p>
                <p><strong>Duration:</strong> {selectedRetreat.duration}</p>
                <p><strong>Location:</strong> {selectedRetreat.location}</p>
              </div>
              <div className="card retreat-meta-card">
                <p><strong>Pickup available:</strong> {selectedRetreat.pickup_available}</p>
                <p><strong>Without pickup:</strong> {selectedRetreat.pickup_price_without}</p>
                {selectedRetreat.pickup_available === "Yes" && selectedRetreat.pickup_price_with ? (
                  <p><strong>With pickup:</strong> {selectedRetreat.pickup_price_with}</p>
                ) : null}
              </div>
            </div>

            <div className="button-row">
              <button className="btn btn-secondary" type="button" onClick={() => setSelectedRetreat(null)}>
                Close
              </button>
              <button className="btn btn-primary" type="button" onClick={() => {
                setSelectedRetreat(null);
                openDrawer(selectedRetreat);
              }}>
                Join Retreat
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {drawerOpen ? (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}>
          <aside className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            {formSubmitted ? (
              <div className="drawer-success">
                <div className="section-label">Submitted</div>
                <h2>Thank you for sharing your interest with us.</h2>
                <p>
                  You will receive a call or WhatsApp from our team, followed by a
                  video verification step. This helps us keep the retreat space
                  safe, respectful, and well held for everyone.
                </p>
                <p>
                  After our confirmation, we will guide you to the payment step and
                  share the next updates with you over email and WhatsApp.
                </p>
                <p>Please note that payments once made are not refundable.</p>
                <div className="button-row">
                  <button className="btn btn-primary" type="button" onClick={() => setDrawerOpen(false)}>
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="drawer-header">
                  <div>
                    <div className="section-label">Join Retreat</div>
                    <h2>
                      {activeJoinRetreat
                        ? `Join ${activeJoinRetreat.title}`
                        : "Share your details and we’ll take it from there."}
                    </h2>
                  </div>
                  <button className="drawer-close" type="button" onClick={() => setDrawerOpen(false)}>
                    ×
                  </button>
                </div>

                                <form
                  className="drawer-form"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitError("");
                    setSubmitting(true);

                    try {
                      const res = await fetch("/api/retreat-join", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          retreatTitle: activeJoinRetreat?.title ?? "",
                          retreatSlug: activeJoinRetreat?.slug ?? "",
                          firstName: formData.firstName,
                          lastName: formData.lastName,
                          email: formData.email,
                          phoneNumber: formData.phoneNumber,
                          aadharLast6: formData.aadharLast6,
                          pickupNeeded: formData.pickupNeeded,
                        }),
                      });

                      const data = await res.json();

                      if (!res.ok) {
                        throw new Error(data.error || "Something went wrong.");
                      }

                      setFormSubmitted(true);
                    } catch (error) {
                      setSubmitError(
                        error instanceof Error
                          ? error.message
                          : "Something went wrong."
                      );
                    } finally {
                      setSubmitting(false);
                    }
                  }}
                >
                  <div className="form-grid">
                    <label>
                      First name
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            firstName: e.target.value,
                          }))
                        }
                        required
                      />
                    </label>
                    <label>
                      Last name
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            lastName: e.target.value,
                          }))
                        }
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Email
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                    />
                  </label>

                  <label>
                    Phone number
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phoneNumber: e.target.value,
                        }))
                      }
                      required
                    />
                  </label>

                  <label>
                    Last 6 digits of Aadhaar
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="\d{6}"
                      maxLength={6}
                      value={formData.aadharLast6}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          aadharLast6: e.target.value.replace(/\D/g, "").slice(0, 6),
                        }))
                      }
                      required
                    />
                    <span className="field-help">
                      Our retreats are safe spaces and we care deeply about the
                      right fit for everyone. We’ll do a short video call to verify
                      that you are the person joining. In that call, we may ask you
                      to show your Aadhaar card. We do not store the conversation,
                      recording, or screenshots.
                    </span>
                  </label>

                  <label>
                    Pickup needed?
                    <select
                      value={formData.pickupNeeded}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          pickupNeeded: e.target.value,
                        }))
                      }
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </label>

                  {submitError ? <p className="form-error">{submitError}</p> : null}

                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </>
            )}
          </aside>
        </div>
      ) : null}
    </div>
  );
}