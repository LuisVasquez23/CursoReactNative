import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState,
    // watch
  } = useForm<FormInputs>({
    defaultValues: {
      email: "luis@gmail.com",
      password: "Abc123",
    },
  });

  const submit = (myForm: FormInputs) => {
    console.log(myForm);
  };

  //   console.log(watch("email"));

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Formulario</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <input type="text" placeholder="Password" {...register("password")} />
          <button type="submit">Ingresar</button>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </>
  );
};

export default FormPage;
