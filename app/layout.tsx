import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Das kleine Landhaus | Wohnaccessoires & Geschenke in Bregenz",
  description:
    "Handverlesene Wohnaccessoires, liebevoll ausgewählte Geschenkideen und handgefertigte Produkte aus Vorarlberg. Montfortstraße 13, Bregenz.",
  keywords: "Wohnaccessoires, Geschenke, Handwerk, Bregenz, Vorarlberg, Kerzen, Textilien, Pfänder",
  openGraph: {
    title: "Das kleine Landhaus | Wohnaccessoires & Geschenke in Bregenz",
    description:
      "Handverlesene Wohnaccessoires, liebevoll ausgewählte Geschenkideen und handgefertigte Produkte aus Vorarlberg.",
    type: "website",
    locale: "de_AT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased bg-cream">
        {children}
      </body>
    </html>
  );
}
