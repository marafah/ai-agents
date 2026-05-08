import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DirectionProvider } from "@/components/layout/DirectionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agents - Master AI Agents from Zero to Production",
  description:
    "The most comprehensive open-source learning platform for AI Agents. Learn theory, build projects, and master industry-grade implementations with interactive lessons, simulations, and hands-on projects.",
  keywords: [
    "AI Agents",
    "LLM",
    "Machine Learning",
    "AI Education",
    "RAG",
    "ReAct",
    "Multi-Agent Systems",
    "LangChain",
    "OpenAI",
    "Anthropic",
  ],
  authors: [{ name: "Dr. Mohammad Arafah", url: "https://marafah.github.io/Portfolio/" }],
  openGraph: {
    title: "AI Agents",
    description: "Master AI Agents from Zero to Production",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ai-agents-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <DirectionProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
