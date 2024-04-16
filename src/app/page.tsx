import Characters from "@/components/Characters/Characters";
import Header from "@/components/Header/Header";
import Movies from "@/components/Movies/Movies";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Characters />
        <Movies />
      </main>
    </>
  );
}
