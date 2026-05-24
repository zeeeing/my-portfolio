import type { ProjectStatus } from "../types";

export const projectStatusConfig = {
  live: { label: "Live", color: "success" },
  archived: { label: "Archived", color: "default" },
  wip: { label: "In Progress", color: "warning" },
} satisfies Record<
  ProjectStatus,
  { label: string; color: "success" | "default" | "warning" }
>;
