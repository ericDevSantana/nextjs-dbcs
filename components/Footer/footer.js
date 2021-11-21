import styles from "../Footer/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles["Footer"]}>
      <div className={styles["Footer-Info"]}>
        <div className={styles["Footer-Social-Media"]}>
          <h1>FOLLOW US</h1>
          <div className={styles["Footer-Social-Media-Links"]}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/dynamicblackcar"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" color="deepskyblue" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/dynamicblackcar/"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="purple" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Dynamic-Black-Car-Service-109570161518782/"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" color="royalblue" />
            </a>
          </div>
        </div>
        <div className={styles["Footer-Other"]}>
          <h1>RESOURCES</h1>
          <div className={styles["Footer-Other-Links"]}>
            <Link href="/#vehicles">
              <a>VEHICLES</a>
            </Link>
            <Link href="/#services">
              <a>SERVICES</a>
            </Link>
          </div>
        </div>
        <div className={styles["Footer-Contact"]}>
          <h1>CONTACT US</h1>
          <div className={styles["Footer-Contact-Item"]}>
            <FontAwesomeIcon icon={faPhone} size="1x" color="coral" />
            <Link href="tel:+1-415-767-6551">
              <p>1+ (415) 767-6551</p>
            </Link>
          </div>
          <div className={styles["Footer-Contact-Item"]}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="coral" />
            <Link href="/contact">
              <p>DYNAMICBLACKCAR@GMAIL.COM</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["Footer-Message"]}>
        <p>© 2021 Dynamic Black Car Service. All rights reserved.</p>
      </div>
    </div>
  );
}
