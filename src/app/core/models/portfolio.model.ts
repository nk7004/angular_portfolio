export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  label: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  details?: string[];
}

export interface Skill {
  name: string;
  level?: string; // e.g. 'Advanced', 'Intermediate'
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
  iconName: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
}

export interface ProjectModule {
  name: string;
  description: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  architectureDescription: string;
  modules: ProjectModule[];
  securityDescription: string;
  apiArchitecture: string;
  databaseDesign: string;
  performanceOptimization: string[];
  externalIntegrations: string[];
  awsDeployment: string[];
  challenges: ProjectChallenge[];
  results: string[];
}

export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  technologyStack: string[];
  importantFeatures: string[];
  role: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  caseStudyEnabled: boolean;
  caseStudy?: CaseStudy;
  imageName?: string; // to render matching technical layouts
}

export interface EngineeringStep {
  stepNumber: string;
  title: string;
  description: string;
  technologies?: string[];
}

export interface Portfolio {
  name: string;
  title: string;
  positioningStatement: string;
  summary: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  portfolioUrl: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  socialLinks: SocialLink[];
  engineeringApproach: EngineeringStep[];
}
