import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//custome HOOKS ¿
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //en este caso el useEffect avita que se ejecute una peticion de gifs cada que se
  //escribe en el input del formulario
  useEffect(() => {
    getGifs(category).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [category]);

  return state;
};
