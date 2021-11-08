import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../Navbar/Navbar.module.css";
import Link from "next/link";

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
            <Link href="/">
              <a>Back</a>
            </Link>
          </div>
        ) : windowDimensions.width > 1300 ? (
          <div className={styles["NavBar-Links"]}>
            <Link href="#home">
              <a>Home</a>
            </Link>
            <Link href="#about">
              <a>About</a>
            </Link>
            <Link href="#vehicles">
              <a>Vehicles</a>
            </Link>
            <Link href="#services">
              <a>Services</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
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
            <Link href="#home">
              <a>Home</a>
            </Link>
            <Link href="#about">
              <a>About</a>
            </Link>
            <Link href="#vehicles">
              <a>Vehicles</a>
            </Link>
            <Link href="#services">
              <a>Services</a>
            </Link>
            <Link onClick={handleContactClick} href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
