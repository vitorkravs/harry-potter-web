"use client";

//style
import "./styles.scss";

//hooks
import { useEffect, useState } from "react";

//requisição
import axios from "axios";

interface Potions {
  data: [];

  attributes: {
    slug: string;
    characteristics: string;
    difficulty: string;
    effect: string;
    image: string;
    ingredients: string;
  };
}

const Potions = () => {
  const [potions, setPotions] = useState<Potions[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const url = "https://api.potterdb.com/v1/potions";
    axios
      .get<Potions>(url)
      .then((response) => {
        setPotions(response.data.data);
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

  const filteredPotions = potions.filter((potion: Potions) =>
    potion.attributes.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstFilteredPotion =
    filteredPotions.length > 0 ? filteredPotions[0] : null;

  console.log(filteredPotions, firstFilteredPotion);
  return (
    <section id="potions-container">
      <div className="potions-title">
        <h2>Poções</h2>
        <p>aqui você pode pesquisar sobre as poções</p>
      </div>
      <div className="input-search-potion">
        <input
          type="text"
          placeholder="Digite o nome da poção aqui"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div className="potion-list">
        {firstFilteredPotion ? (
          <div className="potion-card">
            <h3>{firstFilteredPotion.attributes.slug}</h3>
            <p>{firstFilteredPotion.attributes.characteristics}</p>
            <picture>
              <img
                src={
                  firstFilteredPotion.attributes.image
                    ? firstFilteredPotion.attributes.image
                    : "/default-potion-image.jpg"
                }
                alt={firstFilteredPotion.attributes.slug}
                width={180}
                height={200}
              />
            </picture>
            <p>Efeito: {firstFilteredPotion.attributes.effect}</p>
            <p>Dificuldade: {firstFilteredPotion.attributes.difficulty}</p>
            <p>Ingredientes: {firstFilteredPotion.attributes.ingredients}</p>
          </div>
        ) : (
          <div
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              padding: ".5rem 1rem",
              borderRadius: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <p>Poção não encontrada :(</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Potions;
