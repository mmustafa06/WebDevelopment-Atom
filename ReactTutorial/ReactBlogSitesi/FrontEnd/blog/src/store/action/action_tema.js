import { DARK_MODE, LIGHT_MODE } from "../types";

const darkModaGec = function () {
  return {
    type: DARK_MODE,
  };
};
const lightModaGec = function () {
  return {
    type: LIGHT_MODE,
  };
};
export { darkModaGec, lightModaGec };
