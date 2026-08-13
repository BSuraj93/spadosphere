"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { initMixpanel, trackEvent } from "@/lib/analytics";

interface Question {
  question_id: string | number;
  question_text: string;
  axis_target: string;
  target_archetype: string;
  weight_sa: number;
  weight_a: number;
  weight_d: number;
  weight_sd: number;
}

interface ArchetypeCore {
  archetype_id: string;
  archetype_name: string;
  tagline: string;
  core_summary: string;
  superpowers: string;
  blind_spots: string;
}

interface RolePersonalization {
  combo_key?: string;
  archetype_id?: string;
  user_type?: string;
  ideal_careers_industries?: string;
  actionable_steps?: string;
  growth_unlocked?: string;
}

const likertOptions = [
  { label: "Strongly Agree", value: "SA", weightKey: "weight_sa" as const },
  { label: "Agree", value: "A", weightKey: "weight_a" as const },
  { label: "Disagree", value: "D", weightKey: "weight_d" as const },
  { label: "Strongly Disagree", value: "SD", weightKey: "weight_sd" as const },
];

const roleOptions = [
  { id: "aspiring_founder", label: "Founder / Entrepreneur", desc: "Building ventures, teams, and products from 0 to 1" },
  { id: "passionate_builder", label: "Builder / Maker", desc: "Engineers, designers, product managers, and craftspeople" },
  { id: "working_professional", label: "Working Professional", desc: "Navigating corporate growth, execution, and strategy" },
  { id: "student", label: "Student / Academic", desc: "Focusing on learning, career direction, and skill expansion" },
  { id: "homemaker", label: "Homemaker / Independent Operator", desc: "Managing projects, lives, and high-autonomy operations" },
];

export default function IammeQuizPage() {
  const [currentStep, setCurrentStep] = useState<"onboarding" | "questions" | "results">("onboarding");
  const [userName, setUserName] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string | number, { score: number; target_archetype: string }>>({});

  const [questions, setQuestions] = useState<Question[]>([]);
  const [archetypes, setArchetypes] = useState<ArchetypeCore[]>([]);
  const [rolePersonalizations, setRolePersonalizations] = useState<RolePersonalization[]>([]);

  const [computedArchetype, setComputedArchetype] = useState<ArchetypeCore | null>(null);
  const [computedPersonalization, setComputedPersonalization] = useState<RolePersonalization | null>(null);

  useEffect(() => {
    initMixpanel();
    trackEvent("IAMME Quiz Started");

    fetch("/api/iamme-cms")
      .then((res) => {
        if (!res.ok) throw new Error("CMS API unavailable");
        return res.json();
      })
      .then((data) => {
        if (data.questions && data.questions.length > 0) setQuestions(data.questions);
        if (data.archetypes) setArchetypes(data.archetypes);
        if (data.rolePersonalizations) setRolePersonalizations(data.rolePersonalizations);
      })
      .catch((err) => console.error("CMS Fetch error:", err));
  }, []);

  const replaceTemplateVariables = (str: string) => {
    if (!str || typeof str !== "string") return "";
    const roleLabel = roleOptions.find((r) => r.id === selectedRole)?.label || selectedRole;
    return str
      .replaceAll("{name}", userName)
      .replaceAll("{user}", userName)
      .replaceAll("{user_type}", roleLabel)
      .replaceAll("{role}", roleLabel);
  };

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !selectedRole) return;

    trackEvent("IAMME Onboarding Completed", { name: userName, role: selectedRole });
    setCurrentStep("questions");
  };

  const calculateFinalResults = (finalAnswers: Record<string | number, { score: number; target_archetype: string }>) => {
    // 1. Tab 1 Scoring: Aggregate scores by target archetype
    const scoreMap: Record<string, number> = {};
    Object.values(finalAnswers).forEach((ans) => {
      const archKey = (ans.target_archetype || "").trim().toUpperCase();
      scoreMap[archKey] = (scoreMap[archKey] || 0) + (ans.score || 0);
    });

    // 2. Identify winning Archetype ID
    let winningArchetypeId = "VA";
    let maxScore = -Infinity;

    Object.entries(scoreMap).forEach(([archId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winningArchetypeId = archId;
      }
    });

    // 3. Extract Tab 2 Core Archetype details
    const foundArchetype = archetypes.find(
      (a) => (a.archetype_id || "").trim().toUpperCase() === winningArchetypeId
    ) || archetypes[0];

    // 4. Extract Tab 3 Personalization details matching combo_key (e.g., "VA_aspiring_founder")
    const expectedComboKey = `${winningArchetypeId}_${selectedRole}`.toLowerCase();
    const foundPersonalization = rolePersonalizations.find((rp) => {
      const key = (rp.combo_key || `${rp.archetype_id}_${rp.user_type}`).toLowerCase();
      return key === expectedComboKey;
    });

    setComputedArchetype({
      archetype_id: winningArchetypeId,
      archetype_name: replaceTemplateVariables(foundArchetype?.archetype_name || "Visionary Architect"),
      tagline: replaceTemplateVariables(foundArchetype?.tagline || ""),
      core_summary: replaceTemplateVariables(foundArchetype?.core_summary || ""),
      superpowers: replaceTemplateVariables(foundArchetype?.superpowers || ""),
      blind_spots: replaceTemplateVariables(foundArchetype?.blind_spots || ""),
    });

    setComputedPersonalization({
      combo_key: `${winningArchetypeId}_${selectedRole}`,
      archetype_id: winningArchetypeId,
      user_type: selectedRole,
      ideal_careers_industries: replaceTemplateVariables(foundPersonalization?.ideal_careers_industries || ""),
      actionable_steps: replaceTemplateVariables(foundPersonalization?.actionable_steps || ""),
      growth_unlocked: replaceTemplateVariables(foundPersonalization?.growth_unlocked || ""),
    });
  };

  const handleLikertSelect = (option: typeof likertOptions[number]) => {
    const currentQ = questions[currentQuestionIndex];
    const score = Number(currentQ[option.weightKey]) || 0;

    const updatedAnswers = {
      ...answers,
      [currentQ.question_id]: {
        score,
        target_archetype: currentQ.target_archetype,
      },
    };
    setAnswers(updatedAnswers);

    trackEvent("IAMME Question Answered", {
      question_id: currentQ.question_id,
      choice: option.value,
      score: score,
    });

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateFinalResults(updatedAnswers);
      trackEvent("IAMME Quiz Completed", {
        user_name: userName,
        user_role: selectedRole,
      });
      setCurrentStep("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQ = questions[currentQuestionIndex];
  const progressPercent = questions.length > 0 ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100) : 0;
  const currentRoleLabel = roleOptions.find((r) => r.id === selectedRole)?.label || selectedRole;

  // Render career items in styled card chips
  const renderCareerCards = (careersString: string) => {
    if (!careersString) return <p style={{ color: "#777" }}>No specific career list provided in CMS.</p>;

    const list = careersString
      .split(/,|\n/)
      .map((c) => c.trim().replace(/^[-•*]\s*/, ""))
      .filter(Boolean);

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
        {list.map((item, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              padding: "0.75rem 1.25rem",
              backgroundColor: "#ffffff",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              fontSize: "0.95rem",
              fontWeight: "600",
            }}
          >
            🎯 {item}
          </div>
        ))}
      </div>
    );
  };

  // Convert HTML line breaks <br> from Excel cells into react paragraphs/lines
  const renderActionableSteps = (stepsString: string) => {
    if (!stepsString) return <p style={{ color: "#777" }}>No actionable steps defined.</p>;

    const steps = stepsString.split(/<br\s*\/?>|\n/gi).filter((s) => s.trim().length > 0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "1rem" }}>
        {steps.map((step, idx) => (
          <div key={idx} style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
            {step.trim()}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="section">
      {/* Step 1: Onboarding */}
      {currentStep === "onboarding" && (
        <div className="card card-soft-primary" style={{ maxWidth: "750px", margin: "0 auto" }}>
          <div className="section-label">Step 1 of 2 · Personalization</div>
          <h2>Welcome to the IAMME Assessment</h2>
          <p>Tell us a bit about yourself so we can tailor your exact strategic recommendations.</p>

          <form onSubmit={handleStartQuiz} style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label className="section-label" style={{ display: "block", marginBottom: "0.5rem" }}>
                YOUR NAME
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div>
              <label className="section-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                SELECT YOUR PRIMARY ROLE / OPERATIONAL LENS
              </label>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {roleOptions.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <div
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className="card"
                      style={{
                        cursor: "pointer",
                        padding: "1rem 1.25rem",
                        border: isSelected ? "2px solid var(--color-primary, #000)" : "1px solid rgba(0,0,0,0.1)",
                        backgroundColor: isSelected ? "rgba(0,0,0,0.02)" : "#fff",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <strong style={{ fontSize: "1.05rem" }}>{role.label}</strong>
                        {isSelected && <span style={{ fontWeight: "bold" }}>✓</span>}
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.25rem" }}>{role.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="button-row" style={{ marginTop: "1rem" }}>
              <button type="submit" className="btn btn-primary" disabled={!userName.trim() || !selectedRole}>
                Begin Assessment →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Step 2: Questions */}
      {currentStep === "questions" && currentQ && (
        <div className="card" style={{ maxWidth: "750px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
            <span className="section-label">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="section-label">{progressPercent}% Completed</span>
          </div>

          <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(0,0,0,0.08)", borderRadius: "3px", marginBottom: "2rem" }}>
            <div
              style={{
                width: `${progressPercent}%`,
                height: "100%",
                backgroundColor: "var(--color-primary, #000)",
                borderRadius: "3px",
                transition: "width 0.3s ease",
              }}
            />
          </div>

          <h2 style={{ fontSize: "1.35rem", lineHeight: "1.4", marginBottom: "2rem" }}>{currentQ.question_text}</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {likertOptions.map((opt) => (
              <button
                key={opt.value}
                className="btn btn-secondary"
                style={{ padding: "1.25rem 1rem", textAlign: "center", justifyContent: "center" }}
                onClick={() => handleLikertSelect(opt)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {currentQuestionIndex > 0 && (
            <div className="button-row" style={{ marginTop: "2rem" }}>
              <button className="btn" onClick={handlePrevious}>
                ← Previous Question
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Results View */}
      {currentStep === "results" && computedArchetype && computedPersonalization && (
        <div style={{ maxWidth: "950px", margin: "0 auto" }}>
          {/* Main Profile Header */}
          <div className="card card-soft-accent" style={{ marginBottom: "2.5rem", padding: "2.5rem" }}>
            <div className="section-label">IAMME STRATEGIC RHYTHM PROFILE</div>
            <h1 style={{ marginTop: "0.5rem", fontSize: "2.25rem" }}>{userName}'s Results</h1>
            <p className="section-label" style={{ marginTop: "0.25rem" }}>
              ROLE LENS: {currentRoleLabel.toUpperCase()}
            </p>

            <hr style={{ margin: "1.5rem 0", borderColor: "rgba(0,0,0,0.1)" }} />

            <span className="section-label">CORE ARCHETYPE</span>
            <h2 style={{ fontSize: "2.25rem", marginTop: "0.25rem" }}>{computedArchetype.archetype_name}</h2>
            <p style={{ fontStyle: "italic", fontWeight: "500", marginTop: "0.25rem", fontSize: "1.1rem" }}>
              "{computedArchetype.tagline}"
            </p>
            <p style={{ marginTop: "1rem", lineHeight: "1.65", fontSize: "1.05rem" }}>{computedArchetype.core_summary}</p>
          </div>

          {/* Superpowers */}
          <div className="card" style={{ marginBottom: "1.5rem", padding: "2rem", borderLeft: "5px solid #10b981" }}>
            <div className="section-label" style={{ color: "#059669" }}>
              ⚡ SUPERPOWERS
            </div>
            <h3 style={{ marginTop: "0.25rem" }}>Where You Excel</h3>
            <p style={{ marginTop: "0.75rem", lineHeight: "1.6", fontSize: "1.05rem" }}>
              {computedArchetype.superpowers}
            </p>
          </div>

          {/* Blind Spots */}
          <div className="card" style={{ marginBottom: "2.5rem", padding: "2rem", borderLeft: "5px solid #f59e0b" }}>
            <div className="section-label" style={{ color: "#d97706" }}>
              ⚠️ BLIND SPOTS
            </div>
            <h3 style={{ marginTop: "0.25rem" }}>What to Watch For</h3>
            <p style={{ marginTop: "0.75rem", lineHeight: "1.6", fontSize: "1.05rem" }}>
              {computedArchetype.blind_spots}
            </p>
          </div>

          {/* Role Personalizations from Tab 3 */}
          <div className="card card-soft-primary" style={{ marginBottom: "2.5rem", padding: "2.5rem", borderRadius: "16px" }}>
            <div className="section-label" style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              STRATEGIC OPERATIONAL ROADMAP
            </div>
            <h2 style={{ marginTop: "0.25rem", fontSize: "1.85rem" }}>
              Tailored Insights for {currentRoleLabel}
            </h2>
            <p style={{ marginTop: "0.5rem", color: "#444" }}>
              Personalized guidance derived directly for {userName} based on your {computedArchetype.archetype_name} profile.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginTop: "2rem" }}>
              {/* Tab 3: Ideal Careers */}
              <div className="card" style={{ backgroundColor: "#ffffff", padding: "1.75rem" }}>
                <div className="section-label">IDEAL PATHWAYS / DOMAINS</div>
                <h3 style={{ marginTop: "0.25rem" }}>Ideal Career or Domain Pathways & High-Impact Opportunities</h3>
                {renderCareerCards(computedPersonalization.ideal_careers_industries || "")}
              </div>

              {/* Tab 3: Actionable Steps */}
              <div className="card" style={{ backgroundColor: "#ffffff", padding: "1.75rem" }}>
                <div className="section-label">ACTION PLAN</div>
                <h3 style={{ marginTop: "0.25rem" }}>Actionable Strategic Steps</h3>
                {renderActionableSteps(computedPersonalization.actionable_steps || "")}
              </div>

              {/* Tab 3: Growth Unlocked */}
              <div className="card" style={{ backgroundColor: "#ffffff", padding: "1.75rem" }}>
                <div className="section-label">GROWTH UNLOCKED</div>
                <h3 style={{ marginTop: "0.25rem" }}>Your Growth Trajectory</h3>
                <p style={{ marginTop: "0.75rem", lineHeight: "1.65", fontSize: "1.02rem" }}>
                  {computedPersonalization.growth_unlocked || "No growth parameters defined."}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Action Row */}
          <div className="button-row" style={{ justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
            <Link href="/iamme-personality-test" className="btn btn-primary">
              Return to Overview
            </Link>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setCurrentStep("onboarding");
                setCurrentQuestionIndex(0);
                setAnswers({});
              }}
            >
              Retake Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
}