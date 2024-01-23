import { useState, useEffect, useContext } from "react";

export function Contact() {
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
}
