"use client";

//style
import "./styles.scss";

//image
import Image from "next/image";

//components
import ColorOption from "../ColorOption/ColorOption";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

//icons
import { GiCastle } from "react-icons/gi";

//hooks
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header id="header-container">
      <div id="color-option-container">
        <ColorOption />
      </div>
      <div id="logo-img-container">
        <Image
          src="/hogwarts-logo.jpg"
          alt="Logo de hogwarts"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="open-menu" onClick={toggleMenu}>
        <GiCastle className="icon-open-menu" />
      </div>
      <HeaderNavigation openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
