import { useState, useEffect, useContext } from "react";
import { MainContext } from "../provider/MainContext";
import { ProjectContext } from "../provider/ProjectContext";

export const Projects = () => {
  const { projects } = useContext(ProjectContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
};
