import "../../globals.css";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
