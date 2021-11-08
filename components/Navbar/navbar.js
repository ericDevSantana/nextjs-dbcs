import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../Navbar/Navbar.module.css";

export default function NavBar(props) {
  const router = useRouter();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  function clickMenuHandle(e) {
    setIsOpen((prevVar) => {
      return !prevVar;
    });
  }

  function handleContactClick(e) {
    e.preventDefault();
    router.push("/contact");
  }

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setIsOpen(false);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["NavBar"]}>
      <div className={styles["NavBar-main"]}>
        <div className={styles["NavBar-Brand"]}>DYNAMIC BCS</div>

        {props.contact ? (
          <div className={styles["NavBar-Links-Contact"]}>
            <a href="/">BACK</a>
          </div>
        ) : windowDimensions.width > 1300 ? (
          <div className={styles["NavBar-Links"]}>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#vehicles">VEHICLES</a>
            <a href="#services">SERVICES</a>
            <a href="/contact">CONTACT</a>
          </div>
        ) : (
          <div onClick={clickMenuHandle} className={styles["sandwich-menu"]}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>

      {isOpen ? (
        <div className={styles["sandwich-menu-tray"]}>
          <div
            onClick={clickMenuHandle}
            className={styles["sandwich-menu-links"]}
          >
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#vehicles">VEHICLES</a>
            <a href="#services">SERVICES</a>
            <a onClick={handleContactClick}>CONTACT</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
