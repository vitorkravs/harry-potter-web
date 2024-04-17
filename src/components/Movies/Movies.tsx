"use client";

//style
import "./styles.scss";

//hooks
import { useState } from "react";

//motion
import { motion } from "framer-motion";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(""); // Estado para armazenar o filme selecionado

  // Função para lidar com a seleção do filme
  const handleMovieSelect = (movie: any) => {
    setSelectedMovie(movie);
  };

  // Função para exibir a descrição do filme selecionado
  const renderMovieDescription = () => {
    switch (selectedMovie) {
      case "Harry Potter e a Pedra Filosofal":
        return (
          <p>
            Descrição do filme: Neste primeiro filme, Harry Potter descobre que
            é um bruxo aos 11 anos de idade e é convidado a frequentar a Escola
            de Magia e Bruxaria de Hogwarts. Lá, ele faz amigos, como Ron
            Weasley e Hermione Granger, e descobre segredos sobre seu passado
            enquanto enfrenta o bruxo das trevas, Voldemort, que busca a Pedra
            Filosofal para alcançar a imortalidade.
          </p>
        );
      case "Harry Potter e a Câmara Secreta":
        return (
          <p>
            Descrição do filme: No segundo ano em Hogwarts, Harry volta às aulas
            enfrentando mistérios envolvendo ataques misteriosos que ocorrem na
            escola. Ele descobre a existência da Câmara Secreta e sua ligação
            com o herdeiro de Sonserina enquanto tenta salvar os estudantes de
            serem petrificados pela terrível criatura que habita lá.
          </p>
        );
      case "Harry Potter e o Prisioneiro de Azkaban":
        return (
          <p>
            Descrição do filme: Neste terceiro ano em Hogwarts, Harry descobre
            que Sirius Black, um perigoso prisioneiro de Azkaban, pode estar
            atrás dele. Enquanto foge dos Dementadores, guardas de Azkaban,
            Harry e seus amigos aprendem mais sobre o passado de seus pais e a
            verdade sobre o trágico evento que mudou o destino de todos.
          </p>
        );
      case "Harry Potter e o Cálice de Fogo":
        return (
          <p>
            Descrição do filme: Harry é selecionado inesperadamente para
            participar do Torneio Tribruxo, uma competição mágica entre três
            escolas de magia. Enquanto enfrenta desafios mortais, ele descobre a
            ressurgência de Voldemort e a ameaça que paira sobre o mundo mágico.
          </p>
        );
      case "Harry Potter e a Ordem da Fênix":
        return (
          <p>
            Descrição do filme: Com a volta de Voldemort confirmada, Harry
            enfrenta a oposição do Ministério da Magia e forma a Ordem da Fênix
            para lutar contra as forças das trevas. Ele lidera seus amigos em
            uma batalha contra os Comensais da Morte enquanto enfrenta seus
            próprios demônios internos.
          </p>
        );
      case "Harry Potter e o Enigma do Príncipe":
        return (
          <p>
            Descrição do filme: Enquanto Voldemort ganha força e faz planos para
            a dominação total, Harry volta a Hogwarts para descobrir mais sobre
            o passado do Lorde das Trevas. Ele recebe a ajuda do misterioso
            Príncipe Mestiço enquanto se prepara para a batalha final.
          </p>
        );
      case "Harry Potter e as Relíquias da Morte - Parte 1":
        return (
          <p>
            Descrição do filme: Com Hogwarts sob controle dos Comensais da
            Morte, Harry, Ron e Hermione partem em uma missão perigosa para
            destruir as Horcruxes, objetos que contêm fragmentos da alma de
            Voldemort. Eles enfrentam desafios e perigos enquanto tentam impedir
            o retorno do Lorde das Trevas.
          </p>
        );
      case "Harry Potter e as Relíquias da Morte - Parte 2":
        return (
          <p>
            Descrição do filme: A batalha final entre o bem e o mal se aproxima
            quando Harry, Ron e Hermione retornam a Hogwarts para enfrentar
            Voldemort. Com a ajuda de seus aliados, eles lutam para destruir as
            Horcruxes e derrotar o Lorde das Trevas de uma vez por todas.
          </p>
        );
      default:
        return <p>Selecione um filme para ver a descrição.</p>;
    }
  };

  return (
    <section id="movies-container">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="movies-title"
      >
        <h2>Filmes</h2>
      </motion.div>
      <div className="movies-content-container">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="movies-content-one"
        >
          <picture>
            <img
              src="/harry-capa-filmes.jpg"
              alt="Capa dos filmes de Harry Potter"
              width="100%"
              height="100%"
            />
          </picture>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="movies-content-two"
        >
          <h3>Escolha um filme:</h3>
          <select
            value={selectedMovie}
            onChange={(e) => handleMovieSelect(e.target.value)}
            style={{ background: `var("--color-one")` }}
          >
            <option value="">Selecione um filme</option>
            <option value="Harry Potter e a Pedra Filosofal">
              Harry Potter e a Pedra Filosofal
            </option>
            <option value="Harry Potter e a Câmara Secreta">
              Harry Potter e a Câmara Secreta
            </option>
            <option value="Harry Potter e o Prisioneiro de Azkaban">
              Harry Potter e o Prisioneiro de Azkaban
            </option>
            <option value="Harry Potter e o Cálice de Fogo">
              Harry Potter e o Cálice de Fogo
            </option>
            <option value="Harry Potter e a Ordem da Fênix">
              Harry Potter e a Ordem da Fênix
            </option>
            <option value="Harry Potter e o Enigma do Príncipe">
              Harry Potter e o Enigma do Príncipe
            </option>
            <option value="Harry Potter e as Relíquias da Morte - Parte 1">
              Harry Potter e as Relíquias da Morte - Parte 1
            </option>
            <option value="Harry Potter e as Relíquias da Morte - Parte 2">
              Harry Potter e as Relíquias da Morte - Parte 2
            </option>
          </select>
          {renderMovieDescription()}
        </motion.div>
      </div>
    </section>
  );
};

export default Movies;
