import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio — Branco Beltran",
  description: "Portafolio de desarrollador con Next.js + Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="container-max py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
