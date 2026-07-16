import fs from "node:fs";
import path from "node:path";

export type ArtisticLeadership = {
  roleZh: string;
  roleEn?: string;
  name: string;
};

export type OrchestraSection = {
  name: string;
  current: string[];
  former: string[];
};

export type AdministrativeRole = {
  roleZh: string;
  names: string[];
};

export type LegacyPeople = {
  artisticLeadership: ArtisticLeadership[];
  formerConcertmasters: string[];
  sections: OrchestraSection[];
  administrativeTeam: AdministrativeRole[];
};

const supplementalFormerMembers: Record<string, string[]> = {
  Oboe: ["李珮琪", "王頌恩"],
  Clarinet: ["孫正茸"],
  Bassoon: ["張先惠", "簡凱玉", "陳宜彣"],
  Horn: ["陳彥豪", "陳信仲", "黃韻真", "黃盈樺"],
  Trumpet: ["高信譚"],
  Trombone: ["蔡佳融", "馬萬詮", "李季鴻"]
};

function appendUnique(base: string[], additions: string[]) {
  return [...base, ...additions.filter((name) => !base.includes(name))];
}

function mergeSupplementalFormerMembers(sections: OrchestraSection[]) {
  const merged = [...sections];

  Object.entries(supplementalFormerMembers).forEach(([name, formerMembers]) => {
    const section = merged.find((item) => item.name === name);

    if (section) {
      section.former = appendUnique(section.former, formerMembers);
      return;
    }

    merged.push({
      name,
      current: [],
      former: formerMembers
    });
  });

  return merged;
}

function listItems(lines: string[], startIndex: number, indent = "- ") {
  const items: string[] = [];
  let index = startIndex;

  while (index < lines.length && lines[index].startsWith(indent)) {
    items.push(lines[index].replace(indent, "").trim());
    index += 1;
  }

  return { items, nextIndex: index };
}

function parseOrchestraMembers() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content/legacy/people/orchestra-members.yaml"),
    "utf8"
  );
  const lines = source.split(/\r?\n/);
  const artisticLeadership: ArtisticLeadership[] = [];
  const formerConcertmasters: string[] = [];
  const sections: OrchestraSection[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (line === "artistic_leadership:") {
      index += 1;
      while (lines[index]?.startsWith("- role_zh:")) {
        const roleZh = lines[index].replace("- role_zh:", "").trim();
        const roleEn = lines[index + 1]?.replace("  role_en:", "").trim();
        const name = lines[index + 2]?.replace("  name:", "").trim();
        artisticLeadership.push({ roleZh, roleEn, name });
        index += 3;
      }
      continue;
    }

    if (line === "former_concertmasters:") {
      const parsed = listItems(lines, index + 1);
      formerConcertmasters.push(...parsed.items);
      index = parsed.nextIndex;
      continue;
    }

    if (line === "sections:") {
      index += 1;
      while (index < lines.length) {
        const sectionMatch = lines[index].match(/^  ([^ ].*):$/);
        if (!sectionMatch) break;

        const name = sectionMatch[1];
        let current: string[] = [];
        let former: string[] = [];
        index += 1;

        while (index < lines.length && lines[index].startsWith("    ")) {
          if (lines[index].trim() === "current:") {
            const parsed = listItems(lines, index + 1, "    - ");
            current = parsed.items;
            index = parsed.nextIndex;
            continue;
          }

          if (lines[index].trim() === "former:") {
            const parsed = listItems(lines, index + 1, "    - ");
            former = parsed.items;
            index = parsed.nextIndex;
            continue;
          }

          index += 1;
        }

        sections.push({ name, current, former });
      }
      continue;
    }

    index += 1;
  }

  return {
    artisticLeadership,
    formerConcertmasters,
    sections: mergeSupplementalFormerMembers(sections)
  };
}

function parseAdministrativeTeam() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "content/legacy/people/administrative-team.yaml"),
    "utf8"
  );
  const lines = source.split(/\r?\n/);
  const administrativeTeam: AdministrativeRole[] = [];
  let index = lines.findIndex((line) => line === "roles:") + 1;

  while (index > 0 && index < lines.length) {
    if (!lines[index].startsWith("- role_zh:")) {
      index += 1;
      continue;
    }

    const roleZh = lines[index].replace("- role_zh:", "").trim();
    const names: string[] = [];
    index += 1;

    if (lines[index]?.startsWith("  name:")) {
      names.push(lines[index].replace("  name:", "").trim());
      index += 1;
    } else if (lines[index]?.startsWith("  names:")) {
      const parsed = listItems(lines, index + 1, "  - ");
      names.push(...parsed.items);
      index = parsed.nextIndex;
    }

    administrativeTeam.push({ roleZh, names });
  }

  return administrativeTeam;
}

export function getLegacyPeople(): LegacyPeople {
  const orchestra = parseOrchestraMembers();

  return {
    ...orchestra,
    administrativeTeam: parseAdministrativeTeam()
  };
}
