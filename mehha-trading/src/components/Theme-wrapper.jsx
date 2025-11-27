import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ThemeWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/mes-arg-plast")) {
      document.body.classList.add("theme-mesarg");
    } else {
      document.body.classList.remove("theme-mesarg");
    }
  }, [location.pathname]);

  return children;
}
