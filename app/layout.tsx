import type { Metadata } from "next";
import { Playfair_Display, Marck_Script } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const marckScript = Marck_Script({
  variable: "--font-marck",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const DESCRICAO =
  "Quitutes artesanais sob encomenda em Salvador: quiches e doces feitos à mão, um a um.";

export const metadata: Metadata = {
  // TROCAR no deploy pelo domínio real do site.
  metadataBase: new URL("https://quitutesdakika.com.br"),
  title: {
    default: "Quitutes da Kika",
    template: "%s | Quitutes da Kika",
  },
  description: DESCRICAO,
  openGraph: {
    title: "Quitutes da Kika",
    description: DESCRICAO,
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${marckScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
