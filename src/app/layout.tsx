import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/Footer";
import FloatingContactButton from "../../component/FloatingBtn";



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "PT. Aryndo Utama Sarana Sukses",
  description: "Delivering top-quality services in the drilling and energy sectors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <FloatingContactButton 
        phone="+62882003813401" 
        email="aryndo@gmail.com"  
        />
        <Footer/>
      </body>
    </html>
  );
}
