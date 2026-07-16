import fs from "node:fs";
import path from "node:path";

export type VerificationStatus =
  | "verified_legacy"
  | "verified_homepage"
  | "partial_legacy"
  | "needs_current_verification"
  | "historical_reconstruction"
  | "retrieval_gap";

export type ArchiveRecord = {
  date: string;
  year: number;
  titleZh: string;
  titleEn?: string;
  time?: string;
  venue?: string;
  verificationStatus: VerificationStatus;
  sourceUrl?: string;
  notes?: string;
  image?: string;
  experienceSlug?: string;
};

export type ReconstructionYear = {
  year: number;
  status: VerificationStatus;
  notes: string;
};

function parseCsvLine(line: string) {
  const cells: string[] = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"' && quoted && nextCharacter === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (character === '"') {
      quoted = !quoted;
      continue;
    }

    if (character === "," && !quoted) {
      cells.push(current);
      current = "";
      continue;
    }

    current += character;
  }

  cells.push(current);
  return cells;
}

function readCsv(relativePath: string) {
  const sourcePath = path.join(process.cwd(), relativePath);
  const rows = fs.readFileSync(sourcePath, "utf8").trim().split(/\r?\n/);
  const headers = parseCsvLine(rows[0]);

  return rows.slice(1).map((row) => {
    const cells = parseCsvLine(row);
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""]));
  });
}

export function getArchiveRecords(): ArchiveRecord[] {
  return readCsv("content/legacy/archive/archive-inventory.csv")
    .map((row) => {
      const year = Number((row.date || "").slice(0, 4));

      return {
        date: row.date,
        year,
        titleZh: row.title_zh || row.title_en,
        titleEn: row.title_en || undefined,
        time: row.time || undefined,
        venue: row.venue || undefined,
        verificationStatus: row.verification_status as VerificationStatus,
        sourceUrl: row.source_url || undefined,
        notes: row.notes || undefined,
        image: row.image || undefined,
        experienceSlug: undefined
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getReconstructionYears(): ReconstructionYear[] {
  return readCsv("content/legacy/archive/reconstruction-years.csv").map((row) => ({
    year: Number(row.year),
    status: row.status as VerificationStatus,
    notes: row.notes
  }));
}

export function statusLabel(status: VerificationStatus) {
  const labels: Record<VerificationStatus, string> = {
    verified_legacy: "Verified legacy record",
    verified_homepage: "Verified homepage record",
    partial_legacy: "Partial legacy record",
    needs_current_verification: "Needs current verification",
    historical_reconstruction: "Historical reconstruction",
    retrieval_gap: "Retrieval gap"
  };

  return labels[status];
}
