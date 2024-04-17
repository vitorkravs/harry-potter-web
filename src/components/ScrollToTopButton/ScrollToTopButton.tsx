"use client";

//style
import "./styles.scss";

//hooks
import { useEffect, useState } from "react";

//icon
import { GiMagicBroom } from "react-icons/gi";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  //Função para detectar a rolagem e definir se o botão é visível
  useEffect(() => {
    const toggleVisibility = () => {
      // Calcula a altura total do conteúdo da página
      const totalPageHeight = document.documentElement.scrollHeight;

      // Calcula a altura visível da página, ou seja, a altura da janela do navegador
      const viewportHeight = window.innerHeight;

      // Calcula 97% da altura total da página
      const ninetyPercentOfPage = totalPageHeight * 0.97;

      // Verifica se a posição atual de rolagem é maior que 300px E menor que 90% do total da página
      if (
        window.scrollY > 300 &&
        window.scrollY + viewportHeight < ninetyPercentOfPage
      ) {
        setIsVisible(true); // Mostra o botão
      } else {
        setIsVisible(false); // Esconde o botão
      }
    };

    // Adiciona o evento de escuta para rolagem na janela
    window.addEventListener("scroll", toggleVisibility);

    // Limpeza: Remove o evento de escuta quando o componente é desmontado
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button id="scroll-to-top-button" onClick={ScrollToTop}>
        <GiMagicBroom className="footer-icon" />
      </button>
    )
  );
};

export default ScrollToTopButton;
