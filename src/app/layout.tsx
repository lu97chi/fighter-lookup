import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { FloatingContact } from "@/components/ui/floating-contact";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fighter Lookup",
  description: "Connect fighters with opportunities worldwide",
  metadataBase: new URL("https://fighter-lookup.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fighter-lookup.com",
    title: "Fighter Lookup",
    description: "Connect fighters with opportunities worldwide",
    siteName: "Fighter Lookup",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fighter Lookup",
    description: "Connect fighters with opportunities worldwide",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <FloatingContact />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
