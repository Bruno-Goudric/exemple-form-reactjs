import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { phoneNumber } from "utils/validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { normalizePhoneNumber } from "utils/mask";

import * as yup from "yup";
import * as Atoms from "components/Atoms";
import * as S from "./styles";

const validationSchema = yup.object({
  username: yup.string().required(),
  dt_birthday: yup.date().required(),
  email: yup.string().required(),
  phone: yup.string().matches(phoneNumber),
});

function Home() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const phoneValue = watch("phone");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  function onSubmit(data: any) {
    console.log(data);
  }

  function onError(error: any) {
    console.log("error: ", error);
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
        <S.Label htmlFor="name">Nome</S.Label>
        <S.Select
          {...register("username")}
          style={{ border: errors?.username?.type ? "1px solid red" : "" }}
        >
          <S.Option value="">Selecione</S.Option>
          <S.Option value="Bruno">Bruno</S.Option>
        </S.Select>
        {errors?.username?.type && (
          <Atoms.InputError type={errors.username.type} field="username" />
        )}

        <S.Label htmlFor="dt_birthday">Data de nascimento: *</S.Label>
        <S.Input
          id="dt_birthday"
          type="date"
          {...register("dt_birthday")}
          style={{
            border: errors?.dt_birthday?.type ? "1px solid red" : "",
          }}
        />

        {errors?.dt_birthday?.type && (
          <Atoms.InputError
            type={errors.dt_birthday.type}
            field="dt_birthday"
          />
        )}

        <S.Label htmlFor="email">E-mail: *</S.Label>
        <S.Input
          type="email"
          id="email"
          {...register("email")}
          style={{
            border: errors?.email?.type ? "1px solid red" : "",
          }}
        />
        {errors?.email?.type && (
          <Atoms.InputError type={errors.email.type} field="email" />
        )}

        <S.Label htmlFor="">Telefone: *</S.Label>
        <S.Input
          id="phone"
          type="text"
          {...register("phone")}
          style={{
            border: errors?.phone?.type ? "1px solid red" : "",
          }}
        />

        {errors?.phone?.type && (
          <Atoms.InputError type={errors.phone.type} field="phone" />
        )}

        <S.Button type="submit">Salvar</S.Button>
      </S.Form>
    </S.Container>
  );
}

export { Home };
