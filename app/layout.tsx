import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark101 · Agent Ops Stack",
  description: "Bosquejo MVP — marketing ops agéntico con gates GO/ESPERA/KILL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
