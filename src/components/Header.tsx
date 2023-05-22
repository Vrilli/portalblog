import React from "react";
import Logo from "../../public/logosin2.png";
import Image from "next/image";
import { Button } from "antd";

const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Image className="w-auto h-20" src={Logo} alt="Logo" />
        <Button type="primary" className="rounded bg-violet-500 font-bold">
          <a href="https://wa.me/3117671177">CONTACTAME</a>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
