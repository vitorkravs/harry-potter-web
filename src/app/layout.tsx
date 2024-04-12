import type { Metadata } from "next";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.scss";

const cinzelDecoratice = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "900", "700"],
});

export const metadata: Metadata = {
  title: "HP Web",
  description: "Site desenvolvido para estudos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cinzelDecoratice.className}>{children}</body>
    </html>
  );
}
