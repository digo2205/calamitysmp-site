import { useEffect } from "react";

export function TawkToWidget() {
  useEffect(() => {
    // Evita carregar o script mais de uma vez
    if (document.getElementById("tawkto-script")) return;

    const s1 = document.createElement("script");
    s1.id = "tawkto-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/68ecfc0ce9a9181952e59c5d/1j7erh49u";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      // Remove o script se o componente for desmontado
      document.body.removeChild(s1);
    };
  }, []);

  return null;
}
