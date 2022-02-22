import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Shop } from "./components/Shop";
import { ShopProvider } from "./context";

function App() {
  return (
    <>
      <Header/>
      <ShopProvider>
        <Shop />
      </ShopProvider>
      <Footer />
    </>
  );
}

export default App;
