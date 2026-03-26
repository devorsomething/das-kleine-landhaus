import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Das kleine Landhaus | Wohnaccessoires & Geschenke in Bregenz",
  description:
    "Handverlesene Wohnaccessoires, liebevoll ausgewählte Geschenkideen und handgefertigte Produkte aus Vorarlberg. Montfortstraße 13, Bregenz.",
  keywords: "Wohnaccessoires, Geschenke, Handwerk, Bregenz, Vorarlberg, Kerzen, Textilien, Pfänder",
  openGraph: {
    title: "Das kleine Landhaus Bregenz",
    description: "Handverlesene Wohnaccessoires & Geschenke in Bregenz",
    images: [
      {
        url: '/og?name=Das%20kleine%20Landhaus&tagline=Geschenke%20%C2%B7%20Wohnaccessoires%20%C2%B7%20Handwerk&color=%23C67B5C',
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Das kleine Landhaus Bregenz",
    description: "Handverlesene Wohnaccessoires & Geschenke in Bregenz",
    images: ['/og'],
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
