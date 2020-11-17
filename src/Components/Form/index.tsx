import React from "react";
import { useForm } from "react-hook-form";

import {
  Container,
  ContainerForm,
  TitleForm,
  TextForm,
  FormContact,
  FormInfo,
  FormInfoName,
  FormInfoEmail,
  MessageBox,
} from "./styles";

type FormData = {
  name: string;
  email: string;
  messageBox: string;
};

const ContactForm: React.FC = () => {
  const { register, handleSubmit, errors, trigger, reset } = useForm<
    FormData
  >();

  const onSubmit = handleSubmit(({ name, email, messageBox }) => {
    console.log(name, email, messageBox);
  });

  return (
    <Container>
      <ContainerForm>
        <TitleForm>Formulário</TitleForm>
        <TextForm>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, dolor
          esse laborum quibusdam commodi temporibus officiis voluptatem minus
          omnis tenetur dicta autem consequuntur impedit, totam, ab quaerat.
          Voluptate, quisquam repellendus.
        </TextForm>
        <FormContact>
          <form onSubmit={onSubmit}>
            <FormInfo>
                <FormInfoName>
              <label htmlFor="inputName" className="inputName">
                Nome
              </label>
              <input
                type="text"
                id="inputName"
                name="name"
                autoComplete="off"
                ref={register({
                  required: true,
                  minLength: 5,
                })}
              />
               {errors.name && errors.name.type === "required" && (
              <p className="error">Campo obrigatório</p>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <p className="error">Deve conter no mínimo 5 caracteres</p>
            )}
              </FormInfoName>
              <FormInfoEmail>
              <label htmlFor="inputEmail" className="inputEmail">
                E-mail
              </label>
              <input
                type="text"
                id="inputEmail"
                name="email"
                autoComplete="off"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Digite um e-mail válido.",
                  },
                })}
              />
               {errors.email && errors.email.type === "required" && (
              <p className="error">Campo obrigatório</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error">{errors.email.message}</p>
            )}
              </FormInfoEmail>
            </FormInfo>
            <MessageBox>
              <label htmlFor="messageBox">Mensagem</label>
              <textarea
                name="messageBox"
                id="messageBox"
                cols={30}
                rows={6}
                autoComplete="off"
                ref={register({
                  required: true,
                  minLength: 30,
                  maxLength: 150,
                })}
              />
              {errors.messageBox && errors.messageBox.type === "required" && (
                <p className="error">Campo obrigatório</p>
              )}
              {errors.messageBox && errors.messageBox.type === "minLength" && (
                <p className="error">
                  A mensagem deve conter no mínimo 30 caracteres.
                </p>
              )}
              {errors.messageBox && errors.messageBox.type === "maxLength" && (
                <p className="error">
                  A mensagem deve conter no máximo 150 caracteres.
                </p>
              )}
            </MessageBox>
            <button
              type="submit"
              onClick={async () => {
                const result = await trigger(["name", "email", "messageBox"]);
                if (result) {
                  alert("Mensagem enviada com sucesso!");
                  window.location.reload();     
                  reset();             
                }
              }}
            >
              ENVIAR
            </button>
          </form>
        </FormContact>
      </ContainerForm>
    </Container>
  );
};

export default ContactForm;
