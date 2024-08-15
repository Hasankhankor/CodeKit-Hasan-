import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { ModeToggle } from "@/components/ui/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasan's CodeKit",
  description: "Hasan's CodeKit is your go-to source for ready-made TypeScript components, crafted to simplify development and enhance productivity. Elevate your projects with reliable, reusable code from Hasand",
  keywords:
    "tailwindcss, react, shadcn, design, webdesign, website, saas templates, saas website templates",
  authors: [{ name: "Hasan Tariq", url: "https://hasan-port.vercel.app/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Hasan's CodeKit - Free SaaS website blocks"
        />
        <meta
          property="og:description"
          content="Free SaaS website blocks based on React with shadcn & Tailwind"
        />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/os33grffu/WhatsApp_Image_2024-03-28_at_9.51.58_PM-removebg-preview%20(2).png?updatedAt=1721845473127"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ModeToggle />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
