import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "components/nav";
import Footer from "components/footer";
import { baseUrl } from "./sitemap";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "__DEV__",
    template: "%s | __DEV__",
  },
  description: "안녕하세요. 프론트엔드 개발자 홍효정입니다.",
  openGraph: {
    title: "__DEV__",
    description: "안녕하세요. 프론트엔드 개발자 홍효정입니다.",
    url: baseUrl,
    siteName: "__DEV__",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 2400,
        height: 2400,
        alt: "프로필 이미지",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="antialiased max-w-3xl mx-4 mt-8 sm:mx-auto bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
