import React from "react";
import { Card, Button } from "antd";
import Image from "next/image";
import Logo from "../../public/ia.jpg";
import Icono from "../../public/IAMANOOs.jpg";
import { FcDown } from "react-icons/fc";

const Cars = () => {
  return (
   
    <div className="mt-24 flex flex-wrap gap-10 justify-center">
      <div className="mr-4">
        <Card
          hoverable
          style={{ width: 240 }}
          className="h-full"
          cover={<Image className="w-auto h-44" alt="Logo" src={Logo} />}
        >
          <h1 className="text-lg">La era IA</h1>
          <p className="text-justify text-sm">
            Si quieres leer mi artículo, haz clic en el botón de abajo.
            <FcDown />{" "}
          </p>
          <Button className="mt-auto ml-20 bg-fuchsia-300 hover:bg-fuchsia-100 font-semibold rounded">
            <a href="https://programarporpasion.blogspot.com/2023/05/la-era-de-la-ia.html">
              CLIQUEAME
            </a>
          </Button>
        </Card>
      </div>

      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          className="h-full"
          cover={<Image className="w-auto h-44" alt="Icono" src={Icono} />}
        >
          <h1 className="text-base">La huella Google en la IA</h1>
          <p className="text-justify text-sm">
            Si quieres leer mi artículo, haz clic en el botón de abajo.
            <FcDown />{" "}
          </p>
          <Button className="mt-auto  ml-20  bg-fuchsia-300 hover:bg-fuchsia-100 font-semibold rounded">
            <a href="https://programarporpasion.blogspot.com/2023/05/la-huella-google-en-la-ia.html">
              CLIQUEAME
            </a>
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Cars;
