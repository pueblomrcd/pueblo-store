import type { Metadata } from "next";
import { PT_Serif } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/providers/SessionProvider";
import AdminSetupRedirect from "@/components/admin/AdminSetupRedirect";

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  title: "Pueblo Mercado - Modest Fashion, Timeless Elegance",
  description: "Discover authentic Islamic clothing that honors tradition while embracing contemporary style. Quality craftsmanship meets cultural values in every piece.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body
        className={`${ptSerif.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <SessionProvider>
          <AdminSetupRedirect />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
