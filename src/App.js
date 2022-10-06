import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Dashboard GND Bank";
  }, []);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  );
}

export default App;
