import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { FloatingContact } from "@/components/ui/floating-contact";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
            <FloatingContact />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
