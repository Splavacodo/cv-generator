import CVPage from "@/app/components/CVPage";

export default function Home() {
  return (
    <div className="flex justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-4xl flex-col bg-inherit py-4 overflow-auto">
        <CVPage>
          <div>yo</div>
        </CVPage>
      </main>
    </div>
  );
}
