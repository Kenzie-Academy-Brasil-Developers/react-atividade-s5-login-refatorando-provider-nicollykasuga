import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Auth";
import { Background, Formbox } from "./styles";
import { GoPrimitiveDot } from "react-icons/go";

export const Login = () => {
  interface UserData {
    email: string;
    password: string;
  }

  const { signIn } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido*").required("Campo obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  function onSubmitFunc(data: UserData) {
    console.log(data);
    signIn(data);
  }

  return (
    <Background>
      <Formbox>
        <h1>
          Faça seu login
          <span className="Boxdot">
            <GoPrimitiveDot className="dot" />
          </span>
        </h1>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <label>Email:</label>
          <input
            placeholder="Digite aqui seu email"
            {...register("email")}
          ></input>
          <p>{errors.email?.message}</p>
          <label>Senha:</label>
          <input
            placeholder="Digite aqui senha"
            type="password"
            {...register("password")}
          ></input>
          <p>{errors.password?.message}</p>
          <button type="submit">Entrar</button>
        </form>
      </Formbox>
    </Background>
  );
};
