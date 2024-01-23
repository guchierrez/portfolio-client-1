import { createContext, useEffect, useState } from "react";
import { IProjectContext, IProjectContextProps, Project } from "../interface";
import { toast } from "react-toastify";

export const ProjectContext = createContext({} as IProjectContext);

export const ProjectContextProvider = ({ children }: IProjectContextProps) => {
  useEffect(() => {
    loadProjects();
  }, []);

  const [projects, setProjects] = useState<Array<Project>>([]);

  const loadProjects = async (): Promise<void> => {
    try {
      await setProjects(data);
    } catch {
      toast.error(
        "There was an error while fetching projects from the database. Refresh the page and try again."
      );
    }
  };

  const data: any = [];

  return (
    <>
      <ProjectContext.Provider
        value={{
          projects,
          setProjects,
        }}
      >
        {children}
      </ProjectContext.Provider>
    </>
  );
};
