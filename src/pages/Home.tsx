import { useState, useEffect, useContext } from "react";
import { MainContext } from "../provider/MainContext";

export const Home = () => {
  const {} = useContext(MainContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scroll(0, 0);

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
