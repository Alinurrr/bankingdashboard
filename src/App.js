import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import IndexContent from "./component/Content/IndexContent";

function App() {
  useEffect(() => {
    document.title = "Dashboard GND Bank";
  }, []);
  return (
    <div>
      <div className="2xl:flex w-full bg-white hidden">
        <Sidebar />
        <div className="flex flex-col w-full overflow-y-auto">
          <Navbar />
          <IndexContent />
        </div>
      </div>

      <div className="2xl:hidden h-screen place-content-center bg-white grid">
        <div className="text-center">
          <strong className="text-9xl font-black text-gray-200">404</strong>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ah, realy sorry :'(
          </h1>
          <p className="mt-4 text-gray-500">This dashboard can only be used on desktops with sizes more than 1536px for now.</p>
          <button onClick={() => { window.location.assign('https://alinur.my.id'); }} className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
            See Another Project
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;
