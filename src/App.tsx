import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return <>{loading ? <Loading /> : <RoutesMain />}</>;
}

export default App;
