import { useEffect } from "react";

export function DownloadModpackPage() {
  useEffect(() => {
    // Caminho do arquivo dentro da pasta "public"
    const fileUrl = "/calamity-modpack-beta-2.2.zip";

    // Cria um link temporário e dispara o download automaticamente
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "calamity-modpack-beta-2.2.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Baixando a modpack...
      </h1>
      <p className="text-gray-600">
        Se o download não começar automaticamente,{" "}
        <a
          href="/calamity-modpack-beta-2.2.zip"
          className="text-blue-600 underline"
        >
          clique aqui
        </a>.
      </p>
    </div>
  );
}
