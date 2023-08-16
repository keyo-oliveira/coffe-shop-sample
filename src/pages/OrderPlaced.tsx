import { Header } from "../components/General/Header";


export const OrderPlaced = () => {
  return (
    <>
   <Header />
    <div className="orderPlaced__container">
        <div>
          <span>Uhu! Pedido confirmado</span>
          <span>Agora é só aguardar que logo chegará até você.</span>
        </div>
    </div>
    </>
  );
};
