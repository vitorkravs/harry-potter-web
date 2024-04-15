"use client";

//style
import "./styles.scss";

//requisição
import axios from "axios";

//hooks
import { useEffect, useState } from "react";

interface Character {
  name: string;
  image: string;
  house: string;
  dateOfBirth: string;
  alternate_names: string;
  species: string;
  ancestry: string;
  eyeColour: string;
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const url = "https://hp-api.onrender.com/api/characters";
    axios
      .get<Character[]>(url)
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstFilteredCharacter =
    filteredCharacters.length > 0 ? filteredCharacters[0] : null;

  return (
    <section id="characters-container">
      <div className="characters-title">
        <h2>Personagens</h2>
        <p>Aqui você pode pesquisar sobre os personagens queridos de HP</p>
        <p>
          Pode ser que algumas informações estejam faltando, porém esse problema
          é da api que utilizei para esse site.
        </p>
        <p>Já estou procurando uma api mais completa</p>
      </div>
      <div className="input-search-character">
        <input
          type="text"
          placeholder="Digite o nome do personagem aqui"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div className="character-list">
        {firstFilteredCharacter ? (
          <div className="character-card">
            <h3>{firstFilteredCharacter.name}</h3>
            <p>{firstFilteredCharacter.house}</p>
            <picture>
              <img
                src={
                  firstFilteredCharacter.image === ""
                    ? "/hogwarts-logo.jpg"
                    : firstFilteredCharacter.image
                }
                alt={firstFilteredCharacter.name}
                width={180}
                height={200}
              />
            </picture>
            <p>
              {firstFilteredCharacter.dateOfBirth
                ? `Nascimento: ${firstFilteredCharacter.dateOfBirth}`
                : null}
            </p>
            <p>
              {firstFilteredCharacter.alternate_names
                ? `Nome alternativo: ${firstFilteredCharacter.alternate_names}`
                : null}
            </p>
            <p>
              {firstFilteredCharacter.species
                ? `Especie: ${firstFilteredCharacter.species}`
                : null}
            </p>
            <p>
              {firstFilteredCharacter.ancestry
                ? `Ancestralidade: ${firstFilteredCharacter.ancestry}`
                : null}
            </p>
            <p>
              {firstFilteredCharacter.eyeColour
                ? `Cor dos olhos: ${firstFilteredCharacter.eyeColour}`
                : null}
            </p>
          </div>
        ) : (
          <div>
            <p>Personagem não encontado :{"("}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Characters;
