"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import CmsTopNav from "../../../components/cms/CmsTopNav";

type CmsTab = "home" | "blogs" | "case-studies" | "retreats";
type RetreatView = "list" | "editor";
type RetreatStatus = "Live" | "Draft";
type ConfirmAction = "publish" | "delete" | null;

type RetreatRecord = {
  id: string;
  title: string;
  category: string | null;
  subtitle: string | null;
  slots: number | null;
  featured_image_url: string | null;
  featured_image_path: string | null;
  highlight_intro: string | null;
  bullet_1: string | null;
  bullet_2: string | null;
  bullet_3: string | null;
  detailed_bullets: string | null;
  details: string | null;
  pickup_available: "Yes" | "No" | null;
  pickup_info_text: string | null;
  pickup_price_with: string | null;
  pickup_price_without: string | null;
  info_panel: string | null;
  duration: string | null;
  location: string | null;
  date: string | null;
  start_time: string | null;
  slug: string | null;
  tags: string | null;
  likes: number | null;
  first_published_on: string | null;
  last_published_on: string | null;
  status: RetreatStatus;
  updated_at: string | null;
};

type RetreatForm = {
  id?: string;
  title: string;
  category: string;
  subtitle: string;
  slots: string;
  featuredImageUrl: string;
  featuredImagePath: string;
  highlightIntro: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  detailedBullets: string;
  details: string;
  pickupAvailable: "Yes" | "No";
  pickupInfoText: string;
  pickupPriceWith: string;
  pickupPriceWithout: string;
  infoPanel: string;
  duration: string;
  location: string;
  date: string;
  startTime: string;
  slug: string;
  tags: string;
};

const defaultPickupInfoText =
  "Pickup means you will be picked up and dropped at a central popular point - mostly metro stations. We will inform you the exact pickup location after booking is confirmed.";

const initialRetreatForm: RetreatForm = {
  id: undefined,
  title: "",
  category: "",
  subtitle: "",
  slots: "",
  featuredImageUrl: "",
  featuredImagePath: "",
  highlightIntro: "",
  bullet1: "",
  bullet2: "",
  bullet3: "",
  detailedBullets: "",
  details: "",
  pickupAvailable: "No",
  pickupInfoText: defaultPickupInfoText,
  pickupPriceWith: "",
  pickupPriceWithout: "",
  infoPanel: "",
  duration: "",
  location: "",
  date: "",
  startTime: "",
  slug: "",
  tags: "",
};

function formatDisplayDateTime(value: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  });
}

function mapRecordToForm(item: RetreatRecord): RetreatForm {
  return {
    id: item.id,
    title: item.title ?? "",
    category: item.category ?? "",
    subtitle: item.subtitle ?? "",
    slots: item.slots !== null && item.slots !== undefined ? String(item.slots) : "",
    featuredImageUrl: item.featured_image_url ?? "",
    featuredImagePath: item.featured_image_path ?? "",
    highlightIntro: item.highlight_intro ?? "",
    bullet1: item.bullet_1 ?? "",
    bullet2: item.bullet_2 ?? "",
    bullet3: item.bullet_3 ?? "",
    detailedBullets: item.detailed_bullets ?? "",
    details: item.details ?? "",
    pickupAvailable: item.pickup_available ?? "No",
    pickupInfoText: item.pickup_info_text ?? "",
    pickupPriceWith: item.pickup_price_with ?? "",
    pickupPriceWithout: item.pickup_price_without ?? "",
    infoPanel: item.info_panel ?? "",
    duration: item.duration ?? "",
    location: item.location ?? "",
    date: item.date ?? "",
    startTime: item.start_time ?? "",
    slug: item.slug ?? "",
    tags: item.tags ?? "",
  };
}

export default function CmsPage() {
  const [activeTab, setActiveTab] = useState<CmsTab>("home");
  const [retreatView, setRetreatView] = useState<RetreatView>("list");
  const [form, setForm] = useState<RetreatForm>(initialRetreatForm);
  const [retreatErrors, setRetreatErrors] = useState<Record<string, string>>({});
  const [retreatMessage, setRetreatMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState<ConfirmAction>(null);
  const [editorMode, setEditorMode] = useState<"create" | "edit">("create");
  const [editorStatus, setEditorStatus] = useState<"draft" | "live">("draft");
  const [retreats, setRetreats] = useState<RetreatRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const topMessageRef = useRef<HTMLDivElement | null>(null);
  const fieldRefs = useRef<
    Record<string, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>
  >({});

  const stats = useMemo(
    () => ({
      activeBlogs: 0,
      activeCaseStudies: 0,
      upcomingRetreats: retreats.filter((item) => item.status === "Live").length,
    }),
    [retreats]
  );

  const showHome = activeTab === "home";
  const showRetreatList = activeTab === "retreats" && retreatView === "list";
  const showRetreatEditor = activeTab === "retreats" && retreatView === "editor";

  const currentEditedRetreat = useMemo(
    () => retreats.find((item) => item.id === form.id) ?? null,
    [retreats, form.id]
  );

  const statusMessage =
    editorStatus === "live"
      ? `Last published on ${formatDisplayDateTime(
          currentEditedRetreat?.last_published_on ?? null
        )}`
      : `Draft last saved on ${formatDisplayDateTime(
          currentEditedRetreat?.updated_at ?? null
        )}`;

  const scrollToTopMessage = () => {
    requestAnimationFrame(() => {
      topMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const scrollToFirstError = (errors: Record<string, string>) => {
    const firstKey = Object.keys(errors)[0];
    if (!firstKey) return;

    const el = fieldRefs.current[firstKey];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        el.focus();
      }, 120);
    }
  };

  const loadRetreats = async () => {
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/retreats", { cache: "no-store" });
      const json = await res.json();

      if (!res.ok) {
        setRetreatMessage(json.error || "Could not load retreats.");
        return;
      }

      setRetreats(json.items || []);
    } catch {
      setRetreatMessage("Could not load retreats.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRetreats();
  }, []);

  const setField = <K extends keyof RetreatForm>(field: K, value: RetreatForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setRetreatErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleImageUpload = async (file: File | null) => {
    if (!file) return;

    setIsUploadingImage(true);
    setRetreatMessage("");

    try {
      const body = new FormData();
      body.append("file", file);

      const res = await fetch("/api/admin/retreats/upload", {
        method: "POST",
        body,
      });

      const json = await res.json();

      if (!res.ok) {
        setRetreatMessage(json.error || "Image upload failed.");
        scrollToTopMessage();
        return;
      }

      setForm((prev) => ({
        ...prev,
        featuredImageUrl: json.url,
        featuredImagePath: json.path,
      }));

      setRetreatMessage("Featured image uploaded successfully.");
      scrollToTopMessage();
    } catch {
      setRetreatMessage("Image upload failed.");
      scrollToTopMessage();
    } finally {
      setIsUploadingImage(false);
    }
  };

  const openRetreatCreate = () => {
    setActiveTab("retreats");
    setRetreatView("editor");
    setEditorMode("create");
    setEditorStatus("draft");
    setForm(initialRetreatForm);
    setRetreatErrors({});
    setRetreatMessage("");
    setConfirmAction(null);
  };

  const openRetreatList = async () => {
    setActiveTab("retreats");
    setRetreatView("list");
    setRetreatErrors({});
    setConfirmAction(null);
    await loadRetreats();
    scrollToTopMessage();
  };

  const openRetreatEdit = (item: RetreatRecord) => {
    setActiveTab("retreats");
    setRetreatView("editor");
    setEditorMode("edit");
    setEditorStatus(item.status === "Live" ? "live" : "draft");
    setForm(mapRecordToForm(item));
    setRetreatErrors({});
    setRetreatMessage("");
    setConfirmAction(null);
    scrollToTopMessage();
  };

  const handleSaveDraft = async () => {
    if (!form.title.trim()) {
      const errors = { title: "Title is required to save a draft." };
      setRetreatErrors(errors);
      setRetreatMessage("Please correct the errors to continue.");
      scrollToFirstError(errors);
      return;
    }

    setRetreatErrors({});
    setRetreatMessage("");

    try {
      const res = await fetch("/api/admin/retreats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          slots: form.slots.trim() ? Number(form.slots) : null,
          status: "Draft",
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        if (json.fieldErrors) {
          setRetreatErrors(json.fieldErrors);
          setRetreatMessage("Please correct the errors to continue.");
          scrollToFirstError(json.fieldErrors);
          return;
        }

        setRetreatMessage(json.error || "Draft could not be saved.");
        scrollToTopMessage();
        return;
      }

      setForm(mapRecordToForm(json.item));
      setEditorMode("edit");
      setEditorStatus("draft");
      setRetreatMessage("Draft saved successfully.");
      await loadRetreats();
      scrollToTopMessage();
    } catch {
      setRetreatMessage("Draft could not be saved.");
      scrollToTopMessage();
    }
  };

  const handlePublishClick = () => {
    const errors: Record<string, string> = {};

    const requiredFields: (keyof RetreatForm)[] = [
      "title",
      "category",
      "subtitle",
      "featuredImageUrl",
      "highlightIntro",
      "bullet1",
      "bullet2",
      "bullet3",
      "detailedBullets",
      "details",
      "pickupInfoText",
      "pickupPriceWithout",
      "duration",
      "location",
      "date",
      "startTime",
      "slug",
      "tags",
    ];

    requiredFields.forEach((field) => {
      const value = form[field];

      if (typeof value !== "string" || !value.trim()) {
        errors[field] = "This field is required to publish.";
      }
    });

    if (form.pickupAvailable === "Yes" && !form.pickupPriceWith.trim()) {
      errors.pickupPriceWith = "This field is required when pickup is available.";
    }

        const slotsValue = Number(form.slots);

    if (!form.slots.trim() || Number.isNaN(slotsValue) || slotsValue <= 0) {
      errors.slots = "Please enter a valid number of slots.";
    }

    setRetreatErrors(errors);

    if (Object.keys(errors).length > 0) {
      setRetreatMessage("Please correct the errors to continue.");
      scrollToFirstError(errors);
      return;
    }

    setRetreatMessage("");
    setConfirmAction("publish");
  };

  const handleDeleteClick = () => {
    if (!form.id) {
      setRetreatMessage("Please save the retreat first before deleting.");
      scrollToTopMessage();
      return;
    }

    setConfirmAction("delete");
  };

  const handleConfirmAction = async () => {
    if (confirmAction === "publish") {
      try {
        const res = await fetch("/api/admin/retreats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            slots: form.slots.trim() ? Number(form.slots) : null,
            status: "Live",
          }),
        });

        const json = await res.json();

        if (!res.ok) {
          if (json.fieldErrors) {
            setRetreatErrors(json.fieldErrors);
            setRetreatMessage("Please correct the errors to continue.");
            setConfirmAction(null);
            scrollToFirstError(json.fieldErrors);
            return;
          }

          setRetreatMessage(json.error || "Retreat could not be published.");
          setConfirmAction(null);
          scrollToTopMessage();
          return;
        }

        setForm(mapRecordToForm(json.item));
        setEditorMode("edit");
        setEditorStatus("live");
        setRetreatMessage("Retreat published successfully.");
        setConfirmAction(null);
        await loadRetreats();
        scrollToTopMessage();
        return;
      } catch {
        setRetreatMessage("Retreat could not be published.");
        setConfirmAction(null);
        scrollToTopMessage();
        return;
      }
    }

    if (confirmAction === "delete") {
      try {
        const res = await fetch(`/api/admin/retreats?id=${form.id}`, {
          method: "DELETE",
        });

        const json = await res.json();

        if (!res.ok) {
          setRetreatMessage(json.error || "Retreat could not be deleted.");
          setConfirmAction(null);
          scrollToTopMessage();
          return;
        }

        setConfirmAction(null);
        setRetreatMessage("Retreat deleted successfully.");
        setForm(initialRetreatForm);
        setRetreatErrors({});
        setRetreatView("list");
        setEditorMode("create");
        setEditorStatus("draft");
        await loadRetreats();
        scrollToTopMessage();
      } catch {
        setRetreatMessage("Retreat could not be deleted.");
        setConfirmAction(null);
        scrollToTopMessage();
      }
    }
  };

  return (
    <div className="cms-fullbleed-shell">
      <CmsTopNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setConfirmAction(null);
          setRetreatErrors({});
          setRetreatMessage("");
          setRetreatView("list");
          if (tab === "retreats") {
            loadRetreats();
          }
        }}
      />

      <main className="cms-fullbleed-main">
        <div className="cms-fullbleed-content">
          <div ref={topMessageRef} />

          {showHome && (
            <section className="cms-home">
              <div className="cms-home-hero">
                <div>
                  <div className="cms-section-eyebrow">Admin home</div>
                  <h1 className="cms-page-title">Content management system</h1>
                  <p className="cms-page-copy">
                    Create and manage blogs, case studies, and retreats from one place.
                    This is the CMS landing page for the password-protected admin area.
                  </p>
                </div>

                <div className="cms-home-actions">
                  <button
                    type="button"
                    className="cms-primary-action"
                    onClick={() => setActiveTab("blogs")}
                  >
                    Create blog
                  </button>

                  <button
                    type="button"
                    className="cms-primary-action"
                    onClick={() => setActiveTab("case-studies")}
                  >
                    Create case study
                  </button>

                  <button
                    type="button"
                    className="cms-primary-action"
                    onClick={openRetreatCreate}
                  >
                    Create retreat
                  </button>
                </div>
              </div>

              <div className="cms-stats-grid">
                <article className="cms-stat-tile">
                  <div className="cms-stat-label">Active blogs</div>
                  <div className="cms-stat-value">{stats.activeBlogs}</div>
                  <p className="cms-stat-note">
                    Published blog articles currently live on the website.
                  </p>
                </article>

                <article className="cms-stat-tile">
                  <div className="cms-stat-label">Active case studies</div>
                  <div className="cms-stat-value">{stats.activeCaseStudies}</div>
                  <p className="cms-stat-note">
                    Published case studies currently visible to users.
                  </p>
                </article>

                <article className="cms-stat-tile">
                  <div className="cms-stat-label">Upcoming retreats</div>
                  <div className="cms-stat-value">{stats.upcomingRetreats}</div>
                  <p className="cms-stat-note">
                    Retreat entries that are live and scheduled ahead.
                  </p>
                </article>
              </div>
            </section>
          )}

          {activeTab === "blogs" && (
            <section className="cms-section-card">
              <div className="cms-section-eyebrow">Phase 2</div>
              <h1 className="cms-page-title">Blogs</h1>
              <p className="cms-page-copy">
                Blogs module placeholder. This tab will later hold listing, filters,
                pagination, and blog create/edit actions.
              </p>
            </section>
          )}

          {activeTab === "case-studies" && (
            <section className="cms-section-card">
              <div className="cms-section-eyebrow">Phase 2</div>
              <h1 className="cms-page-title">Case Studies</h1>
              <p className="cms-page-copy">
                Case Studies module placeholder. This tab will later hold listing,
                filters, pagination, and create/edit actions.
              </p>
            </section>
          )}

          {showRetreatList && (
            <section className="cms-module">
              <div className="cms-module-head">
                <div>
                  <div className="cms-section-eyebrow">Phase 1</div>
                  <h1 className="cms-page-title">Retreats</h1>
                  <p className="cms-page-copy">
                    Active retreats are listed here. Draft retreats can be filtered
                    using the controls below.
                  </p>
                </div>

                <button
                  type="button"
                  className="cms-primary-action cms-inline-action"
                  onClick={openRetreatCreate}
                >
                  Create retreat
                </button>
              </div>

              {retreatMessage && <div className="cms-success-banner">{retreatMessage}</div>}

              <div className="cms-filters">
                <label className="cms-field">
                  <span>Search by keyword</span>
                  <input type="text" placeholder="Search retreats" />
                </label>

                <label className="cms-field">
                  <span>Status</span>
                  <select defaultValue="All">
                    <option>All</option>
                    <option>Live</option>
                    <option>Draft</option>
                  </select>
                </label>

                <label className="cms-field">
                  <span>Last publish date from</span>
                  <input type="date" />
                </label>

                <label className="cms-field">
                  <span>Last publish date to</span>
                  <input type="date" />
                </label>

                <button type="button" className="cms-filter-btn">
                  Apply filters
                </button>
              </div>

              <div className="cms-table-wrap">
                {isLoading ? (
                  <div className="cms-empty-state">Loading retreats...</div>
                ) : retreats.length === 0 ? (
                  <div className="cms-empty-state">0 items to show</div>
                ) : (
                  <table className="cms-table">
                    <thead>
                      <tr>
                        <th>Retreat title</th>
                        <th>No. of slots</th>
                        <th>Image</th>
                        <th>Likes</th>
                        <th>First published on</th>
                        <th>Last published on</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {retreats.map((item) => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.slots ?? "-"}</td>
                          <td>
                            {item.featured_image_url ? (
                              <img
                                src={item.featured_image_url}
                                alt={item.title}
                                className="cms-table-thumb"
                              />
                            ) : (
                              "-"
                            )}
                          </td>
                          <td>{item.likes ?? 0}</td>
                          <td>{formatDisplayDateTime(item.first_published_on)}</td>
                          <td>{formatDisplayDateTime(item.last_published_on)}</td>
                          <td>
                            <span
                              className={`cms-status ${
                                item.status === "Live" ? "is-live" : "is-draft"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td>
                            <div className="cms-row-actions">
                              <button type="button" onClick={() => openRetreatEdit(item)}>
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={async () => {
                                  setForm(mapRecordToForm(item));
                                  setConfirmAction("delete");
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>

              <div className="cms-pagination">
                <div className="cms-pagination-info">
                  Showing {retreats.length} retreat{retreats.length === 1 ? "" : "s"}
                </div>

                <label className="cms-field cms-page-size">
                  <span>Items per page</span>
                  <select defaultValue="10">
                    <option>10</option>
                    <option>25</option>
                  </select>
                </label>
              </div>
            </section>
          )}

          {showRetreatEditor && (
            <section className="cms-editor">
              <div className="cms-editor-head">
                <div>
                  <div className="cms-section-eyebrow">Retreat editor</div>
                  <h1 className="cms-page-title">
                    {editorMode === "create" ? "Create retreat" : "Edit retreat"}
                  </h1>
                  <p className="cms-page-copy">{statusMessage}</p>
                </div>

                <button
                  type="button"
                  className="cms-secondary-action"
                  onClick={openRetreatList}
                >
                  Back to list
                </button>
              </div>

              {retreatMessage && <div className="cms-success-banner">{retreatMessage}</div>}

              <p className="cms-action-hint">
                Save Draft keeps the retreat private. Publish requires all required fields.
              </p>

              <div className="cms-form-grid">
                <label className="cms-field">
                  <span>Title</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.title = el;
                    }}
                    value={form.title}
                    onChange={(e) => setField("title", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.title && (
                    <small className="cms-error-text">{retreatErrors.title}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Category</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.category = el;
                    }}
                    value={form.category}
                    onChange={(e) => setField("category", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.category && (
                    <small className="cms-error-text">{retreatErrors.category}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Subtitle</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.subtitle = el;
                    }}
                    value={form.subtitle}
                    onChange={(e) => setField("subtitle", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.subtitle && (
                    <small className="cms-error-text">{retreatErrors.subtitle}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>No. of slots</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.slots = el;
                    }}
                    value={form.slots}
                    onChange={(e) => setField("slots", e.target.value)}
                    type="number"
                    min="1"
                  />
                  {retreatErrors.slots && (
                    <small className="cms-error-text">{retreatErrors.slots}</small>
                  )}
                </label>

                <label className="cms-field cms-span-2">
                  <span>Featured image</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.featuredImageUrl = el;
                    }}
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp"
                    onChange={(e) => handleImageUpload(e.target.files?.[0] ?? null)}
                  />
                  {isUploadingImage && (
                    <small className="cms-upload-note">Uploading image...</small>
                  )}
                  {form.featuredImageUrl && (
                    <div className="cms-image-preview-wrap">
                      <img
                        src={form.featuredImageUrl}
                        alt="Featured preview"
                        className="cms-image-preview"
                      />
                    </div>
                  )}
                  {retreatErrors.featuredImageUrl && (
                    <small className="cms-error-text">{retreatErrors.featuredImageUrl}</small>
                  )}
                </label>

                <label className="cms-field cms-span-2">
                  <span>Highlight intro</span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.highlightIntro = el;
                    }}
                    rows={3}
                    value={form.highlightIntro}
                    onChange={(e) => setField("highlightIntro", e.target.value)}
                  />
                  {retreatErrors.highlightIntro && (
                    <small className="cms-error-text">{retreatErrors.highlightIntro}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Bullet 1</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.bullet1 = el;
                    }}
                    value={form.bullet1}
                    onChange={(e) => setField("bullet1", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.bullet1 && (
                    <small className="cms-error-text">{retreatErrors.bullet1}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Bullet 2</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.bullet2 = el;
                    }}
                    value={form.bullet2}
                    onChange={(e) => setField("bullet2", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.bullet2 && (
                    <small className="cms-error-text">{retreatErrors.bullet2}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Bullet 3</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.bullet3 = el;
                    }}
                    value={form.bullet3}
                    onChange={(e) => setField("bullet3", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.bullet3 && (
                    <small className="cms-error-text">{retreatErrors.bullet3}</small>
                  )}
                </label>

                <label className="cms-field cms-span-2">
                  <span>Detailed bullets</span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.detailedBullets = el;
                    }}
                    rows={4}
                    value={form.detailedBullets}
                    onChange={(e) => setField("detailedBullets", e.target.value)}
                    placeholder='Example: "Quiet nature walks" "Founder reflection circles" "Shared meals"'
                  />
                  {retreatErrors.detailedBullets && (
                    <small className="cms-error-text">{retreatErrors.detailedBullets}</small>
                  )}
                </label>

                <label className="cms-field cms-span-2">
                  <span>Details</span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.details = el;
                    }}
                    rows={6}
                    value={form.details}
                    onChange={(e) => setField("details", e.target.value)}
                    placeholder="Rich text editor placeholder"
                  />
                  {retreatErrors.details && (
                    <small className="cms-error-text">{retreatErrors.details}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Pickup available</span>
                  <select
                    ref={(el) => {
                      fieldRefs.current.pickupAvailable = el;
                    }}
                    value={form.pickupAvailable}
                    onChange={(e) =>
                      setField("pickupAvailable", e.target.value as "Yes" | "No")
                    }
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </label>

                <label className="cms-field cms-span-2">
                  <span>Pickup info text</span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.pickupInfoText = el;
                    }}
                    rows={3}
                    value={form.pickupInfoText}
                    onChange={(e) => setField("pickupInfoText", e.target.value)}
                  />
                  {retreatErrors.pickupInfoText && (
                    <small className="cms-error-text">{retreatErrors.pickupInfoText}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>With pickup price</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.pickupPriceWith = el;
                    }}
                    value={form.pickupPriceWith}
                    onChange={(e) => setField("pickupPriceWith", e.target.value)}
                    type="text"
                    disabled={form.pickupAvailable !== "Yes"}
                  />
                  {retreatErrors.pickupPriceWith && (
                    <small className="cms-error-text">{retreatErrors.pickupPriceWith}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Without pickup price</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.pickupPriceWithout = el;
                    }}
                    value={form.pickupPriceWithout}
                    onChange={(e) => setField("pickupPriceWithout", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.pickupPriceWithout && (
                    <small className="cms-error-text">{retreatErrors.pickupPriceWithout}</small>
                  )}
                </label>

                <label className="cms-field cms-span-2">
                  <span>Info panel</span>
                  <textarea
                    ref={(el) => {
                      fieldRefs.current.infoPanel = el;
                    }}
                    rows={3}
                    value={form.infoPanel}
                    onChange={(e) => setField("infoPanel", e.target.value)}
                  />
                  {retreatErrors.infoPanel && (
                    <small className="cms-error-text">{retreatErrors.infoPanel}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Duration</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.duration = el;
                    }}
                    value={form.duration}
                    onChange={(e) => setField("duration", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.duration && (
                    <small className="cms-error-text">{retreatErrors.duration}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Location</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.location = el;
                    }}
                    value={form.location}
                    onChange={(e) => setField("location", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.location && (
                    <small className="cms-error-text">{retreatErrors.location}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Date</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.date = el;
                    }}
                    value={form.date}
                    onChange={(e) => setField("date", e.target.value)}
                    type="date"
                  />
                  {retreatErrors.date && (
                    <small className="cms-error-text">{retreatErrors.date}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Start time</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.startTime = el;
                    }}
                    value={form.startTime}
                    onChange={(e) => setField("startTime", e.target.value)}
                    type="time"
                  />
                  {retreatErrors.startTime && (
                    <small className="cms-error-text">{retreatErrors.startTime}</small>
                  )}
                </label>

                <label className="cms-field">
                  <span>Slug</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.slug = el;
                    }}
                    value={form.slug}
                    onChange={(e) => setField("slug", e.target.value)}
                    type="text"
                  />
                  {retreatErrors.slug && (
                    <small className="cms-error-text">{retreatErrors.slug}</small>
                  )}
                </label>

                <label className="cms-field cms-span-2">
                  <span>Tags</span>
                  <input
                    ref={(el) => {
                      fieldRefs.current.tags = el;
                    }}
                    value={form.tags}
                    onChange={(e) => setField("tags", e.target.value)}
                    type="text"
                    placeholder="comma,separated,tags"
                  />
                  {retreatErrors.tags && (
                    <small className="cms-error-text">{retreatErrors.tags}</small>
                  )}
                </label>
              </div>

              <div className="cms-editor-actions">
                <button
                  type="button"
                  className="cms-primary-action"
                  onClick={handleSaveDraft}
                  disabled={isUploadingImage}
                >
                  Save Draft
                </button>

                <button
                  type="button"
                  className="cms-secondary-action"
                  onClick={handlePublishClick}
                  disabled={isUploadingImage}
                >
                  Publish
                </button>

                <button
                  type="button"
                  className="cms-danger-action"
                  onClick={handleDeleteClick}
                  disabled={isUploadingImage}
                >
                  Delete
                </button>
              </div>

              {confirmAction && (
                <div className="cms-modal-backdrop" role="presentation">
                  <div
                    className="cms-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cms-confirm-title"
                  >
                    <h2 id="cms-confirm-title">
                      {confirmAction === "publish"
                        ? "Publish retreat?"
                        : "Delete retreat?"}
                    </h2>

                    <p>
                      {confirmAction === "publish"
                        ? "This retreat will become live on the website."
                        : "This will permanently remove the retreat from the database."}
                    </p>

                    <div className="cms-modal-actions">
                      <button
                        type="button"
                        className="cms-secondary-action"
                        onClick={() => setConfirmAction(null)}
                      >
                        Cancel
                      </button>

                      <button
                        type="button"
                        className={
                          confirmAction === "publish"
                            ? "cms-primary-action"
                            : "cms-danger-action"
                        }
                        onClick={handleConfirmAction}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}