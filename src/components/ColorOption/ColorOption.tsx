"use client";

import "./styles.scss";

const ColorOption = () => {
  const mudarTema = (tema: string) => {
    document.documentElement.setAttribute("data-tema", tema);
  };

  return (
    <div className="color-option">
      <button
        className="btn-grifinoria"
        onClick={() => mudarTema("grifinoria")}
      >
        Grifinória
      </button>
      <button className="btn-sonserina" onClick={() => mudarTema("sonserina")}>
        Sonserina
      </button>
      <button className="btn-corvinal" onClick={() => mudarTema("corvinal")}>
        Corvinal
      </button>
      <button className="btn-lufa-lufa" onClick={() => mudarTema("lufa-lufa")}>
        Lufa-Lufa
      </button>
    </div>
  );
};

export default ColorOption;
