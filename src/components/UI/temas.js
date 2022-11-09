import {
  backgroundBase,
  backgroundBaseDark,
  backgroundLevel1,
  backgroundLevel1Dark,
  backgroundLevel2,
  backgroundLevel2Dark,
  borderBase,
  borderBaseDark,
  textColorBase,
  textColorBaseDark,
} from "./variaveis";

export const temaClaro = {
  body: backgroundLevel1,
  base: borderBase,
  text: textColorBase,
  button: backgroundLevel2,
  inside: backgroundBase
};

export const temaEscuro = {
  body: backgroundLevel1Dark,
  base: borderBaseDark,
  text: textColorBaseDark,
  button: backgroundLevel2Dark,
  inside: backgroundBaseDark
};
