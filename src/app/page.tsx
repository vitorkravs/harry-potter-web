import Characters from "@/components/Characters/Characters";
import Header from "@/components/Header/Header";
import Welcome from "@/components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <Characters />
      </main>
    </>
  );
}
