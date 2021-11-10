import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../Navbar/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";

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
        <Link href="/">
          <div className={styles["NavBar-Brand"]}>DYNAMIC BCS</div>
        </Link>

        {props.contact ? (
          <div className={styles["NavBar-Links-Contact"]}>
            <Link href="/">
              <a>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
              </a>
            </Link>
          </div>
        ) : windowDimensions.width > 1300 ? (
          <div className={styles["NavBar-Links"]}>
            <Link href="#home">
              <a>HOME</a>
            </Link>
            <Link href="#about">
              <a>ABOUT</a>
            </Link>
            <Link href="#vehicles">
              <a>VEHICLES</a>
            </Link>
            <Link href="#services">
              <a>SERVICES</a>
            </Link>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </div>
        ) : (
          <div onClick={clickMenuHandle} className={styles["sandwich-menu"]}>
            <FontAwesomeIcon icon={faBars} size="2x" />
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
              <a>HOME</a>
            </Link>
            <Link href="#about">
              <a>ABOUT</a>
            </Link>
            <Link href="#vehicles">
              <a>VEHICLES</a>
            </Link>
            <Link href="#services">
              <a>SERVICES</a>
            </Link>
            <Link onClick={handleContactClick} href="/contact">
              <a>CONTACT</a>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
