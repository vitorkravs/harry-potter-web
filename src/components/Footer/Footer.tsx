//styles
import "./styles.scss";

//icon
import { GiMagicBroom } from "react-icons/gi";

//icons
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <p id="hashtag-footer">
        #Web-Developer #Web-Design #Portfólio #Programador #Full-Stack
      </p>
      <div id="links-footer-container">
        <a
          href="https://www.instagram.com/vitorkravs"
          target="_blank"
          rel="noopener noreferrer"
          className="links-footer footer-instagram"
        >
          <SiInstagram style={{ color: "white" }} />
          Instagram
        </a>
        <a
          href="https://www.github.com/vitorkravs"
          target="_blank"
          rel="noopener noreferrer"
          className="links-footer footer-github"
        >
          <SiGithub style={{ color: "white" }} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vitorkravszenko/"
          target="_blank"
          rel="noopener noreferrer"
          className="links-footer footer-linkedin"
        >
          <SiLinkedin style={{ color: "white" }} />
          Linkedin
        </a>
      </div>
      <Link href="#header-container" id="scroll-to-top-footer">
        Voltar ao topo <GiMagicBroom className="icon-scroll-to-top-footer" />
      </Link>
      <p id="rights-footer">
        Direitos reservados para{" "}
        <span id="name-footer">vitor cesar kravszenko</span>
      </p>
    </footer>
  );
};

export default Footer;
