"use client";

//style
import "./styles.scss";

//requisição
import axios from "axios";

//hooks
import { useEffect, useState } from "react";

//motion
import { motion } from "framer-motion";

interface Spells {
  data: [];

  attributes: {
    slug: string;
    category: string;
    effect: string;
    image: string;
  };
}

const Spells = () => {
  const [spells, setSpells] = useState<Spells[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const url = "https://api.potterdb.com/v1/spells";
    axios
      .get<Spells>(url)
      .then((response) => {
        setSpells(response.data.data);
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

  const filteredSpells = spells.filter((spell: Spells) =>
    spell.attributes.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstFilteredSpell =
    filteredSpells.length > 0 ? filteredSpells[0] : null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      id="spells-container"
    >
      <div className="spell-title">
        <h2>Feitiços</h2>
      </div>
      <div className="input-search-spell">
        <input
          type="text"
          placeholder="Digite o nome do personagem aqui"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div className="spell-list">
        {firstFilteredSpell ? (
          <div className="spell-card">
            <h3>{firstFilteredSpell.attributes.slug}</h3>
            <picture>
              <img
                src={
                  (Array.isArray(firstFilteredSpell.attributes.image) &&
                    firstFilteredSpell.attributes.image.length === 0) ||
                  firstFilteredSpell.attributes.image === null
                    ? "/hogwarts-logo.jpg"
                    : firstFilteredSpell.attributes.image
                }
                alt={firstFilteredSpell.attributes.slug}
                width={180}
                height={200}
              />
            </picture>
            <p>
              {firstFilteredSpell.attributes.effect
                ? `Efeitos: ${firstFilteredSpell.attributes.effect}`
                : null}
            </p>
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
            <p>Feitiço não encontado :{"("}</p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Spells;
