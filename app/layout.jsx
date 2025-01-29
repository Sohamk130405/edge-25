import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/Provider/SessionProvider";
import "./globals.css";
import { cn } from "@/utils/functions/cn";
import { generateMetadata } from "@/utils/functions/metadata";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

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
    <html lang="en" className="scrollbar">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
          aeonik.variable,
          inter.variable
        )}
        fdprocessedid="vf6lo 7hajy"
      >
        <AuthProvider>
          <Toaster richColors theme="dark" position="top-right" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

{
  /* <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(168,85,247,0.13)_0,rgba(168,85,247,0)_50%,rgba(168,85,247,0)_100%)]"></div> */
}
{
  /* <AnimatedBackground
                    numSquares={6}
                    maxOpacity={0.2}
                    duration={10}
                    repeatDelay={10}
                    className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,black,transparent)]",
                        "inset-0 w-full h-[100%] inset-y-[-30%] hidden md:block",
                    )}
                /> */
}
