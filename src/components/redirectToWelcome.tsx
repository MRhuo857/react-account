import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectToWelcomePage() {
  const nav = useNavigate();
  useEffect(() => {
    nav("welcome/1");
  }, []);
  return null;
}
