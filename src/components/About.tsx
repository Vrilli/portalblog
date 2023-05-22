import Image from "next/image";
import React from "react";
import Vrilli from "../../public/vrilli.png";

const About = () => {
  return (
    <div className="flex flex-col items-center md:flex-row mt-16">
      <div className="md:w-[970px] md:h-auto">
        <h1 className="text-center text-4xl">Quien soy</h1>
        <p className="md:text-lg text-justify">
          Soy <b>Vrilli Castro</b>, una mujer que día a día se apasiona
          más con esta hermosa profesión. Lo que busco con estos escritos es que
          cada persona que los lea se enamore, al igual que yo, de la tecnología
          y se sienta atraída por todo esto que está revolucionando el mundo.
          Además, también soy desarrolladora Front-End con experiencia en la
          creación, desarrollo y modificación de sitios web, así como en la
          construcción de aplicaciones basadas en React, TypeScript, Tailwind
          CSS y sistemas de control de versiones con Git. A través de estas
          tecnologías, genero soluciones digitales que proporcionan una
          experiencia agradable para el usuario final. Además, cuento con
          sólidos conocimientos en tecnologías web como JavaScript, HTML y CSS,
          así como en Git, Github y la metodología Scrum. También tengo
          conocimientos básicos en Python. Soy reconocida por la pasión y el
          empeño que pongo en cada proyecto, así como por mi determinación para
          completar lo que empiezo.
        </p>
      </div>
      <div>
        <Image className="w-auto h-64 md:h-[450px]" src={Vrilli} alt="sobreMi" />
      </div>
    </div>
  );
};

export default About;
