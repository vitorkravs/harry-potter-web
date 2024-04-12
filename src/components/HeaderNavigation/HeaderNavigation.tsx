"use client";

import { BiSolidCameraMovie } from "react-icons/bi";
//style
import "./styles.scss";

//hooks
import { FaPeopleGroup } from "react-icons/fa6";

//icons
import { GiCastle, GiPotionBall, GiWhiteBook } from "react-icons/gi";
import { GrMagic } from "react-icons/gr";

//animations
import { motion } from "framer-motion";
import { menuAnimation } from "@/animations/menuNavigation";
import { IoClose } from "react-icons/io5";

interface HeaderNavigationProps {
  openMenu: boolean;
  toggleMenu: () => void;
}

const HeaderNavigation = ({ openMenu, toggleMenu }: HeaderNavigationProps) => {
  return (
    <motion.div
      initial="closed"
      animate={openMenu ? "opened" : "closed"}
      variants={menuAnimation}
      id="menu-nav-container"
      style={
        openMenu
          ? { height: "100vh", width: "100%" }
          : { height: "0", width: "0" }
      }
    >
      <motion.div
        initial="closed"
        animate={openMenu ? "opened" : "closed"}
        variants={menuAnimation}
        id="menu-nav-content"
        style={
          openMenu
            ? { height: "100vh", width: "100%" }
            : { height: "0", width: "0" }
        }
      >
        <motion.nav
          initial="closed"
          animate={openMenu ? "opened" : "closed"}
          variants={menuAnimation}
          style={
            openMenu
              ? { height: "100vh", width: "100%" }
              : { height: "0", width: "0" }
          }
        >
          <div
            className="close-menu"
            onClick={toggleMenu}
            style={openMenu ? { display: "flex" } : { display: "none" }}
          >
            <IoClose className="icon-close-menu" />
          </div>
          <ul className="list-menu-container">
            <li>
              <GiWhiteBook className="icon" />
              <a href="">Livros</a>
            </li>
            <li>
              <FaPeopleGroup className="icon" />
              <a href="">Personagens</a>
            </li>
            <li>
              <BiSolidCameraMovie className="icon" />
              <a href="">Filmes</a>
            </li>
            <li>
              <GiPotionBall className="icon" />
              <a href="">Poções</a>
            </li>
            <li>
              <GrMagic className="icon" />
              <a href="">Feitiços</a>
            </li>
          </ul>
        </motion.nav>
      </motion.div>
    </motion.div>
  );
};

export default HeaderNavigation;
