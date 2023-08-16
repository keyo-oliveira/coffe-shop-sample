import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MiniCart } from "./MiniCart";
import { Region } from "./Region";
import { RegionContextProvider } from "../../contexts/RegionContext";

export const Header = () => {
  return (
    <header className="header__Container flex items-center h-[104px] w-full justify-between max-w-[1120px] mr-auto ml-auto">
      <Link to="/">
        <Logo />
      </Link>
      <div className="header__region-cart-container flex justify-between items-center gap-2">
       <RegionContextProvider >
         <Region />
       </RegionContextProvider>
        <MiniCart />
      </div>
    </header>
  );
};
