
import { Metadata } from "next";

import { Roboto } from "next/font/google";
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
