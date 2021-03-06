import React,{useState,useEffect} from "react";
import styled from "styled-components";
import '../style/Header.css'
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import SvgLogo from "../icons/Logo";

const svgVariants = {
  hidden: { x: -180 },
  visible: {
    x: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};
function Header() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll",() => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
    };
  }, []);
  return (
    <div className={`container ${show && "nav_black"}`}>
      <NavBar>
        <Link to="/">
          {/* svg logo implementing */}

          <motion.svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="85px"
            height="85px"
            viewBox="0 0 225.000000 225.000000"
            preserveAspectRatio="xMidYMid meet"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
          >
            <g
              transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
              fill="#fff"
              stroke="none"
            >
              <motion.path
                d="M1190 1557 c-60 -17 -106 -46 -155 -98 l-40 -43 38 32 c56 48 95 64
163 70 271 21 439 -341 287 -621 -61 -111 -171 -174 -287 -165 -68 6 -107 22
-163 70 -34 29 -34 27 7 -16 97 -102 234 -130 352 -73 64 32 145 113 177 179
51 106 65 250 36 363 -23 86 -50 138 -107 200 -84 92 -204 131 -308 102z"
                variants={pathVariants}
              />
              <motion.path
                d="M630 1305 l0 -55 70 0 70 0 0 -180 0 -180 65 0 65 0 0 180 0 180 154
0 154 0 31 50 c17 28 31 52 31 55 0 3 -144 5 -320 5 l-320 0 0 -55z"
                variants={pathVariants}
              />
              <motion.path
                d="M1289 1323 c-81 -133 -91 -146 -101 -129 -8 13 -27 16 -123 16 l-115
0 0 -160 0 -160 63 0 62 0 -3 130 c-2 71 1 130 5 130 4 0 32 -39 61 -85 29
-47 56 -85 60 -85 4 0 33 40 64 88 l58 87 0 -132 0 -133 65 0 65 0 0 235 0
235 -69 0 -69 0 -23 -37z"
                variants={pathVariants}
              />
            </g>
          </motion.svg>

        </Link>

        <Links>
          
          <Link to="/about">ABOUT</Link>
          <Link to="/work">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
          {/* <SvgLogo/> */}
          {/* <a href="/talCv.docx" download="Tal Mamistvalov Cv">RESUME</a> */}
        </Links>
      
      </NavBar>
    </div>
  );
}

export default Header;

const NavBar = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: calc(65px + 2.2vw);
    max-height: 130px;
  }
  svg {
    height: calc(80px + 2.2vw);
    max-height: 130px;
    max-width: 130px;
  }
`;
const Links = styled.div`
  width: 60%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: space-around;
  display: flex;
  max-width: 400px;
  a {
    color: #000;
    color: #00ffc3;
    z-index: 100000;
    text-decoration: none;
  }
  @media only screen and (max-width: 769px) {
    display: none;
    
  }
`;


