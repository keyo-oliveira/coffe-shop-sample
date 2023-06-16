import { Address } from "../components/Cart/Address";
import { Items } from "../components/Cart/Items";
import { Payment } from "../components/Cart/Payment";
import { Header } from "../components/General/Header";

export const Cart = () => {
  return (
    <>
      <Header />
      <div className="cart__container max-w-6xl m-auto">
        <Address />
        <Payment />
        <Items />
      </div>
    </>
  );
};
