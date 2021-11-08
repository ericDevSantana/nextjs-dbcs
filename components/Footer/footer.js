import styles from "../Footer/Footer.module.css";
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
          <h1>Follow Us</h1>
          <div className={styles["Footer-Social-Media-Links"]}>
            <i>
              <FontAwesomeIcon icon={faTwitter} size="2x" color="deepskyblue" />
            </i>
            <i>
              <FontAwesomeIcon icon={faInstagram} size="2x" color="purple" />
            </i>
            <i>
              <FontAwesomeIcon icon={faFacebook} size="2x" color="royalblue" />
            </i>{" "}
          </div>
        </div>
        <div className={styles["Footer-Other"]}>
          <h1>Resources</h1>
          <div className={styles["Footer-Other-Links"]}>
            <a>LINK 1</a>
            <a>LINK 2</a>
            <a>LINK 3</a>
          </div>
        </div>
        <div className={styles["Footer-Contact"]}>
          <h1>Contact Us</h1>
          <div className={styles["Footer-Contact-Item"]}>
            <FontAwesomeIcon icon={faEnvelope} size="1x" color="coral" />
            <p>DYNAMICBLACKCAR@GMAIL.COM</p>
          </div>
          <div className={styles["Footer-Contact-Item"]}>
            <FontAwesomeIcon icon={faPhone} size="1x" color="coral" />
            <p>1+ (415) 767-6551</p>
          </div>
        </div>
      </div>
      <div className={styles["Footer-Message"]}>
        <p>© 2021 Dynamic Black Car Service. All rights reserved.</p>
      </div>
    </div>
  );
}
