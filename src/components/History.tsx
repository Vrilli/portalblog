import React from 'react'
import { FcLike } from "react-icons/fc";
import Card from "./Cars";

const History = () => {
  return (
    <div className="">
    <h1 className="text-center font-semibold text-5xl">
      Bienvenidos a la ERA de la IA <FcLike />{" "}
    </h1>
    <p className="text-lg text-justify md:text-center m-0 mt-6 leading-7">
      Aquí encontrarás cada uno de los escritos que he realizado según mi
      punto de vista y las lecturas que he hecho sobre la Inteligencia
      Artificial. <br /> Sumérgete en esta gran aventura y acompáñame a descubrir día a día lo
      maravilloso de este mundo.
    </p>
    <Card />
  </div>
  )
}

export default History