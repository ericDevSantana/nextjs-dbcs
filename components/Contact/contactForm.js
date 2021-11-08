import React from "react";
import styles from "../Contact/ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm(props) {
  return (
    <div className={styles["contact-form"]}>
      <div className={styles["contact-background-image"]}></div>
      <div className={styles["contact-main"]}>
        <div className={styles["contact-title"]}>
          <h1>CONTACT US</h1>
        </div>
        <div className={styles["contact-outer-form"]}>
          <div className={styles["contact-full-form"]}>
            <div className={styles["contact-inner-form"]}>
              <div className={styles["contact-field"]}>
                <label>Name</label>
                <input placeholder="Your name"></input>
              </div>
              <div className={styles["contact-field"]}>
                <label>Phone Number</label>
                <input placeholder="Your phone number"></input>
              </div>
              <div className={styles["contact-field"]}>
                <label>E-mail</label>
                <input placeholder="Your e-mail"></input>
              </div>
              <label>Message</label>
              <textarea rows="5" placeholder="Type your message..."></textarea>
            </div>
            <button className={styles["contact-inner-button"]}>SUBMIT</button>
          </div>
          <div className={styles["contact-info"]}>
            <h1>Any questions?</h1>
            <div className={styles["contact-info-item"]}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="coral" />
              <p>DYNAMICBLACKCAR@GMAIL.COM</p>
            </div>
            <div className={styles["contact-info-item"]}>
              <FontAwesomeIcon icon={faPhone} size="2x" color="coral" />
              <p>1+ (415) 767-6551</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
