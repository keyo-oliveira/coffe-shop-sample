import { MapPinLine } from "@phosphor-icons/react";

export const TitleAndDescription = () => {
    return (
        <div className="address_paragraph-container flex gap-2">
        <MapPinLine color="#C47F17" size={19} />
        <div className="text-start h-full">
          <h3 className="address__title font-roboto font-normal text-base text-base-subtitle">Endereço de Entrega</h3>
          <span className="address__label font-roboto font-normal text-base text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
    )
}