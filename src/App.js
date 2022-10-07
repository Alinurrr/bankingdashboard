import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import IndexContent from "./component/Content/IndexContent";

function App() {
  useEffect(() => {
    document.title = "Dashboard GND Bank";
  }, []);
  return (
    <div className="flex h-screen w-full bg-white">
      <Sidebar />
      <div className="flex flex-col w-full overflow-y-auto">
        <Navbar />
        <IndexContent />
      </div>

    </div>
  );
}

export default App;
