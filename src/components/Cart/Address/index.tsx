import { useForm } from "react-hook-form";
import { TitleAndDescription } from "./TitleAndDescription";

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
  const { register, handleSubmit } = useForm<AddressForm>();

  const onSubmit = (data: AddressForm) => console.log(data);

  return (
    <>
      <div className="address__form-container max-w-2xl p-10">
        <TitleAndDescription />
        <form
          className="grid grid-cols-3 grid-rows-4 gap-4 mt-8"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-1 col-end-4 row-start-1 row-end-2 max-w-[200px]"
            type="number"
            placeholder="CEP"
            {...(register("cep"), { required: true, length: 8 })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-1 col-end-4 row-start-2 row-end-3"
            type="text"
            placeholder="Rua"
            {...(register("street"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-2 col-end-4 row-start-3 row-end-4"
            type="text"
            placeholder="Complemento"
            {...(register("complement"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex col-start-1 col-end-2 row-start-3 row-end-4"
            type="text"
            placeholder="Número"
            {...(register("number"), { required: true, maxLength: 10 })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex"
            type="text"
            placeholder="Bairro"
            {...(register("neighborhood"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex"
            type="text"
            placeholder="Cidade"
            {...(register("city"), { required: true })}
          />
          <input
            className="rounded-md border-base-button border-collapse border-solid border-2 bg-base-input text-base-label font-roboto font-normal text-sm p-2 flex"
            type="text"
            placeholder="UF"
            {...(register("state"), { required: true, length: 2 })}
          />
        </form>
      </div>
    </>
  );
};
