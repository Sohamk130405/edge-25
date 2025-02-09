import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { cn } from "@/utils/functions/cn";
import { generateMetadata } from "@/utils/functions/metadata";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ConvexClientProvider } from "@/Provider/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
export const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/AeonikPro-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/AeonikPro-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/AeonikPro-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/AeonikPro-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/AeonikPro-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-aeonik",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = generateMetadata();

export default function RootLayout({ children }) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" className="scrollbar">
        <body
          cz-shortcut-listen="true"
          className={cn(
            "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
            aeonik.variable,
            inter.variable
          )}
          fdprocessedid="vf6lo 7hajy"
        >
          <ConvexClientProvider>
            <Toaster richColors theme="dark" position="top-right" />
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
