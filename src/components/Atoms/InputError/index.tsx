import React from "react";
import errors from "utils/error.json";
import InputErrorProps from "./IInputError";

import * as S from "./styles";

function InputError({ type, field }: InputErrorProps) {
  return (
    //  @ts-expect-error: Unreachable code error
    <S.Msg>{errors[field][type]}</S.Msg>
  );
}

export { InputError };
