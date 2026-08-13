import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    // Look for the Excel file in the project root or public directory
    const possiblePaths = [
      path.join(process.cwd(), "IAMME CMS.xlsx"),
      path.join(process.cwd(), "IAMME CMS_3.xlsx"),
      path.join(process.cwd(), "public", "IAMME CMS.xlsx"),
      path.join(process.cwd(), "public", "IAMME CMS_3.xlsx"),
    ];

    let fileBuffer: Buffer | null = null;

    for (const p of possiblePaths) {
      try {
        fileBuffer = await fs.readFile(p);
        if (fileBuffer) break;
      } catch {
        // Continue searching other paths if file isn't found at this exact location
      }
    }

    if (fileBuffer) {
      // Parse using buffer instead of directly reading from disk path
      const workbook = XLSX.read(fileBuffer, { type: "buffer" });

      const questions = XLSX.utils.sheet_to_json(
        workbook.Sheets["Questions_Master"] || workbook.Sheets[workbook.SheetNames[0]]
      );
      const archetypes = XLSX.utils.sheet_to_json(
        workbook.Sheets["Archetypes_Core"] || workbook.Sheets[workbook.SheetNames[1]]
      );
      const rolePersonalizations = XLSX.utils.sheet_to_json(
        workbook.Sheets["Role_Personalizations"] || workbook.Sheets[workbook.SheetNames[2]]
      );

      return NextResponse.json({ questions, archetypes, rolePersonalizations });
    }
  } catch (error) {
    console.warn("Error parsing Excel CMS file:", error);
  }

  // Fallback structure matching Excel sheets if file is missing
  return NextResponse.json({
    questions: [
      { question_id: "Q01", question_text: "I recharge and generate my best ideas in solitude before sharing them with others.", axis_target: "Inspiration", target_archetype: "VA", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q02", question_text: "High-energy collaboration and brain-dumping with others energize me more than quiet solo reflection.", axis_target: "Inspiration", target_archetype: "KC", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q03", question_text: "I prefer launching an early version quickly to test in the real world rather than spending weeks perfecting a plan.", axis_target: "Action", target_archetype: "KC", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q04", question_text: "I feel uncomfortable taking action until I have thoroughly mapped out potential risks and scenarios.", axis_target: "Action", target_archetype: "VA", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q05", question_text: "When faced with chaos or ambiguity, my natural reaction is to create structured systems and repeatable workflows.", axis_target: "Mental Structure", target_archetype: "SA", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q06", question_text: "Rigid structures frustrate me; I deliver my best outcomes when I have full freedom to improvise and adapt freely.", axis_target: "Mental Structure", target_archetype: "IC", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q07", question_text: "Crafting something with exceptional depth, visual harmony, and high quality matters more to me than mass volume or fast scaling.", axis_target: "Motivation", target_archetype: "IC", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q08", question_text: "I am fueled primarily by tangible momentum and visible real-world impact, even if the underlying process gets a little messy.", axis_target: "Motivation", target_archetype: "KC", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q09", question_text: "When making high-stakes decisions under pressure, I rely on objective facts, logic, and calm risk evaluation.", axis_target: "Emotional", target_archetype: "SA", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 },
      { question_id: "Q10", question_text: "I prioritize human resonance, brand feel, and emotional connection over pure metric optimization.", axis_target: "Emotional", target_archetype: "IC", weight_sa: 3, weight_a: 1, weight_d: -1, weight_sd: -3 }
    ],
    archetypes: [
      { archetype_id: "VA", archetype_name: "The Visionary Architect", tagline: "Master of Systems & Future Trajectories", core_summary: "{name}, you operate like a master strategist who sees five moves ahead.", superpowers: "Systems Architecture; Strategic Foresight", blind_spots: "Over-indexing on preparation before execution" },
      { archetype_id: "KC", archetype_name: "The Kinetic Catalyst", tagline: "Engine of Momentum & Experiential Execution", core_summary: "{name}, you are a natural spark that converts raw potential into immediate motion.", superpowers: "Rapid Execution; Bias for Action", blind_spots: "Vulnerable to premature scaling" },
      { archetype_id: "IC", archetype_name: "The Intuitive Craftsman", tagline: "Guardian of Depth, Aesthetics & Human Resonance", core_summary: "{name}, you possess an innate eye for detail, emotional intelligence, and aesthetic integrity.", superpowers: "High Emotional Intelligence; Craft Precision", blind_spots: "Perfectionism delaying launches" },
      { archetype_id: "SA", archetype_name: "The Systemic Anchor", tagline: "Pillar of Order, Reliability & Scalable Foundations", core_summary: "{name}, you are the backbone that turns fragile ideas into enduring institutions.", superpowers: "Operational Efficiency; Systemic Reliability", blind_spots: "Resistance to sudden directional pivots" }
    ],
    rolePersonalizations: []
  });
}