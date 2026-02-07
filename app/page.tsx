import CVPage from "@/app/components/CVPage";
import Header from "@/app/components/Header";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="flex justify-center font-sans">
      <main className="min-h-screen w-full max-w-4xl bg-inherit py-4 overflow-auto">
        <CVPage>
          <Header></Header>
          <Section
            title={"Experience"}
          >
            <div></div>
          </Section>

          <Section
            title={"Education"}
          >
            <div></div>
          </Section>
        </CVPage>
      </main>
    </div>
  );
}
