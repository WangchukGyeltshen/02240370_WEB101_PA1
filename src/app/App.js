import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
