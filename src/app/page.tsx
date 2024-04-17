import Characters from "@/components/Characters/Characters";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Movies from "@/components/Movies/Movies";
import Potions from "@/components/Potions/Potions";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import Spells from "@/components/Spells/Spells";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <main>
        <Welcome />
        <Characters />
        <Movies />
        <Potions />
        <Spells />
      </main>
      <Footer />
    </>
  );
}
