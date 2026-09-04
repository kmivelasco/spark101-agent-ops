import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark101 Agent Ops Stack",
  description:
    "Bosquejo MVP — dashboard de marketing-ops con agentes, aprobaciones y know-how versionado (Spark101).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
