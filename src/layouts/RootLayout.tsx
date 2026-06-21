import { Outlet } from "react-router";
import { LenisProvider } from "../components/common/LenisProvider";
import { CustomCursor } from "../components/common/CustomCursor";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

export const RootLayout = () => {
  return (
    <LenisProvider>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen bg-background text-text-main">
        <Outlet />
      </main>
      <Footer />
    </LenisProvider>
  );
};
