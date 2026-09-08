import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mey-y-heber.com",
  ),
  title: "Mey & Héber — Save the Date",
  description:
    "Nos casamos 💍 Sábado 27 de febrero de 2027 · Ex Hacienda Nogueras, Comala, Colima. ¡Reserva la fecha!",
  openGraph: {
    title: "Mey & Héber — Save the Date",
    description:
      "Nos casamos 💍 Sábado 27 de febrero de 2027 · Ex Hacienda Nogueras, Comala, Colima. ¡Reserva la fecha!",
    type: "website",
    locale: "es_MX",
    siteName: "Mey & Héber",
    images: [{ url: "/detail-card.png", alt: "Invitación de boda de Mey & Héber" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mey & Héber — Save the Date",
    description:
      "Nos casamos 💍 Sábado 27 de febrero de 2027 · Ex Hacienda Nogueras, Comala, Colima. ¡Reserva la fecha!",
    images: ["/detail-card.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${greatVibes.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
