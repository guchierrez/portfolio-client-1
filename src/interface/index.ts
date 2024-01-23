import { ReactNode } from "react";

export interface IMainContext {
  NavbarDrawerRef: React.RefObject<HTMLInputElement>;
  NavbarElementRef: React.RefObject<HTMLDivElement>;
  toggleDrawer: () => void;
}

export interface IMainContextProps {
  children: ReactNode;
}

export interface IProjectContext {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

export interface IProjectContextProps {
  children: ReactNode;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  description_en: string;
  image: string;
  technologies: string[];
  features: string[];
  features_en: string[];
  project_url: string;
  repositories: string[];
}
