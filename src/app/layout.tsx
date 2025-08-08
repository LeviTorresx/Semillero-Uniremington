import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";



export const metadata: Metadata = {
  title: "Semilleros Uniremington",
  description: "Universidad Remington",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
