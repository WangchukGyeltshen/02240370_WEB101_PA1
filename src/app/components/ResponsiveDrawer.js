"use client";  // Add this line at the top

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

const ResponsiveDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button className="fixed top-4 left-4 md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} className="text-white" />
      </button>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex">
          <div className="w-64">
            <Sidebar />
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
};

export default ResponsiveDrawer;
