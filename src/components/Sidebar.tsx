import React from "react";

const Sidebar = ({ onSelect }: { onSelect: (view: string) => void }) => {
  return (
    <div className="w-56 bg-gray-800 text-white p-4 space-y-4">
      <button onClick={() => onSelect("terminal")} className="w-full text-left hover:bg-gray-700 p-2 rounded"> Terminal</button>
      <button onClick={() => onSelect("ia")} className="w-full text-left hover:bg-gray-700 p-2 rounded"> IA</button>
      <button onClick={() => onSelect("games")} className="w-full text-left hover:bg-gray-700 p-2 rounded"> Jeux</button>
    </div>
  );
};

export default Sidebar;
