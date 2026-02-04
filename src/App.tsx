import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import IAView from "./views/IAView";
import TerminalView from "./views/TerminalView";
import GameStreamView from "./views/GameStreamView";

const App = () => {
  const [view, setView] = useState("terminal");

  return (
    <div className="flex h-screen w-screen">
      <Sidebar onSelect={setView} />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-900">
          {view === "terminal" && <TerminalView />}
          {view === "ia" && <IAView />}
          {view === "games" && <GameStreamView />}
        </div>
      </div>
    </div>
  );
};

export default App;
