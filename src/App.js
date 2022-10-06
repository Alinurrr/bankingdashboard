import { useEffect } from "react";
import Sidebar from "./component/Sidebar";

function App() {
  useEffect(() => {
    document.title = "Dashboard GND Bank";
  }, []);
  return (
    <div className="flex h-screen w-full bg-white">

      <Sidebar />

    </div>
  );
}

export default App;
