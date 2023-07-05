import { CurrencyDollar } from "@phosphor-icons/react";

export const PaymentTitle = () => {
  return (
    <div className="payment-title__container max-w-2xl pb-10 flex gap-2">
      <CurrencyDollar color={"#8047f8"} size={22} />
      <p className="flex flex-col">
        <span className="font-roboto text-base-subtitle text-base">
          Pagamento
        </span>
        <span className="font-roboto text-sm text-base-text">
          Escolha a forma que deseja utilizar como meio de pagamento.
        </span>
      </p>
    </div>
  );
};
