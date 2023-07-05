import { useForm } from "react-hook-form";
import { TitleAndDescription } from "./TitleAndDescription";
import { useDispatch } from "react-redux";
import React from "react";
import { updateAddress } from "../../../store/cartSlice";

interface AddressForm {
  cep: string;
  street: string;
  complement: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

export const Address = () => {
  const { register } = useForm<AddressForm>();
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const {name, value} = event.target
    dispatch(updateAddress({
      [name]: value
    }))
  }



  return (
    <>
      <div className="address__form-container max-w-2xl p-10 bg-base-card rounded-md">
        <TitleAndDescription />
        <form className="grid grid-cols-3 grid-rows-4 gap-4 mt-8" onChange={handleChange}>
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-1 col-end-4 row-start-1 row-end-2 max-w-[200px]"
            type="number"
            placeholder="CEP"
            name="cep"
            tabIndex={0}
            {...(register("cep"), { required: true, length: 8 })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-1 col-end-4 row-start-2 row-end-3"
            type="text"
            placeholder="Rua"
            name="street"
            tabIndex={1}
            {...(register("street"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-2 col-end-4 row-start-3 row-end-4"
            type="text"
            placeholder="Complemento"
            name="complement"
            tabIndex={2}
            {...(register("complement"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-1 col-end-2 row-start-3 row-end-4"
            type="text"
            placeholder="Número"
            name="number"
            tabIndex={3}
            {...(register("number"), { required: true, maxLength: 10 })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex"
            type="text"
            placeholder="Bairro"
            name="neighborhood"
            tabIndex={4}
            {...(register("neighborhood"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex"
            type="text"
            placeholder="Cidade"
            name="city"
            tabIndex={5}
            {...(register("city"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex"
            type="text"
            placeholder="UF"
            name="state"
            tabIndex={6}
            {...(register("state"), { required: true, length: 2 })}
          />
        </form>
      </div>
    </>
  );
};
