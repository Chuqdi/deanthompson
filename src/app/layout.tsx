import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, DM_Sans, } from "next/font/google";
import "./globals.css";
import Main from "./Main";



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
  title: "Dean Hurst Thompson",
  description: "Dean Hurst Thompson, with over 24 years experience working as a financial consultant, Digital Assets Manager/Stockbroker and investment advisor for some of the top trading firms in Wall Street.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} ${interFont.variable} ${DMSans.variable}`}>
        <Main>
          {children}
        </Main>
      </body>
     
    </html>
  );
}
