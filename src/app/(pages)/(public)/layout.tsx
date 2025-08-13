import type { Metadata } from "next";
import "../../globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Semilleros Uniremington",
  description: "Universidad Remington",
  icons: {
    icon: [
      { url: "/Logo_Uniremington.png" },
      { url: "/Logo_Uniremington.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/Logo_Uniremington.png", // para iOS
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
