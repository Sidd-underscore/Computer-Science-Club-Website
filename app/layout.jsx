import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Navbar } from "@/components/ui/navbar";

export const metadata = {
  title: {
    default: "Lincoln Computer Science Association",
    template: "%s | LCSA",
  },
  metadataBase: new URL(
    `${
      process.env.NODE_ENV === "production"
        ? "https://lhs-lcsa-web.vercel.app/"
        : "http://localhost:3000"
    }`,
  ),
  description:
    "The official website of Lincoln's one and only Computer Science Association. ",
  color: "rose",
  openGraph: {
    title: "Lincoln Computer Science Association",
    description:
      "The official website of Lincoln's one and only Computer Science Association. ",
    type: "website",
    images: "/social-card.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lincoln Computer Science Association",
    description:
      "The official website of Lincoln's one and only Computer Science Association. ",
    images: ["/social-card.png"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-neutral-50 dark:bg-neutral-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            <div className="relative z-10 mx-auto lg:max-w-4xl px-2.5 pb-2.5 pt-28 antialiased md:pb-4">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
