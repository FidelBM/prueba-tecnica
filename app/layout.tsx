import type { Metadata } from "next";
import { Inter, Roboto, Nunito } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const robo = Roboto({ subsets: ["latin"],
  weight: ['100','400'],
  variable: '--font-roboto_condensed',
});

const nunito = Nunito({ subsets: ["latin"],
weight: ['400'],
variable: '--font-nunito',});

export const metadata: Metadata = {
  title: "Acertijo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
