import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ResponsiveDrawer from "./components/ResponsiveDrawer";

const Page = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar (visible on medium and larger screens) */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1">
          <MainContent />
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Drawer (for smaller screens) */}
      <ResponsiveDrawer />
    </div>
  );
};

export default Page;
