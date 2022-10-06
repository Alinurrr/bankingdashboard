import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";

function App() {
  useEffect(() => {
    document.title = "Dashboard GND Bank";
  }, []);
  return (
    <div className="flex h-screen w-full bg-white">

      <Sidebar />
      <Navbar />

    </div>
  );
}

export default App;
