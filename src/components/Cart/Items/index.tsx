import { CartProducts } from "./CartProducts";
import { ConfirmButton } from "./ConfirmButton";
import { Totals } from "./Totals";

export const Items = () => {


  return (
    <div className="cart-items__container max-w-md w-[448px] col-start-2 row-start-1 bg-base-card rounded-[44px] p-10 gap-6 flex flex-col ml-8">
      <CartProducts />
      <Totals />
      <ConfirmButton />
    </div>
  );
};
