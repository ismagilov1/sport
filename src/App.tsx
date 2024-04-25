import { Events } from "./components/events";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header";
import Partners from "./components/partners/partners";

function App() {
  return (
    <>
      <div className="mx-auto">
        <Header />

        <main className="">
          <Events />
          <Partners />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
