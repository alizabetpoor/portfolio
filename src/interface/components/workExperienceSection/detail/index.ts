export interface ExperienceItemLink {
  before: string;
  label: string;
  href: string;
  after: string;
}

export type ExperienceItem = string | ExperienceItemLink;

export interface WorkExperience {
  role: string;
  company: string;
  siteAddress: string;
  startDate: string;
  endDate: string;
  description: string;
  items: ExperienceItem[];
}

export type DetailProps = WorkExperience;
