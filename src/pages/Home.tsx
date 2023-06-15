import { Banner } from "../components/Home/Banner";
import { ProductContextProvider } from "../components/contexts/ProductContext";
import { Header } from "../components/General/Header";
import { Shelf } from "../components/Home/Shelfs";

export const Home = () => {
  return (
    <div className="home__container">
      <ProductContextProvider>
        <Header />
        <Banner />
        <Shelf />
      </ProductContextProvider>
    </div>
  );
};
