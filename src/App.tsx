import { Events } from "./components/events";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <div className="mx-auto">
        <Header />
        <main className="">
          <Events />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
