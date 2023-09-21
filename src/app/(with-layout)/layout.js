import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <div className="min-h-screen text-3xl">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
