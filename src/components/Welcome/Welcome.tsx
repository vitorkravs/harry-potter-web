"use client";

//style
import "./styles.scss";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

//Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Welcome = () => {
  return (
    <section id="welcome-container">
      <div
        id="bg-welcome"
        style={{
          backgroundImage: `url("/harry-potter-books-na-janela.jpg")`,
        }}
      ></div>
      <div id="title-welcome-container">
        <div id="title-welcome">
          <h1>Bem vindo ao Mundo Mágico de Harry Potter</h1>
          <p>
            Espero que tenha uma experiência imersiva, e que explore os segredos
            de Hogwarts e além...
          </p>
        </div>
      </div>
      <div id="books-container">
        <h2>Vamos começar pelos livros</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiper-slide-books"
        >
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e a Pedra Filosofal</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-1.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e a Câmara Secreta</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-2.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e o Prisioneiro de Azkaban</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-3.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e o Cálice de Fogo</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-4.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e a Ordem da Fênix</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-5.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e o Enigma do Príncipe</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-6.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-books-item">
            <h3>Harry Potter e as Relíquias da Morte</h3>
            <div>
              <Image
                src="/capa-do-livro-harry-potter-7.jpg"
                alt="livro 1 de Harry Potter"
                width={280}
                height={300}
                className="book-img"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Welcome;
