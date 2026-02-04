import React from "react";

const GameStreamView = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-white">
      <p className="text-lg mb-4">Lancez Moonlight sur votre telephone pour vous connecter au PC</p>
      <a
        href="moonlight://"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white"
      >
        Ouvrir Moonlight
      </a>
    </div>
  );
};

export default GameStreamView;


