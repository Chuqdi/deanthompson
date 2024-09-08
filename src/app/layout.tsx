import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, DM_Sans, } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable:"--bricolageGrotesque"
});

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--inter"
});


const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--DM_Sans"
})

export const metadata: Metadata = {
  title: "Hooked",
  description: "",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} ${interFont.variable} ${DMSans.variable}`}>
        <Navbar />
        {children}</body>
    </html>
  );
}
