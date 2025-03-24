const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 text-sm py-6 px-4 border-t border-gray-700 text-center">
        <div className="max-w-6xl mx-auto space-y-2">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Community Guidelines</a>
          </div>
          <p>&copy; {new Date().getFullYear()} VSCO. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;