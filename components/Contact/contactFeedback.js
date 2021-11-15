import styles from "../Contact/ContactForm.module.css";
import { useEffect, useState } from "react";

export default function ContactFeedback(props) {
  const [clicked, setClicked] = useState(true);

  function handleClick(e) {
    setClicked(false);
    props.onClick(false);
  }

  setTimeout(() => {
    props.onClick(false);
  }, 3000);
  return (
    <>
      {clicked ? (
        <div onClick={handleClick} className={styles["contact-feedback"]}>
          MESSAGE SENT! THANK YOU!
        </div>
      ) : null}
    </>
  );
}
