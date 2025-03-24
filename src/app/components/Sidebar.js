import { Home, Layers, Camera, User, Search, BookOpen, LogIn } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black p-6 border-r border-gray-700 flex flex-col space-y-4">
      {/* Logo */}
      <div className="text-xl font-bold text-white mb-6">VSCO</div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        <NavItem icon={<Home />} text="Feed" />
        <NavItem icon={<Layers />} text="Studio" />
        <NavItem icon={<Camera />} text="Canvas" />
        <NavItem icon={<User />} text="Profile" />
        <NavItem icon={<Search />} text="Search" />
        <NavItem icon={<BookOpen />} text="Learn" />
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        <button className="w-full text-black bg-white py-2 rounded-lg font-bold">Sign Up</button>
        <button className="w-full text-white border border-gray-600 py-2 mt-2 rounded-lg flex items-center justify-center">
          <LogIn className="mr-2" /> Log In
        </button>
      </div>
    </div>
  );
};

// Reusable NavItem Component
const NavItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
    <span className="w-6">{icon}</span>
    <span>{text}</span>
  </div>
);

export default Sidebar;
