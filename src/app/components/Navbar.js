import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-700 bg-black text-white">
      {/* Left Side - Logo */}
      <div className="text-xl font-bold">VSCO</div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm text-gray-400">
        <Link href="#" className="hover:text-white">PHOTO + VIDEO EDITOR</Link>
        <Link href="#" className="hover:text-white">PHOTOGRAPHY COMMUNITY</Link>
        <Link href="#" className="hover:text-white">BUSINESSES + BRANDS</Link>
        <Link href="#" className="hover:text-white">FEATURES</Link>
        <Link href="#" className="hover:text-white">PLANS + PRICING</Link>
      </div>

      {/* Right Side - Auth Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 border border-white text-white rounded-full text-sm">
          TRY FOR FREE
        </button>
        <button className="px-4 py-2 bg-white text-black rounded-full text-sm">
          SIGN IN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
