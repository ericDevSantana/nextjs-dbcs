import styles from "../Footer/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles["Footer"]}>
      <div className={styles["Footer-Info"]}>
        <div className={styles["Footer-Social-Media"]}>
          <h2>FOLLOW US</h2>
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/14157676551"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="2x" color="lightgreen" />
            </a>
          </div>
        </div>
        <div className={styles["Footer-Other"]}>
          <h2>RESOURCES</h2>
          <div className={styles["Footer-Other-Links"]}>
            <Link href="/#vehicles">VEHICLES</Link>
            <Link href="/#services">SERVICES</Link>
          </div>
        </div>
        {/* // */}
        <div className={styles["Footer-Contact"]}>
          <h2>CONTACT US</h2>
          <div className={styles["Footer-Contact-Item"]}>
            <FontAwesomeIcon icon={faPhone} size="1x" color="coral" />
            <Link href="tel:+1-415-767-6551">
              <p>1+ (415) 767-6551</p>
            </Link>
          </div>
          <div className={styles["Footer-Contact-Item"]}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="coral" />
            <Link href="/contact">
              <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
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
